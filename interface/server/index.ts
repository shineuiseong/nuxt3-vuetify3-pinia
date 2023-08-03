export interface IFetchOptions {
  readonly method: string
  readonly body?: object
  readonly params?: object
  readonly query?: object
  readonly headers?: HeadersInit
}

export interface ServerResponse<T> {
  status: number
  result: T
  messages: string
  timestamp: Date
}
