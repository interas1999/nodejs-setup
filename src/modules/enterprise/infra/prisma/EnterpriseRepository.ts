import { IEnterpriseRepository } from '@modules/enterprise/repositories/IEnterpriseRepository'
import { PrismaClient } from '@prisma/client'
import { Enterprise } from '../entities/Enterprise'

const prisma = new PrismaClient()

class EnterpriseRepository implements IEnterpriseRepository {
  async findByName(entepriseName: string): Promise<Enterprise> {
    const enterprise = await prisma.enterprise.findUnique({
      where: { name: entepriseName }
    })

    return enterprise
  }

  async create(entepriseName: string): Promise<Enterprise> {
    const enterprise = new Enterprise({
      name: entepriseName,
      created_at: new Date(),
      updated_at: new Date()
    })

    const createdEnterprise = await prisma.enterprise.create({
      data: {
        id: enterprise.id,
        name: enterprise.name
      }
    })

    return createdEnterprise
  }
}

export { EnterpriseRepository }
