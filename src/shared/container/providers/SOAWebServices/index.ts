import axios from 'axios'


const url = process.env.NODE_ENV === "development" || "test" ? '/restservices/test-drive/cdc/pessoajuridicanfe.ashx' : '/restservices/test-drive/cdc/pessoajuridicanfe.ashx'


export const soaApi = axios.create({
  method: 'POST',
  baseURL: `${process.env.SOA_HOST}${url}`
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


