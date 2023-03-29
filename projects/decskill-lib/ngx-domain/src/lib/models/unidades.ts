import { ITorres, IUnidades } from "../interfaces";

export class Unidades implements IUnidades {
  unidadeId: string;
  identificador: string;
  ativo: boolean;
  torre: ITorres;

  constructor(rawData: IUnidades) {
    this.unidadeId = rawData.unidadeId;
    this.identificador = rawData.identificador;
    this.ativo = rawData.ativo;
    this.torre = rawData.torre;
  }
}

export const publicUnityMock: IUnidades = {
  unidadeId: '8ca90c51-c9a0-4783-9855-139cdd37ead3',
  identificador: '65910-390',
  ativo: true,
  torre: {} as ITorres
};
