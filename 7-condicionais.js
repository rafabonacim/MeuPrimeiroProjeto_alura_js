console.log('Trabalhando com condicionais');
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada == true) {
//     console.log("comprador esta acompanha");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não é maior de idade");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boaa viagem");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade");
}


console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("boa viagem");
}else{
    console.log("voce nao pode embarcar");
}

function cartaoDeVisitas(nome,sobrenome){
    var nome = "Rafaela"
    var sobrenome = "Bonacim"
    console.log(cartaoDeVisitas(nome,sobrenome))
}
