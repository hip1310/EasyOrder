import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthenticatedDashboard from './authenticated/Dashboard/AuthenticatedDashboard'

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard" component={AuthenticatedDashboard} />
        </Switch>
      </div>
    )
  }
}

export default Routes
