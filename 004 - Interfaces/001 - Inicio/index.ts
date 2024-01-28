/*

*/

interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: number
    enabled():boolean
}

let pessoa: IPessoa = { 
    nome: "Gomes",
    idade: 23,
    cpf: 123456789,
    enabled: () => {
        return true;
    }
};

class Joao implements IPessoa{
    nome: string  = "João";
    idade: number = 20;
    readonly cpf: number = 11111111
    enabled():boolean{
        return false
    }
}

class Caio implements IPessoa{
    nome: string  = "Caio";
    idade: number = 22;
    readonly cpf: number = 987654321;
    enabled():boolean{
        return true
    }
}
