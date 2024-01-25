var Mes;
(function (Mes) {
    Mes["JAN"] = "Janeiro";
    Mes["FEV"] = "Fevereiro";
    Mes["MAR"] = "Marco";
})(Mes || (Mes = {}));
console.log(Mes.JAN);
var pessoa = {
    nome: "Joao",
    mesAniversario: Mes.FEV
};
if (pessoa.mesAniversario === Mes.FEV) {
    console.log(pessoa);
}
//consegue criar mapas dentro do seu codigo
