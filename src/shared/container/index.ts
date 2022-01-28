import { JcaRepository } from '@modules/JCL/infra/repositories/JcaRepository'
import { IJcaRepository } from '@modules/JCL/repositories/IJcaRepository'
import { container } from 'tsyringe'

container.registerSingleton<IJcaRepository>('JcaRepository', JcaRepository)
