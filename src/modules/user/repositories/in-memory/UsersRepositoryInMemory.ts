import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO'
import { User } from '@modules/user/infra/prisma/entities/User'
import { IUsersRepository } from '../IUsersRepository'

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = []

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = new User({
      email,
      name,
      password

    })

    this.users.push(user)
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email)
  }
}

export { UsersRepositoryInMemory }
