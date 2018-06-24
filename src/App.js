import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store from './store/configureStore'
import routerHistory from './utils/routing/history'
import Routes from './routes/Routes'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={routerHistory}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App

