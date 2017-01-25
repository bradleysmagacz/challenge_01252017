export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ImageOfTheDay = require('../../components/ImageOfTheDay').default
      cb(null, ImageOfTheDay)

      /* Webpack named bundle   */
    }, 'imageOfTheDay')
  }
})
