interface ICreateEstabelecimentoDTO {
  id?: string;
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  dataFundacao: string;
  matrizFilial: string;
  codigoAtividadeEconomica: string;
  codigoAtividadeEconomicaDescricao: string;
  codigoNaturezaJuridica: string;
  codigoNaturezaJuridicaDescricao: string;
  sitacaoRFB: string;
  dataSituacaoRFB: string;
  logradouro_tipo: number;
  logradouro: string;
  logradouro_numero: string;
  logradouro_complemento: string;
  logradouro_bairro: string;
  logradouro_cidade: string;
  logradouro_estado: string;
  logradouro_cep: string;
  logradouro_data_atualizacao: Date;
  codigo_ibge: number;
}

interface IEstabelecimentoSOADTO {
  Documento?: string;
  RazaoSocial?: string;
  NomeFantasia?: string;
  DataFundacao?: string;
  MatrizFilial?: string;
  Capital?: string;
  CodigoAtividadeEconomica?: string;
  CodigoAtividadeEconomicaDescricao?: string;
  CodigoNaturezaJuridica?: string;
  CodigoNaturezaJuridicaDescricao?: string;
  SituacaoRFB?: string;
  DataSituacaoRFB?: string;
  DataConsultaRFB?: string;
  MotivoSituacaoRFB?: string;
  DataMotivoEspecialSituacaoRFB?: string;
  CNAES?: [];
  Enderecos?:
  {
    Tipo?: number;
    Logradouro?: string;
    Numero?: string;
    Complemento?: string;
    Bairro?: string;
    Cidade?: string;
    Estado?: string;
    CEP?: string;
    GeoLocalizacao?: [];
    DataAtualizacao?: Date;
    CodigoIBGE?: number;
  };
  Mensagem?: string;
  Transacao?:
  {
    Status?: boolean;
    CodigoStatus?: string;
    CodigoStatusDescricao?: string;
  }
  ;


}

export { ICreateEstabelecimentoDTO, IEstabelecimentoSOADTO }