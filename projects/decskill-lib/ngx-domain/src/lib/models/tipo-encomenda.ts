import { ITipoEncomenda } from "../interfaces";

export class TipoEncomenda implements ITipoEncomenda {
  tipoEncomendaId: string;
  nome: string;

  constructor(rawData: ITipoEncomenda) {
    this.tipoEncomendaId = rawData.tipoEncomendaId;
    this.nome = rawData.nome;
  }
}

export const publicAccountMock: ITipoEncomenda = {
  tipoEncomendaId: '6161cfff-a5b1-42b3-8eef-261ee3da9e9e',
  nome: 'Carta'
};
