import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from 'containers/User/reducer'

const reducers = combineReducers({
  form: formReducer,
  user,
})

export default reducers
