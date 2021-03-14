// const express = require('express');
// const app = express();

// app.get('/', (req,res) => {
//     res.send('Jogo Torre de hanoi');
// })

// app.get('/jogo', (req,res) => {
//     console.log('Acessou o jogo');
//     res.send('ola');
// })

// app.listen(3000, ()=>{
//     console.log("servidor subiu");
// })

console.log('Torre de hanoi')

let torreA = [3, 2 ,1];
let torreB = [];
let torreC = [];

function exibirTorres(){
    console.log('Torre A - ' + torreA);
  console.log('Torre B - ' + torreB);
  console.log('Torre C - ' + torreC);
}

function verificarCondicaoVitoria(array){
return (array[0] ===  3 && array[1] === 2 && array[2] === 1)? true:false
}

function verificarVitoria(array){
if(verificarCondicaoVitoria(array) === false){
return "Ainda não concluiu o jogo, realize mais uma jogada"
}else{
return "Parabens pela conquista, voce conseguiu!!"
}
}

function regraMovimento(numOrigem, numDestino){
if(numDestino === undefined){
	return false;
}else{
return (numOrigem > numDestino)? true:false
}
}

function consultaPecaTorre(peca, array){
	let possui = array.indexOf(peca);
  return possui > -1? true:false;
}

function movimentarPeca(torreOrigem, torreDestino){
		
    if( regraMovimento(torreOrigem[torreOrigem.length - 1], torreDestino[torreDestino.length - 1]) === true ){
    console.log('Movimento invalido, uma peca maior não pode sobrepor uma peca menor');
    }else{
    		let peca = torreOrigem.pop();
    torreDestino.push(peca); 
    }

}


//  exibirTorres(); 
 
//  movimentarPeca(torreA, torreB);
//  movimentarPeca(torreA, torreC);
//  movimentarPeca(torreB, torreC);
//  movimentarPeca(torreA, torreC);
//  movimentarPeca(torreC, torreB);
//  movimentarPeca(torreC, torreB);
//  console.log(verificarVitoria(torreB));
//  movimentarPeca(torreB, torreC);
//  movimentarPeca(torreA, torreB);
//  movimentarPeca(torreC, torreA);
//  movimentarPeca(torreC, torreB);
//  movimentarPeca(torreA, torreB);
//  console.log(verificarVitoria(torreB));
//  movimentarPeca(torreA, torreC);
//  movimentarPeca(torreA, torreC);
 
//  exibirTorres();