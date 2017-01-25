import React from 'react'

export const ImageOfTheDay = (props) => (
  <div style={{ width: '75%', margin: '0 auto' }}>
    <img src={props.imageOfTheDay.img_src} style={{ maxWidth: '100%' }} />
  </div>
)

ImageOfTheDay.propTypes = {
  imageOfTheDay: React.PropTypes.object
}

export default ImageOfTheDay
