interface ICreateEnderecoDTO {
  id?: string;
  cnpj_endereco: string;
  tipo: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  codigoIBGE: string;
}

export { ICreateEnderecoDTO }
