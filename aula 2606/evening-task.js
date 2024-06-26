// 1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.
function calcularImc(peso, altura) {
    imc = peso / (altura**2);
    return imc;
}

let exemplo1 = calcularImc(90, 1.80);
let exemplo2 = calcularImc(80, 1.72);
let exemplo3 = calcularImc(58, 1.71);
let exemplo4 = calcularImc(74, 1.85);

function saude(imc) {
    let = muitoAbaixo = imc < 17;
    let = abaixodoPeso = imc >= 17 && imc <= 18.4;
    let = normal = imc >= 18.5 && imc <= 24.9;
    let = acimadoPeso = imc >= 25 && imc <= 29.9;
    let = obesidade = imc > 30;

    if (muitoAbaixo) {
        console.log('Muito abaixo.');
    }
    else if (abaixodoPeso) {
        console.log('Abaixo do peso.');
    }
    else if (normal) {
        console.log('Peso normal.');
    }
    else if (acimadoPeso) {
        console.log('Acima do peso.');
    }
    else if (obesidade) {
        console.log('Obesidade.');
    }
}

saude(exemplo1);
saude(exemplo2);
saude(exemplo3);
saude(exemplo4);

// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%
function porcentagem(numero) {
    percentual = (numero * 100) + '%';
    return percentual;
}

console.log(porcentagem(0.87));

// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true
function negativo(num) {
    if (num < 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(negativo(4))

// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.
function contar(n) {
    for (let c = 0; c <= n; c++) {
        console.log(c);
    }
}
contar(14);

// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.
function nomeCompleto (nome, sobrenome) {
    return (`${nome} ${sobrenome}`);
}

console.log(nomeCompleto('Adriel', 'Marx'));

// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.
function calcularArea (pi, raio) {
    let area = (pi * raio**2).toFixed(2);
    return area;
}

console.log(calcularArea(3.14, 5));

// 7. Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido
function nivel (area) {
    let nivel1 = area >= 1 && area <= 20;
    let nivel2 = area >= 21 && area <= 40;
    if (nivel1) {
        console.log('Nível I');
    }
    else if (nivel2) {
        console.log('Nível II');
    }
    else {
        console.log('Nível Inválido.');
    }
}

nivel(198237)

// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.
function letrasMinusculas (string) {
    let minusculas = string.toLowerCase();
    return minusculas;
}

console.log(letrasMinusculas('BATATA'));

// 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.
function ocorrencias (string, caractere) {
    let qnt = 0;
    for(let c = 0; c < string.length; c++) {
        if (string[c] == caractere) {
            qnt += 1;
        }
    }
    return qnt;
}
console.log(ocorrencias('batata', 'a'));