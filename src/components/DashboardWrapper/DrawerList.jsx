import React from 'react'
import PropTypes from 'prop-types'

import Home from 'material-ui-icons/Home'
import Settings from 'material-ui-icons/Settings'

const ListIcon = ({ icon: Icon, text }) => (
  <div style={{ cursor: 'pointer' }}>
    <Icon style={{ width: '64px', color: 'grey' }} />

    <span style={{ lineHeight: '64px', verticalAlign: 'super' }}>
      {text}
    </span>
  </div>
)

ListIcon.propTypes = {
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

function DrawerList() {
  return (
    <div>
      <ListIcon icon={Home} text="Home" />

      <ListIcon icon={Settings} text="Settings" />
    </div>
  )
}

export default DrawerList
