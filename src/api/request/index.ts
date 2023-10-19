import type { InternalAxiosRequestConfig } from 'axios'
import { createCancelToken, HYRequest } from './request'
import type { CancelRequest } from './types'

const requestInstance = new HYRequest({
  baseURL: '/',
  timeout: 1000 * 60 * 10,
  interceptorHooks: {
    requestInterceptor: (config: InternalAxiosRequestConfig) => {
      // do something
      // ...

      return config
    },
  },
})

export { createCancelToken, HYRequest, requestInstance }
export type { CancelRequest }
