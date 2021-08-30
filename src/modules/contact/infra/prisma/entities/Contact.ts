import { v4 } from 'uuid'

class Contact {
  public id: string

  public number: string
  public last_attendance?: Date

  public created_at?: Date
  public updated_at?: Date

  public enterpriseId?: string

  constructor(props: Omit<Contact, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      this.created_at = new Date()
      this.updated_at = new Date()
    }
  }
}

export { Contact }
