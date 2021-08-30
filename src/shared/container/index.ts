import { ContactRepository } from '@modules/contact/infra/prisma/repositories/ContactRepository'
import { IContactRepository } from '@modules/contact/repositories/IContactRepository'
import { EnterpriseRepository } from '@modules/enterprise/infra/prisma/EnterpriseRepository'
import { IEnterpriseRepository } from '@modules/enterprise/repositories/IEnterpriseRepository'
import { container } from 'tsyringe'

container.registerSingleton<IEnterpriseRepository>('EnterpriseRepository', EnterpriseRepository)

container.registerSingleton<IContactRepository>('ContactRepository', ContactRepository)
