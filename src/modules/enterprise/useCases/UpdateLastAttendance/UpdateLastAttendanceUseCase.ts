import { IContactRepository } from '@modules/contact/repositories/IContactRepository'
import { IEnterpriseRepository } from '@modules/enterprise/repositories/IEnterpriseRepository'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  number: string
  enterpriseName: string
}

interface IResponse {

}

@injectable()

export class UpdateLastAttendanceUseCase {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository,

    @inject('EnterpriseRepository')
    private enterpriseRepository: IEnterpriseRepository
  ) { }

  async execute({ number, enterpriseName }: IRequest): Promise<IResponse> {
    const enterpriseExists = await this.enterpriseRepository

    return {

    }
  }
}
