enum Mes{
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Marco",
}
console.log(Mes.JAN);

const pessoa: { nome: string, mesAniversario: string } = {
    nome: "Joao",
    mesAniversario: Mes.FEV
}

if(pessoa.mesAniversario === Mes.FEV) {
    console.log(pessoa);
    
}

//consegue criar mapas dentro do seu codigo