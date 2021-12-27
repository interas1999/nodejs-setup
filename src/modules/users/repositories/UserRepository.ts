import { AppError } from '@shared/errors/AppError'
import { User } from '../entities/User'

interface ICreateUser {
  name: string
  password: string
  email: string
}

interface IUpdateUser {
  id: string
  name: string
  password: string
  email: string
}

export class UserRepository {
  public users: User[]

  constructor() {
    this.users = []
  }

  createUser({ name, email, password }: ICreateUser): User {
    const user = new User({
      name,
      email,
      password
    })

    console.log(this.users)

    this.users.push(user)

    return user
  }

  findMany(): User[] {
    return this.users
  }

  findUser(userId: string): User {
    const user = this.users.find(user => user.id)

    if (!user) {
      throw new AppError('User does not exists', 404)
    }

    return user
  }

  updateUser({ id, name, password, email }: IUpdateUser): User {
    const user = this.users.find(user => user.id === id)

    if (!user) {
      throw new AppError('User does not exists', 404)
    }

    user.name = name
    user.password = password
    user.email = email

    return user
  }

  deleteUser(userId: string): void {
    const userIndex = this.users.findIndex(user => user.id === userId)

    if (userIndex === -1) {
      throw new AppError('User does not exists', 404)
    }

    this.users.splice(userIndex, 1)
  }
}
