import { IEncomenda, ITipoEncomenda } from "../interfaces";

export class Encomenda implements IEncomenda {
  encomendaId: string;
  token: string;
  dataEntrada: Date;
  dataRetirada: Date;
  codigo: number;
  status: number;
  tipoEncomenda: ITipoEncomenda;

  constructor(rawData: IEncomenda) {
    this.encomendaId = rawData.encomendaId;
    this.token = rawData.token;
    this.dataEntrada = rawData.dataEntrada;
    this.dataRetirada = rawData.dataRetirada;
    this.codigo = rawData.codigo;
    this.status = rawData.status;
    this.tipoEncomenda = rawData.tipoEncomenda;
  }
}

export const publicPhonesMock: IEncomenda = {
  encomendaId: '27b17241-1d98-4f3a-98f0-a3fcdb5ac67a',
  token: 'A86G54D8',
  dataEntrada: new Date(2021, 8, 10, 19, 11, 46),
  dataRetirada: new Date(2021, 10, 10, 19, 11, 46),
  codigo: 4865,
  status: 1,
  tipoEncomenda: {} as ITipoEncomenda
};
