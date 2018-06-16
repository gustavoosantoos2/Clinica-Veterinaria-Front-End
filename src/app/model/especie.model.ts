import { TipoAnimal } from 'src/app/model/tipo-animal.model';

export class Especie {
    id: number;
    nome: string;
    descricao: string;
    tipoAnimal: TipoAnimal;

    constructor(id?: number, nome?: string, descricao?: string, tipo?: TipoAnimal) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.tipoAnimal = tipo;
    }
}
