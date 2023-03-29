import { ICondominio, IPlano } from "../interfaces";

export class Condominio implements ICondominio {
  condominioId: string;
  nome: string;
  numeroDeTorres: number;
  numeroDeUnidades: number;
  plano: IPlano;

  constructor(rawData: ICondominio) {
    this.condominioId = rawData.condominioId;
    this.nome = rawData.nome;
    this.numeroDeTorres = rawData.numeroDeTorres;
    this.numeroDeUnidades = rawData.numeroDeUnidades;
    this.plano = rawData.plano;
  }
}

export const publicCondominiumMock: ICondominio = {
  condominioId: '8ca90c51-c9a0-4783-9855-139cdd37ead3',
  nome: '65910-390',
  numeroDeTorres: 20,
  numeroDeUnidades: 400,
  plano: {} as IPlano
};
