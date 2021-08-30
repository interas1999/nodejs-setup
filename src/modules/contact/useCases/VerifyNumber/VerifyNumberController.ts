import { Request, Response } from 'express'
import { container, inject, injectable } from 'tsyringe'
import { VerifyNumberUseCase } from './VerifyNumberUseCase'

export class VerifyNumberController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { number, enterpriseName } = request.body

    const verifyNumberUseCase = container.resolve(VerifyNumberUseCase)

    const contact = await verifyNumberUseCase.execute({
      enterpriseName,
      number
    })

    return response.json(contact)
  }
}
