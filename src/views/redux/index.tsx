import {
  createStore,
  applyMiddleware
} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store