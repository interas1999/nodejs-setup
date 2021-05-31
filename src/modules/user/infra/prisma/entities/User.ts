import { v4 } from 'uuid'

export class User {
  public readonly id: string

  public name: string
  public password: string
  public email: string

  public created_at?: Date

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
