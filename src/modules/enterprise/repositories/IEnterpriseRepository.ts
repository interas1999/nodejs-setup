import { Enterprise } from '../infra/entities/Enterprise'

export interface IEnterpriseRepository {
  create(entepriseName: string): Promise<Enterprise>
  findByName(entepriseName: string): Promise<Enterprise>
}
