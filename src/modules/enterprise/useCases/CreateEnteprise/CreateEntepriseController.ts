import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateEntepriseUseCase } from './CreateEnterpriseUseCase'

export class CreateEntepriseController {
  async handle(request: Request, response: Response) {
    const { enterpriseName } = request.body

    const createEntepriseUseCase = container.resolve(CreateEntepriseUseCase)

    const enterprise = await createEntepriseUseCase.execute(enterpriseName)

    return response.json(enterprise)
  }
}
