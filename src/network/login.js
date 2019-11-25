import { request } from "./request"

export function confirmUser(id, password) { 
  return request({
    url: '/login',
    params: {
      user: {
        id,
        password
      }
    }
  })
}