/**
 * Type que define a base para os path params.
 */
export type PathParams = string | number | object;

/**
 * Classe abstrata para representar a entrada de dados as apis.
 */
export abstract class Entity {
  id?: number | string | undefined;
}

/**
 * Interface que mapeia todas as opções disponíveis para o path.
 */
export interface IEntityPath {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
  path: string;
  value: string | number | boolean | object;
}
