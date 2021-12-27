import { Router } from 'express'

import { UserRepository } from '@modules/users/repositories/UserRepository'

const userRouter = Router()

const userRepository = new UserRepository()

userRouter.post('/', (request, response) => {
  const {
    name,
    email,
    password
  } = request.body

  const createdUser = userRepository.createUser({
    name,
    email,
    password
  })

  return response.json(createdUser)
})

userRouter.get('/', (request, response) => {
  const users = userRepository.findMany()

  return response.json(users)
})

userRouter.get('/:id', (request, response) => {
  const { id } = request.params

  const user = userRepository.findUser(id)

  return response.json(user)
})

userRouter.put('/:id', (request, response) => {
  const { id } = request.params

  const {
    name,
    email,
    password
  } = request.body

  const user = userRepository.updateUser({
    id,
    name,
    email,
    password
  })

  return response.json(user)
})

userRouter.delete('/:id', (request, response) => {
  const { id } = request.params

  userRepository.deleteUser(id)

  return response.status(201).send()
})

export { userRouter }
