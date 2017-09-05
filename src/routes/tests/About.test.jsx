import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AboutRoute from '../About'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <BrowserRouter>
      <AboutRoute />
    </BrowserRouter>
  ), div)
})
