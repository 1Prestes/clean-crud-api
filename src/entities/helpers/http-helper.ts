import { AccountModel } from '../../domain/models/account'
import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export const created = (body: AccountModel): HttpResponse => ({
  statusCode: 201,
  body: body
})
