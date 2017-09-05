import { CLEAR_TOKEN, LOGOUT } from './constants'

export const clearToken = () => ({ type: CLEAR_TOKEN })

export const logout = () => ({ type: LOGOUT })
