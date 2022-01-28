import { IJcaRepository } from '@modules/JCL/repositories/IJcaRepository'
import { inject, injectable } from 'tsyringe'

interface IResponse {
  message: string
  status: number
}

@injectable()
export class UpdateTokenUseCase {
  constructor (
    @inject('JcaRepository')
    private jcaRepository: IJcaRepository
  ) {}

  async execute(): Promise<IResponse> {
    await this.jcaRepository.getToken()

    return {
      message: 'Token updated',
      status: 200
    }
  }
}
