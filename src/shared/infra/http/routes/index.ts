import { JclRepository } from '@modules/JCL/infra/repositories/JclRepository'
import { Router } from 'express'

const routes = Router()

routes.use('/', async (req, res) => {
  const jclRepo = new JclRepository()

  await jclRepo.getToken()

  const devedor = await jclRepo.findDevedorByCPF('00090458559415')
  const answer = await jclRepo.getBoletos(devedor[0].CPF)

  console.log(answer)
  res.json('Hello World')
})

export { routes }
