import { request } from "./request"

export function getAllCategory() { 
  return request({
    url: "/category"
  })
}