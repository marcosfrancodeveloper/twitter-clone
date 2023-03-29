import { IPlano } from "../interfaces";

export class Plano implements IPlano {
  planoId: string;
  nome: string;
  preco: number;
  limiteDeTorres: number;

  constructor(rawData: IPlano) {
    this.planoId = rawData.planoId;
    this.nome = rawData.nome;
    this.preco = rawData.preco;
    this.limiteDeTorres = rawData.limiteDeTorres;
  }
}

export const publicPlanMock: IPlano = {
  planoId: 'a4864ecb-faad-4be9-b1b0-761d13f07d86',
  nome: 'Sophia Tereza',
  preco: 600.00,
  limiteDeTorres: 10
};
