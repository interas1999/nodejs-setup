import { PrismaClient } from '@prisma/client'

import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO'
import { IUsersRepository } from '@modules/user/repositories/IUsersRepository'
import { User } from '../entities/User'

const prisma = new PrismaClient()

class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await prisma.users.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
        password: true
      }
    })

    return user
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = new User({
      name,
      email,
      password
    })

    await prisma.users.create({
      data: user
    })
  }
}

export { UsersRepository }
