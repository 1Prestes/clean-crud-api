import { HttpRequest, HttpResponse } from './http'

export interface UserControllerModel {
  create: (httpRequest: HttpRequest) => HttpResponse
}
