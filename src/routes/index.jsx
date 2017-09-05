import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import asyncComponent from '../components/AsyncComponent/index'

import DashboardRoutes from './DashboardRoutes'

const Login = asyncComponent(() => import('pages/Login'))
// const Logout = asyncComponent(() => import('pages/Logout'))

export const history = createBrowserHistory()

export default () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/dashboard">
        <DashboardRoutes />
      </Route>

      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)
