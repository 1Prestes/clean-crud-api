import { HttpRequest } from '../protocols/http'
import { UserControllerModel } from '../protocols/user-controller'

export default class UserController implements UserControllerModel {
  create (httpRequest: HttpRequest): any {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return { statusCode: 400, body: new Error(`${field} not provided`) }
      }
    }
  }
}
