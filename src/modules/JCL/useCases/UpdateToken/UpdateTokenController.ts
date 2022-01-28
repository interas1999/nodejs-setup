import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateTokenUseCase } from './UpdateTokenUseCase'

export class UpdateTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateTokenUseCase = container.resolve(UpdateTokenUseCase)

    const answer = await updateTokenUseCase.execute()

    return response.json(answer)
  }
}
