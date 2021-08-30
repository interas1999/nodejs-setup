import { ICreateContactDTO } from '@modules/contact/dtos/ICreateContactDTO'
import { IFindContactDTO } from '@modules/contact/dtos/IFindContactDTO'
import { IUpdateLastAttendanceDTO } from '@modules/contact/dtos/IUpdateLastAttendanceDTO'
import { IContactRepository } from '@modules/contact/repositories/IContactRepository'
import { PrismaClient } from '@prisma/client'
import { Contact } from '../entities/Contact'

const prisma = new PrismaClient()

class ContactRepository implements IContactRepository {
  async create({ number, enterpriseName }: ICreateContactDTO): Promise<Contact> {
    const contact = new Contact({
      number
    })

    const createdContact = await prisma.contact.create({
      data: {
        id: contact.id,
        number: contact.number,
        enterprise: {
          connect: {
            name: enterpriseName
          }
        }
      }
    })

    return createdContact
  }

  async updateLastAttendance({ enterpriseId, last_attendance }: IUpdateLastAttendanceDTO): Promise<Contact> {
    const contact = await prisma.contact.update({
      where: { id: enterpriseId },
      data: {
        last_attendance
      }
    })

    return contact
  }

  async findContact({ number, enterpriseName }: IFindContactDTO): Promise<Contact> {
    const contact = await prisma.contact.findFirst({
      where: { number, enterprise: { name: enterpriseName } }
    })

    return contact
  }
}

export { ContactRepository }
