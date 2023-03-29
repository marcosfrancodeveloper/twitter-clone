import { ICondominio, ITorres } from "../interfaces";

export class Torres implements ITorres {
  torreId: string;
  identificador: string;
  numeroDeUnidades: number;
  condominio: ICondominio;

  constructor(rawData: ITorres) {
    this.torreId = rawData.torreId;
    this.identificador = rawData.identificador;
    this.numeroDeUnidades = rawData.numeroDeUnidades;
    this.condominio = rawData.condominio;
  }
}

export const publicTowerMock: ITorres = {
  torreId: '8ca90c51-c9a0-4783-9855-139cdd37ead3',
  identificador: '65910-390',
  numeroDeUnidades: 400,
  condominio: {} as ICondominio
};
