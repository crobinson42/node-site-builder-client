import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from 'material-ui'

class LoginForm extends Component {
  static propTypes = {}

  render() {
    return (
      <Grid item lg={4} md={6} sm={8} xs={12}>
        <Card>
          <CardHeader title={<div>Login</div>} />

          <CardContent>
            <div>
              <TextField fullWidth id="email" label="Email" margin="normal" />
            </div>

            <div>
              <TextField
                fullWidth
                id="password"
                label="Password"
                margin="normal"
                type="password"
              />
            </div>
          </CardContent>

          <CardActions>
            <Button raised color="primary">
              Login
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default LoginForm
