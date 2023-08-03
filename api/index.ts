import { IFetchOptions, ServerResponse } from '~/interface/server'

export default class http {
  private static async fetch<T>(
    url: string,
    FetchOptions: IFetchOptions
  ): Promise<ServerResponse<T>> {
    const headerInit: HeadersInit = {
      'Content-Type': 'application/json'
    }

    return new Promise((resolve, reject) => {
      useFetch(url, {
        onRequest({ options }) {
          Object.assign(options, {
            ...FetchOptions,
            initialCache: false,
            headers: { ...options.headers, ...headerInit }
          })

          console.log('1', options.method)
        },
        onRequestError({ error }) {},
        async onResponse({ request, response, options }) {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { status, _data } = response

          if (status === 200) {
            console.log('response', status)
            resolve(_data)
          }
        },
        onResponseError({ response }) {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { status, _data } = response

          console.log('responseError')
          reject(_data)
        }
      })
    })
  }

  // eslint-disable-next-line class-methods-use-this
  public async getAPI<T = any>(url: string, params?: any): Promise<any> {
    const data = await http.fetch(url, { method: 'GET', params })

    return data
  }

  // eslint-disable-next-line class-methods-use-this
  public async postAPI<T>(url: string, body?: any) {
    const data = await http.fetch<T>(url, { method: 'POST', body })

    return data
  }
}
