import { inject, injectable } from 'tsyringe'

import { Contact } from '@modules/contact/infra/prisma/entities/Contact'
import { IContactRepository } from '@modules/contact/repositories/IContactRepository'
import { IEnterpriseRepository } from '@modules/enterprise/repositories/IEnterpriseRepository'
import { AppError } from '@shared/errors/AppError'

interface IRequest {
  number: string
  enterpriseName: string
}

interface IResponse {
  status: 200 | 201 | 404
  contact: Contact
}

@injectable()
export class VerifyNumberUseCase {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository,

    @inject('EnterpriseRepository')
    private enterpriseRepository: IEnterpriseRepository
  ) { }

  async execute({ number, enterpriseName }: IRequest): Promise<IResponse> {
    const enterpriseExists = await this.enterpriseRepository.findByName(enterpriseName)

    if (!enterpriseExists) {
      throw new AppError('Enterprise not exists', 400)
    }

    const contactExists = await this.contactRepository.findContact({ number, enterpriseName })

    if (!contactExists) {
      const createdContact = await this.contactRepository.create({
        number,
        enterpriseName
      })

      return {
        status: 404,
        contact: createdContact
      }
    }

    return {
      status: 200,
      contact: contactExists
    }
  }
}
