const prompt = require('prompt-sync')();
const logica = require('./logicaJogo');

// Declaração das torres e já preparada para inicio do jogo
let torreA = [3, 2 ,1];
let torreB = [];
let torreC = [];

// Apresentação 
console.log("---- Torre de hanoi ----");
console.log("Regras: ");
console.log(" Movimentar uma só peça de cada vez \n Uma peça maior não pode ficar acima de uma menor \n Para ganhar é necessario que as peças estejam da maior para menor na Torre B");
console.log("Para movimentar as peças escolha a torre em que a peça sera movida e depois a torre para onde ira");
console.log(" !ATENÇÃO! para movimentação das peças utilize ta = torre A | tb = torre B | tc = torre C");

// Estrutura de repitição ate vitoria do jogo 
while(logica.verificarCondicaoVitoria(torreB) == false){

// Exibir torres do jogo 
logica.exibirTorres(torreA,torreB,torreC);

// entrada do usuario 
let torreOrigem = prompt("Escolha a torre que a peça sera mexida: ");
let torreDestino = prompt("Escolha a torre para onde a peça ira: ");

// Movimentação de peças
if(torreOrigem === 'ta' && torreDestino === 'tb'){
    logica.movimentarPeca(torreA, torreB);
}else if(torreOrigem === 'ta' && torreDestino === 'tc'){
    logica.movimentarPeca(torreA, torreC);
}else if(torreOrigem === 'tb' && torreDestino === 'ta'){
    logica.movimentarPeca(torreB, torreA);
}else if(torreOrigem === 'tb' && torreDestino === 'tc'){
    logica.movimentarPeca(torreB, torreC);
}else if(torreOrigem === 'tc' && torreDestino === 'ta'){
    logica.movimentarPeca(torreC, torreA);
}else if(torreOrigem === 'tc' && torreDestino === 'tb'){
    logica.movimentarPeca(torreC, torreB);
}

// Verificar condição de vitoria
logica.verificarVitoria(torreB);
}

logica.exibirTorres(torreA,torreB,torreC);

