import { injectReducer } from '../../store/reducers'
import ImageOfTheDayRoute from './routes/ImageOfTheDay'
import ImageGalleryRoute from './routes/ImageGallery'

export default (store) => ({
  path: 'nasa',
  getChildRoutes(location, cb) {
    // do asynchronous stuff to find the child routes
    cb(null, [
      ImageOfTheDayRoute(store),
      ImageGalleryRoute(store)
    ])
  },
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Nasa = require('./containers/NasaContainer').default
      const reducer = require('./modules/nasa').default

      /*  Add the reducer to the store on key 'nasa'  */
      injectReducer(store, { key: 'nasa', reducer })

      /*  Return getComponent   */
      cb(null, Nasa)

    /* Webpack named bundle   */
    }, 'nasa')
  }
})
