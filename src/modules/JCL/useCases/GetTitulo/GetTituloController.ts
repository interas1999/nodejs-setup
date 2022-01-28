import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetTituloUseCase } from './GetTituloUseCase'

export class GetTituloController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { devedor_id } = request.params

    const getTituloUseCase = container.resolve(GetTituloUseCase)

    const asnwer = await getTituloUseCase.execute(devedor_id)

    return response.json(asnwer)
  }
}
