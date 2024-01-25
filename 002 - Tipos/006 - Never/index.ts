const error = (): never =>{
    throw new Error("Algo deu errado!")
}

const loop = (): never => {
    while(true) {
        console.log("Ola")
    }
};

const validate =(value: any) => {
    if (typeof value === "string") {
        return console.log("E um string");
    } else if (typeof value === "number"){
        return console.log("E um number");
    }

    console.log(error());
}

validate({ nome: " Gomess"});