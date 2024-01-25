const fn = (nome: string, idade?: number) => {
    if(idade){
        return `Olá ${nome}, você tem ${idade} anos.`;
    }

    return `nome: ${nome}, idade: ${idade}`;
};
console.log(fn("Gomes", 23));
console.log(fn("Gomes"));

const pessoa: { nome: string; idade?: number} = { nome: "Gomes", idade: 23}
