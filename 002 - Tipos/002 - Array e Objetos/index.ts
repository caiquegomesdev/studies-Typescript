let array: [string, string, number, boolean] = [
    "Caique Gomes", 
    "Teste",
    123,
    false
];
let array2: Array<string | number | boolean>  = [
    true,
    "Caique",
    123,
    "Gomes",
];
console.log(array);
console.log(array2);

let obj1: {nome: string, sobrenome: string, idade: number, deuBom: boolean} = 
{ 
    nome: "Caique", 
    sobrenome: "Gomes",
    idade: 20,
    deuBom: true,
};

let obj2: Array<{
    nome: string,
    sobrenome: string,
    idade: number,
    deuBom: boolean
}> = [ 
    { 
        nome: "Caique1", 
        sobrenome: "Gomes",
        idade: 202,
        deuBom: true,
    },
    { 
        nome: "Caique1", 
        sobrenome: "Gomes",
        idade: 202,
        deuBom: true,
    },
    { 
        nome: "Caique2", 
        sobrenome: "Gomes",
        idade: 233,
        deuBom: false,
    }
];

console.log(obj1);
console.log(obj2);


