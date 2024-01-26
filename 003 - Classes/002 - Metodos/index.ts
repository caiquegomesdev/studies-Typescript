
class Pessoa{ 
    nome: string = "";
    idade : number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string){
        return`O ${this.nome} comeu ${comida}`
    }

    fezAniversario(){
        return `O ${this.nome} fez ${this.idade++} anos `
    }
}

const pessoa1 = new Pessoa("Caique Gomes", 23);
console.log(pessoa1.comer("Feijoada"));
console.log(pessoa1.fezAniversario());

const pessoa2 = new Pessoa("Lorena ", 23);
console.log(pessoa2.comer("Quiabada"));
console.log(pessoa2.fezAniversario());



