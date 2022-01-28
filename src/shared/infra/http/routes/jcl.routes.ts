import { GetDevedorByCpfController } from '@modules/JCL/useCases/GetDevedorByCpf/GetDevedorByCpfController'
import { GetTituloController } from '@modules/JCL/useCases/GetTitulo/GetTituloController'
import { UpdateTokenController } from '@modules/JCL/useCases/UpdateToken/UpdateTokenController'
import { Router } from 'express'

const jclRouter = Router()

const updateTokeController = new UpdateTokenController()
const getDevedorByCpfController = new GetDevedorByCpfController()
const getTituloController = new GetTituloController()

jclRouter.get('/token', updateTokeController.handle)
jclRouter.get('/devedor/:cpf', getDevedorByCpfController.handle)
jclRouter.get('/titulo/:devedor_id', getTituloController.handle)

export { jclRouter }
