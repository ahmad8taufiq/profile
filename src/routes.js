import {
  getProfile
} from './handler.js'

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getProfile
  }
]

export default routes
