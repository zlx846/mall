import { test } from './request'

export function getTest(config) { 
  return test({
    url: '/',
    // params: {
    //   age: 18
    // }
  })
}