/*
public - pode ser acessadado tanto pela mesma classe, classes filhas e outras classes.
#######################################################################################
protected - Pode ser acessado pela mesma class e classes filhas, nao podemm ser acessados por outras classes
#######################################################################################
private -Pode ser acessada somente pela propria classe
*/


class Pessoa{ 
    public nome: string = "";
    public idade : number = 0;
    private _profissao: string = "Programador"; // O "_" serve para indicar que e uma propriedade privada EX: _cpf, _profissao, _senha, _cnpj
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return`O ${this.nome} comeu ${comida}`
    }

    public fezAniversario(){
        return `O ${this.nome} fez ${this.idade++} anos `
    }
}



const pessoa = new Pessoa("Caique Gomes", 23);
console.log(pessoa.comer("Feijoada"));
console.log(pessoa.fezAniversario());

const pessoa2 = new Pessoa("Lorena ", 23);
console.log(pessoa2.comer("Quiabada"));
console.log(pessoa2.fezAniversario());



