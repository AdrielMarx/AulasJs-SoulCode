// Exercício 1 ---
let fahrenheit = 81;
let celsius = (fahrenheit - 32) / 1.8;
console.log('A temperatura em celsius é', celsius.toFixed(2) + '°C');

// Exercício 2 --- 
let n1 = 10;
let n2 = 8;
let n3 = 7.5;
let n4 = 9.5;
let n5 = 2;

let peso1 = 3;
let peso2 = 2;
let peso3 = 1;
let peso4 = 4;
let peso5 = 5;

let pesofinal = peso1 + peso2 + peso3 + peso4 + peso5;

let resultadoNota = (n1 * peso1) + (n2 * peso2) + (n3 * peso3) + (n4 * peso4) + (n5 * peso5);
let mediaPonderada = resultadoNota / pesofinal;
console.log(mediaPonderada.toFixed(1));