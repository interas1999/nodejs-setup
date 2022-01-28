import { IJcaRepository } from '@modules/JCL/repositories/IJcaRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IResponse {
  message: string
  status: number
  devedores: any
}

@injectable()
export class GetDevedorByCpfUseCase {
  constructor (
    @inject('JcaRepository')
    private jcaRepository: IJcaRepository
  ) {}

  async execute(cpf: string): Promise<IResponse> {
    if (!cpf) {
      throw new AppError('CPF é obrigatório')
    }

    const data = await this.jcaRepository.findDevedorByCPF(cpf)

    if (!data.Success) {
      throw new AppError(data.Message, 400)
    }

    return {
      message: 'Devedores encontrados',
      status: 200,
      devedores: data.Data.ListDevedor
    }
  }
}
