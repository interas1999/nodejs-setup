import { VerifyNumberController } from '@modules/contact/useCases/VerifyNumber/VerifyNumberController'
import { Router } from 'express'

const contactRoutes = Router()

const verifyNumberController = new VerifyNumberController()

contactRoutes.post('/', verifyNumberController.handle)

export { contactRoutes }
