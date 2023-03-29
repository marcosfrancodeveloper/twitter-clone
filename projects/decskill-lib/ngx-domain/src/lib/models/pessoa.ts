import { IPessoa } from "../interfaces";

export class Pessoa implements IPessoa {
  id: string;
  nome: string;
  cpf: string;
  doisUltimosCaracteresDoCPF: string;
  email: string;
  password: string;
  ativo: boolean;
  acessos: number;

  constructor(rawData: IPessoa) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.cpf = rawData.cpf;
    this.doisUltimosCaracteresDoCPF = rawData.doisUltimosCaracteresDoCPF;
    this.email = rawData.email;
    this.password = rawData.password;
    this.ativo = rawData.ativo;
    this.acessos = rawData.acessos;
  }
}

export const publicPeopleMock: IPessoa = {
  id: '7268b692-138b-493b-8bf0-1574a8c9109e',
  nome: 'Miguel Fernando Jorge Aragão',
  cpf: '98971589604',
  doisUltimosCaracteresDoCPF: '04',
  email: 'mmiguelfernandojorgearagao@gmail.com',
  password: '',
  ativo: true,
  acessos: 10
};
