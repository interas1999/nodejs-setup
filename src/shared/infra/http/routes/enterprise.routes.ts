import { Router } from 'express'

import { CreateEntepriseController } from '@modules/enterprise/useCases/CreateEnteprise/CreateEntepriseController'

const enterpriseRoutes = Router()

const createEntepriseController = new CreateEntepriseController()

enterpriseRoutes.post('/', createEntepriseController.handle)

export { enterpriseRoutes }
