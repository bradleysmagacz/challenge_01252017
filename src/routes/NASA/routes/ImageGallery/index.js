export default (store) => ({
  path: 'gallery',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ImageGallery = require('../../components/ImageGallery').default
      cb(null, ImageGallery)

      /* Webpack named bundle   */
    }, 'imageGallery')
  }
})
