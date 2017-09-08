import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { Grid } from 'material-ui'
import LoginForm from 'components/LoginForm'

// @withRouter
// @connect(state => ({}),
//   {})
class Login extends Component {
  static propTypes = {}

  // static defaultProps = {}

  render() {
    return (
      <div style={{ height: '80vh' }}>
        <Grid
          align="center"
          container
          justify="center"
          style={{ height: '100%' }}
        >
          <LoginForm />
        </Grid>
      </div>
    )
  }
}

export default Login
