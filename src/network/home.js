import { request } from './request'

export function getHomeMultiData() {
  return request({
    baseConfig: {
      url: '/home/multidata'
    }
  })
}