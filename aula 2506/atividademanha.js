// Exercício 1 -----
i = 0;
while (i <= 10) {
    i += 1;
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Exercício 2 -----
let tabuada = 7;
let multiplicador = 1;

while (multiplicador <= 10) {
    let resultado = tabuada * multiplicador
    console.log(tabuada, 'X', multiplicador, '=', resultado);
    multiplicador += 1;
}

// Exercício 3 -----
p = 0;
numero = 0;
soma = 0;

while (p <= 999) {
    if (p % 2 != 0) {
        soma = p;
        numero += soma;
    }
    p += 1;
}

console.log('O resultado é:', numero);

// Exercício 4 -----
let j = 1;
let divisiveis = 0;

while (j <= 1000) {
    if (j % 9 == 0) {
        console.log(j);
        divisiveis += 1;
    }
    j += 1;
}

console.log('Ao todo temos', divisiveis, 'números divisíveis por 9');