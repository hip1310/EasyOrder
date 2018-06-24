import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import routerHistory from '../utils/routing/history'
import rootReducer from './rootReducer'

const store = createStore(
  connectRouter(routerHistory)(rootReducer), // new root reducer with router state
  {},
  compose(
    applyMiddleware(thunkMiddleware, routerMiddleware(routerHistory)), // routeMiddleware for dispatching history actions
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export default store
