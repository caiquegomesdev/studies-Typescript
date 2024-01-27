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

class Gomes extends Pessoa{
    private profissao: string = "Programador";

    constructor(){
        super("Gomes", 23)
    }
    
    public getProfissao(){
        return `${this.nome} trabalha como ${this.profissao}`
    }
}


const gomes = new Gomes();
console.log(gomes.nome);
console.log(gomes.idade);
console.log(gomes.comer("pizza")); 
console.log(gomes.fezAniversario())
console.log(gomes.getProfissao());

console.log("===============================");

// class Caio extends Pessoa{
//     constructor(){
//         super("Caio", 22)
//     }
// }
// const caio = new Caio();
// console.log(caio.nome);
// console.log(caio.idade);
// console.log(caio.comer("Pastel")); 
// console.log(caio.fezAniversario())