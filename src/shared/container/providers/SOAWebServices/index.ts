import axios from 'axios'


export const soaApi = axios.create({
  method: 'POST',
  baseURL: `${process.env.SOA_HOST}${process.env.SOA_LINK}`
});

export async function soaSearch(cnpj: string): Promise<any> {
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


