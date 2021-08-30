import { v4 } from 'uuid'

class Enterprise {
  public id: string

  public name: string

  public created_at?: Date
  public updated_at?: Date

  constructor(props: Omit<Enterprise, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      this.created_at = new Date()
      this.updated_at = new Date()
    }
  }
}

export { Enterprise }
