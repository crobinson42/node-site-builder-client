import React from 'react'
import { Route, Switch } from 'react-router-dom'

import asyncComponent from 'components/AsyncComponent/index'

import AuthenticatedRoutes from './AuthenticatedRoutes'
import DashboardPageWrapper from 'components/DashboardWrapper'

const Dashboard = asyncComponent(() => import('pages/Dashboard'))

// const DashboardRoutes = () => (
//   <AuthenticatedRoutes>
//     <DashboardPageWrapper>
//       <Switch>
//         <Route exact path="/admin/dashboard" component={Dashboard} />
//       </Switch>
//     </DashboardPageWrapper>
//   </AuthenticatedRoutes>
// )

// todo: use above code once logic for auth is completed

const DashboardRoutes = () => (
  <DashboardPageWrapper>
    <Switch>
      <Route exact path="/admin/dashboard" component={Dashboard} />
    </Switch>
  </DashboardPageWrapper>
)

export default DashboardRoutes
