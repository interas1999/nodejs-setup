export interface IJclRepository {
  // token
  getToken(): Promise<void>

  // getDevedor
  findDevedorByCPF(cpf: string)
  findDevedorByNumber(number: string)

  // getBoletos
  getBoletos(devedorId: string)
}
