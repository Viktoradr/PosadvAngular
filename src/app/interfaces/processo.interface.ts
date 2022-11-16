import { IParte } from "./parte.interface";

export interface IProcessoTable {
  id: string;
  numeroProcesso: string;
  tribunal: string;
  dataCadastro: string;
  ativo: string;
}

export interface IProcesso {
  id: string;
  numeroProcesso: string;
  instancia: string;
  tribunal: string;
  comarca: string;
  vara: string;
  valorCausa: number;
  partes: IParte[];
  dataCadastro: Date;
  ativo: boolean;
}