import { badRequest } from '../helpers/http-helper'
import { HttpRequest } from '../protocols/http'
import { UserControllerModel } from '../protocols/user-controller'

export default class UserController implements UserControllerModel {
  create (httpRequest: HttpRequest): any {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new Error(`Missing param ${field}`))
      }
    }
  }
}
