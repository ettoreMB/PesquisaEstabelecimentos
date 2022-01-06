import axios from 'axios'

const host = 'https://svcs.soawebservices.com.br';

const url_desenv = '/restservices/test-drive/cdc/pessoajuridicanfe.ashx';

const url_prod = '/restservices/producao/cdc/pessoajuridicanfe.ashx'

export const soaApi = axios.create({
  method: 'POST',
  baseURL: `${host}${url_desenv}`
});
