import { IJcaRepository } from '@modules/JCL/repositories/IJcaRepository'
import { AppError } from '@shared/errors/AppError'
import { jca } from 'services/jca'

export class JcaRepository implements IJcaRepository {
  private auth:string

  async getToken(): Promise<void> {
    const { data } = await jca.post('/Token', {
      Nome: 'API',
      Senha: '1234'
    })

    if (data.Success === false) {
      throw new AppError(data.Message, 401)
    }

    const { token } = data.Data

    this.auth = token
  }

  async findDevedorByCPF(cpf: string) {
    try {
      const { data } = await jca.get('/Devedor/v1/devedores', {
        headers: {
          Authorization: `Bearer ${this.auth}`
        },
        params: {
          Tipo: 1,
          Valor: cpf
        }
      })

      return data
    } catch (err) {
      const { status, statusText } = err.response

      throw new AppError(statusText, status)
    }
  }

  // async findDevedorByNumber(number: string) {
  //   try {
  //     const { data } = await jca.get('/Devedor/v1/devedores', {
  //       headers: {
  //         Authorization: `Bearer ${this.auth}`
  //       },
  //       params: {
  //         Tipo: 5,
  //         Valor: number
  //       }
  //     })

  //     return data
  //   } catch (err) {
  //     const { status, statusText } = err.response

  //     throw new AppError(statusText, status)
  //   }
  // }

  // async getBoletos(devedorId: string) {
  //   try {
  //     const data = await jca.get('/Boleto/v1/boleto', {
  //       headers: {
  //         Authorization: `Bearer ${this.auth}`
  //       },
  //       params: {
  //         Tipo: 5,
  //         Valor: devedorId
  //       }
  //     })

  //     return data
  //   } catch (err) {
  //     const { status, statusText } = err.response

  //     throw new AppError(statusText, status)
  //   }
  // }

  async getTitulo(devedor_id: string) {
    try {
      const data = await jca.get('/Titulo/v1/titulo', {
        headers: {
          Authorization: `Bearer ${this.auth}`
        },
        params: {
          DevedorId: devedor_id
        }
      })

      console.log(data)

      return data
    } catch (err) {
      const { status, statusText } = err.response

      throw new AppError(statusText, status)
    }
  }
}
