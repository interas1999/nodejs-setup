import { IJclRepository } from '@modules/JCL/repositories/IJclRepository'
import { jcl } from 'services/jcl'

export class JclRepository implements IJclRepository {
  auth:string

  async getToken(): Promise<void> {
    const { data } = await jcl.post('/Token', {
      Nome: 'API',
      Senha: '1234'
    })

    const { token } = data.Data

    console.log(token)

    this.auth = token
  }

  async findDevedorByCPF(cpf: string) {
    const { data } = await jcl.get('/Devedor/v1/devedores', {
      headers: {
        Authorization: `Bearer ${this.auth}`
      },
      params: {
        Tipo: 1,
        Valor: cpf
      }
    })

    const { ListDevedor } = data.Data

    return ListDevedor
  }

  async findDevedorByNumber(number: string) {
    const { data } = await jcl.get('/Devedor/v1/devedores', {
      headers: {
        Authorization: `Bearer ${this.auth}`
      },
      params: {
        Tipo: 5,
        Valor: number
      }
    })

    const { ListDevedor } = data.Data

    return ListDevedor
  }

  async getBoletos(devedorId: string) {
    const data = await jcl.get('/Boleto/v1/boleto', {
      headers: {
        Authorization: `Bearer ${this.auth}`
      },
      params: {
        Tipo: 5,
        Valor: devedorId
      }
    })

    console.log(data)
  }
}
