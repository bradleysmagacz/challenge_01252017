import axios from 'axios'
import lodash from 'lodash'

const apiKey = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_CURIOSITY_PHOTO_FILTER = 'SET_CURIOSITY_PHOTO_FILTER'
export const SET_IMAGE_OF_THE_DAY = 'SET_IMAGE_OF_THE_DAY'
export const SET_ROVER_CURIOSITY_PHOTOS = 'SET_ROVER_CURIOSITY_PHOTOS'
export const SET_CURIOSITY_FILTERS = 'SET_CURIOSITY_FILTERS'
export const SET_ROVER_OPPORTUNITY_PHOTOS = 'SET_ROVER_OPPORTUNITY_PHOTOS'

// ------------------------------------
// Actions
// ------------------------------------
export function setCuriosityPhotoFilter (filter) {
  return {
    type    : SET_CURIOSITY_PHOTO_FILTER,
    payload : filter
  }
}

export function setImageOfTheDay (photo = {}) {
  return {
    type    : SET_IMAGE_OF_THE_DAY,
    payload : photo
  }
}

export function setCuriosityPhotos (photos = []) {
  return {
    type    : SET_ROVER_CURIOSITY_PHOTOS,
    payload : photos
  }
}

export function setCuriosityFilters (photos = []) {
  return {
    type    : SET_CURIOSITY_FILTERS,
    payload : photos
  }
}

export function setOpportunityPhotos (photos = []) {
  return {
    type    : SET_ROVER_OPPORTUNITY_PHOTOS,
    payload : photos
  }
}

export const getImages = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-1-24&api_key=${apiKey}`)
        .then(function (response) {
          console.log(response)
          const photos = response.data.photos
          const image = photos[Math.floor(Math.random()*photos.length)]
          const curiosityPhotos = []
          const opportunityPhotos = []
          const curiosityFilters = []
          photos.forEach(photo => {
            if (photo.rover.name === 'Curiosity') {
              curiosityPhotos.push(photo)
            }
            if (photo.rover.name === 'Opportunity') {
              opportunityPhotos.push(photo)
            }
            if (photo.camera.name) {
              curiosityFilters.push(photo.camera.name)
            }
          })
          dispatch(setImageOfTheDay(image))
          dispatch(setCuriosityPhotos(curiosityPhotos))
          dispatch(setOpportunityPhotos(opportunityPhotos))
          dispatch(setCuriosityFilters(_.uniq(curiosityFilters)))
          resolve()
        })
        .catch(function (error) {
          console.log(error)
        })
    })
  }
}

export const actions = {
  setImageOfTheDay,
  getImages
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_CURIOSITY_FILTERS] : (state, action) => Object.assign({}, state, {
    curiosityFilters : action.payload
  }),
  [SET_CURIOSITY_PHOTO_FILTER] : (state, action) => Object.assign({}, state, {
    filteredPhotos: state.curiosityPhotos.filter(photo => {
      if (photo.camera) {
        return photo.camera.name === action.payload
      }
    })
  }),
  [SET_IMAGE_OF_THE_DAY]    : (state, action) => Object.assign({}, state, { imageOfTheDay: action.payload }),
  [SET_ROVER_CURIOSITY_PHOTOS] : (state, action) => Object.assign({}, state, {
    curiosityPhotos: action.payload,
    filteredPhotos: action.payload
  }),
  [SET_ROVER_OPPORTUNITY_PHOTOS] : (state, action) => Object.assign({}, state, { opportunityPhotos: action.payload })
}

function photoFilterHandler(state, action) {

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  imageOfTheDay: {},
  curiosityPhotos: [],
  opportunityPhotos: [],
  curiosityFilters: [],
  filteredPhotos: []
}
export default function nasaReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
