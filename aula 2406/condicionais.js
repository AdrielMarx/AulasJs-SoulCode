/* Estruturas condicionais (if-else)

    if (condição) {
        instruções caso verdadeiro
    } else {
        instruções caso falso 
    }
*/

// let idade = 10;
// maioridade = idade >= 18;

// if (maioridade) { // bloco se verdadeiro
//     console.log('É maior de idade. ');
// }
// else { // bloco se falso
//     console.log('É menor de idade. ');
// }

// let media = 5.0;
// sabeIngles = true;
// let aprovado = media >= 7;

// if (aprovado) {
//     console.log('Parabéns, foi aprovado!')
// }
// else {
//     console.log('Infelizmente não foi desta vez.')
// }

// if (aprovado && sabeIngles) {
//     console.log('Você foi contratado!')
// }
// else {
//     console.log('Que pena! continue tentando!')
// }

// Positivo, Negativo ou Zero
let numero = 0;
if (numero > 0) { // caso o número seja positivo
    console.log('O número', numero, 'é positivo');
}
else if (numero < 0) {
    console.log('O número', numero, 'é negativo');
}
else {
    console.log('0 é neutro!');
}

// Ímpar ou Par
let n = 7;
if (n % 2 === 0) {
    console.log('o número', n, 'é par');
}
else {
    console.log('o número', n, 'é ímpar');
}

let dia = 4;

if (dia === 1) {
    console.log('Hoje é domingo');
}
else if (dia === 2) {
    console.log('Hoje é segunda');
}
else if (dia === 3) {
    console.log('Hoje é terça');
}
else if (dia === 4) {
    console.log('Hoje é quarta');
}
else if (dia === 5) {
    console.log('Hoje é quinta');
}
else if (dia === 6) {
    console.log('Hoje é sexta');
}
else if (dia === 7) {
    console.log('Hoje é sábado');
}
else {
    console.log('Não existe esse dia da semana')
}

console.log('FIM!');