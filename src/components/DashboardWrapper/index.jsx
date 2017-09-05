import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class DashboardWrapper extends Component {
  // static propTypes = {}

  // static defaultProps = {}

  render () {
    return (
      <div>
        Wrapper for dashboard

        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default DashboardWrapper
