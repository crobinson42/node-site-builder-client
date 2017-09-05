import axios from 'axios'
// import qs from 'query-string'
import store from 'store'

export const api = axios.create({
  // dev
  baseURL: 'localhost:3030',
  // our backend expects this for data jenk instead of json
  // transformRequest: [qs.stringify],
})

export const apiOptions = {
  returnRejectedPromiseOnError: true,

  interceptors: {
    request: [
      ({ getState }, config) => {
        const { user } = store.getState()
        const token = user.token

        if (token) {
          // eslint-disable-next-line
          config.headers['Authorization'] = `${token}`
        }

        return config
      },
    ],
  },
}
