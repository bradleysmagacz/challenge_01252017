import React from 'react'

export const ImageGallery = (props) => {
  console.log('props', props)
  return (
    <div>
      <h1>Curiosity: Navigation Camera</h1>
      <select onChange={(ev) => props.setCuriosityPhotoFilter(ev.target.value)}>
        <option value=''>Camera Name</option>
        {props.curiosityFilters.map((name, idx) => {
          return <option value={name} key={name}>{name}</option>
        })}
      </select>
      <div style={{ width: '110%', margin: '0 auto' }}>
        {props.curiosityPhotos.map((photo, idx) => {
          return <img key={idx} src={photo.img_src} width='20%' style={{ display: 'inline-block', margin: '5px' }}/>
        })}
      </div>
      <h1>Opportunity: Panoramic Camera </h1>
      <div style={{ width: '110%', margin: '0 auto' }}>
        {props.opportunityPhotos.map((photo, idx) => {
          return <img key={idx} src={photo.img_src} width='20%' style={{ display: 'inline-block', margin: '5px' }}/>
        })}
      </div>
    </div>
  )
}

ImageGallery.propTypes = {
  imageOfTheDay: React.PropTypes.object
}

export default ImageGallery