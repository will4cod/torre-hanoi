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

function verificarCondicaoVitoria(array){
  return (array[0] ===  3 && array[1] === 2 && array[2] === 1)? true:false
}

function regraMovimento(numOrigem, numDestino){
  if(numDestino === undefined){
    return false;
  }else{
  return (numOrigem > numDestino)? true:false
  }
}
  

const jogo = {
  exibirTorres: function(torreA, torreB, torreC) {
    console.log('Torre A - ' + torreA);
    console.log('Torre B - ' + torreB);
    console.log('Torre C - ' + torreC);
  },
  verificarCondicaoVitoria: function(array){
    return (array[0] ===  3 && array[1] === 2 && array[2] === 1)? true:false
  },
  verificarVitoria: function(array) {
    if(verificarCondicaoVitoria(array) === false){
        return console.log("Ainda não concluiu o jogo, realize mais uma jogada");
      }else{
        return console.log("Parabens pela conquista, voce conseguiu!!");
      }
  },
  movimentarPeca: function(torreOrigem, torreDestino){
    if( regraMovimento(torreOrigem[torreOrigem.length - 1], torreDestino[torreDestino.length - 1]) === true ){
      console.log('Movimento invalido, uma peca maior não pode sobrepor uma peca menor');
      }else{
        let peca = torreOrigem.pop();
        torreDestino.push(peca); 
      }
  }
}

module.exports = jogo;




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