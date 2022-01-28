import { IJcaRepository } from '@modules/JCL/repositories/IJcaRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IResponse {
  message: string
  status: number
  titulos: any
}

@injectable()
export class GetTituloUseCase {
  constructor (
    @inject('JcaRepository')
    private jcaRepository: IJcaRepository
  ) {}

  async execute(devedor_id: string): Promise<IResponse> {
    if (!devedor_id) {
      throw new AppError('ID do Devedor é obrigatório')
    }

    const { data } = await this.jcaRepository.getTitulo(devedor_id)

    if (data.Success === false) {
      throw new AppError(data.Message)
    }

    return {
      message: 'Titulos encontrados',
      status: 200,
      titulos: data.Data.ListTitulo
    }
  }
}
