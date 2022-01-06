import { soaApi } from "./soaApi"

async function soaSearch(cnpj: string): Promise<any> {
  const soa = JSON.stringify({
    Credenciais: {
      Email: process.env.SOA_EMAIL,
      Senha: process.env.SOA_SENHA
    },
    Documento: cnpj
  })

  const response = await soaApi.post('', soa)

  return response.data

}

export { soaSearch }