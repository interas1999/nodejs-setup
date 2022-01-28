import { JcaRepository } from '@modules/JCL/infra/repositories/JcaRepository'
import { Router } from 'express'
import { jclRouter } from './jcl.routes'

const routes = Router()

routes.use('/jca', jclRouter)
routes.use('/', async (req, res) => {
  const jclRepo = new JcaRepository()

  await jclRepo.getToken()

  const answer = await jclRepo.findDevedorByCPF('00090458559415')
  // const answer = await jclRepo.getBoletos(devedor[0].CPF)

  // console.log(answer)
  return res.json(answer)
})

export { routes }
