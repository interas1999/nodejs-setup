import { Enterprise } from '@modules/enterprise/infra/entities/Enterprise'
import { IEnterpriseRepository } from '@modules/enterprise/repositories/IEnterpriseRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateEntepriseUseCase {
  constructor(
    @inject('EnterpriseRepository')
    private enterpriseRepository: IEnterpriseRepository
  ) { }

  async execute(enterpriseName: string): Promise<Enterprise> {
    const enterpriseExists = await this.enterpriseRepository.findByName(enterpriseName)

    if (enterpriseExists) {
      throw new AppError('Enterprise already exist', 400)
    }

    const enterprise = await this.enterpriseRepository.create(enterpriseName)

    return enterprise
  }
}
