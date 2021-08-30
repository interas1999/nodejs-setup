import { Router } from 'express'
import { contactRoutes } from './contact.routes'
import { enterpriseRoutes } from './enterprise.routes'

const routes = Router()

routes.use('/contacts', contactRoutes)
routes.use('/enterprises', enterpriseRoutes)

export { routes }
