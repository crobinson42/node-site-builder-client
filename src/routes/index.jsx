import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import asyncComponent from '../components/AsyncComponent/index'
import DashboardRoutes from './DashboardRoutes'

const Login = asyncComponent(() => import('pages/Login'))
// const Logout = asyncComponent(() => import('pages/Logout'))

export const history = createBrowserHistory()

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/admin/login" component={Login} />

      <Route path="/admin">
        <DashboardRoutes />
      </Route>
    </Switch>
  </Router>
)
