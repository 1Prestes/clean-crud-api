import { HttpRequest, HttpResponse } from './http'

export interface UserControllerModel {
  store: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
