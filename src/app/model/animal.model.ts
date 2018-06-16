import { Especie } from 'src/app/model/especie.model';

export class Animal {
    id: number;
    nome: string;
    nascimento: Date;
    especie: Especie;

    constructor(id?: number, nome?: string, nascimento?: Date, especie?: Especie) {
        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;
        this.especie = especie;
    }
}
