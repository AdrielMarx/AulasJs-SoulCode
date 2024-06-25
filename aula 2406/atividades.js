// Exercício 1 ------
let n1 = 7;
let n2 = 6.5;
let n3 = 8;

media = (n1 + n2 + n3) / 3;

if (media >= 7) {
    console.log('Aprovado');
}
else if (media >= 5 && media < 7) {
    console.log('Reforço');
}
else if (media < 5) {
    console.log('Reprovação');
}

// Exercício 2 ------
let peso = 60.5;
let altura = 1.70;
let imc = peso / (altura ** 2);
let magreza = imc < 18.5;
let normal = imc >= 18.5 && imc <= 24.9;
let sobrepeso = imc >= 25 && imc <= 30;
let obesidade = imc > 30

if (magreza) {
    console.log('Você está com magreza!');
}
else if (normal) {
    console.log('Você está suadável!');
}
else if (sobrepeso) {
    console.log('Você está sobrepeso!');
}
else if (obesidade) {
    console.log('Você esta com obesidade!');
}

// Exercício 3 ------
let A = 4;
let B = 4;

if (A > B) {
    console.log(A, 'É maior e', B, 'É menor.');
}
else if (A < B) {
    console.log(B, 'É maior e', A, 'É menor.');
}
else if (A === B) {
    console.log('Os números são iguais.');
}
// Exercício 4 ------
let salario = 2300;
let quantidadedeDependentes = 6;



if (quantidadedeDependentes >= 1 && quantidadedeDependentes <= 5) {
    salario *= 1.30;
}
else if (quantidadedeDependentes > 5) {
    salario *= 1.40;
}

console.log('Aplicando o devido reajuste, o salário passa a ser', salario)

// Exercício 5 ------
const domingo = 1;
const segunda = 2;
const terça = 3;
const quarta = 4;
const quinta = 5;
const sexta = 6;
const sabado = 7;

let diaHoje = 1;

if (diaHoje >= 2 && diaHoje <= 6) {
    console.log('Estamos em um dia útil!');
}
else if (diaHoje === 1 || diaHoje === 7) {
    console.log('Estamos no final de semana, até que enfim!')
}

// Exercício 6 ------
let ano = 2025

if (ano % 4 == 0 && (!ano % 100 == 0)) {
    console.log('O ano', ano, 'é bissexto!');
}
else if (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0) {
    console.log('O ano', ano, 'é bissexto!');
}
else {
    console.log('O ano', ano, 'não é bissexto!');
}

// Exercício 7 ------
let idade = 10000;

if (idade < 0 || idade > 130) {
    console.log('Esta idade não é válida');
}

// Exercício 8 ------
const m = 'Matutino';
const v = 'Vespertino';
const n = 'Noturno';

let turno = n;

if (turno == m) {
    console.log('Bom dia!');
}
else if (turno == v) {
    console.log('Boa tarde!')
}
else if (turno == n) {
    console.log('Boa noite!')
}
else {
    console.log('Valor digitado inválido.')
}