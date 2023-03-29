import { IPessoa, publicPeopleMock } from './pessoa';

const pessoaMock: IPessoa = publicPeopleMock;

describe('Tests PessoaModel', () => {
  it('should test IPessoa with value', () => {
    const pessoaModel: IPessoa = {
      id: pessoaMock.id,
      nome: pessoaMock.nome,
      cpf: pessoaMock.cpf,
      email: pessoaMock.email,
      ativo: pessoaMock.ativo,
      doisUltimosCaracteresDoCPF: '',
      password: '',
      acessos: 0
    };
    expect(pessoaModel.id).toEqual(pessoaMock.id);
    expect(pessoaModel.nome).toEqual(pessoaMock.nome);
    expect(pessoaModel.cpf).toEqual(pessoaMock.cpf);
    expect(pessoaModel.email).toEqual(pessoaMock.email);
    expect(pessoaModel.ativo).toEqual(pessoaMock.ativo);
  });
});
