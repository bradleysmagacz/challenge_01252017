import { connect } from 'react-redux'
import { getImages, setCuriosityPhotoFilter } from '../modules/nasa'

import Counter from '../components/Nasa'

const mapDispatchToProps = {
  getImages,
  setCuriosityPhotoFilter
}

const mapStateToProps = (state) => ({
  nasa : state.nasa,
  imageOfTheDay : state.nasa.imageOfTheDay,
  curiosityPhotos : state.nasa.curiosityPhotos,
  opportunityPhotos : state.nasa.opportunityPhotos,
  curiosityFilters : state.nasa.curiosityFilters,
  filteredPhotos: state.nasa.filteredPhotos
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
