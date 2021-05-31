import { UsersRepositoryInMemory } from '@modules/user/repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from './CreateUserUseCase'

let createUserUseCase: CreateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
  })

  it('Should be able to create a new user', async () => {
    await createUserUseCase.execute({
      name: 'name test',
      email: 'test@interas.com.br',
      password: 'password'
    })

    const user = await usersRepositoryInMemory.findByEmail('test@interas.com.br')

    expect(user).toHaveProperty('id')
  })
})
