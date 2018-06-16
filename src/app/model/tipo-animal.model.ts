export class TipoAnimal {
    acronimo: string;
    nome: string;
    descricao: string;

    constructor(acronimo?: string, nome?: string, descricao?: string) {
        this.acronimo = acronimo;
        this.nome = nome;
        this.descricao = descricao;
    }
}
