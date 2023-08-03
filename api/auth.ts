import http from './index'

export const FETCH_AUTH = new (class extends http {
  signIn(body: any) {
    return this.postAPI<any>('/api/signa', body)
  }
})()
