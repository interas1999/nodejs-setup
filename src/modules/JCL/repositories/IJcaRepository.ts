export interface IJcaRepository {
  // token
  getToken(): Promise<void>

  // getDevedor
  findDevedorByCPF(cpf: string)
  // findDevedorByNumber(number: string)

  // getBoletos
  // getBoletos(devedor_id: string)

  // getTitulo
  getTitulo(devedor_id: string)
}
