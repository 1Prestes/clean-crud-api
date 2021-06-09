import UserController from './user'

const makeSut = (): UserController => new UserController()

describe('UserController', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.create(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('name not provided'))
  })
})
