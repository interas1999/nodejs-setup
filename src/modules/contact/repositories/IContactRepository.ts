import { ICreateContactDTO } from '../dtos/ICreateContactDTO'
import { IFindContactDTO } from '../dtos/IFindContactDTO'
import { IUpdateLastAttendanceDTO } from '../dtos/IUpdateLastAttendanceDTO'
import { Contact } from '../infra/prisma/entities/Contact'

export interface IContactRepository {
  create({ number, enterpriseName }: ICreateContactDTO): Promise<Contact>
  updateLastAttendance({ enterpriseId, last_attendance }: IUpdateLastAttendanceDTO): Promise<Contact>
  findContact({ number, enterpriseName }: IFindContactDTO): Promise<Contact>
}
