import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetDevedorByCpfUseCase } from './GetDevedorByCpfUseCase'

export class GetDevedorByCpfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params

    const getDevedorByCpfUseCase = container.resolve(GetDevedorByCpfUseCase)

    const answer = await getDevedorByCpfUseCase.execute(cpf as string)

    return response.json(answer)
  }
}
