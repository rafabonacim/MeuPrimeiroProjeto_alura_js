console.log( 'Trabalhando com listas');
// const salvador = ;
// const saoPaulo = ;
// const rioDeJaneiro = ;

// adicionar lista
const listaDeDestinos =  new Array(
    'Salvador','São Paulo','Rio de Janeiro'
);
listaDeDestinos.push('Curitiba')// adicionar um item na lista
console.log("Destinos possiveis");
//console.log(salvador,saoPaulo,rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1);// deleta o 3 item da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[2]);//acessar um item da litsa


