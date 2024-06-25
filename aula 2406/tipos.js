// tipagem dinâmica -> o tipo das variáveis é definido com o valor.

let gols = 3; // tipo 'number'
let posse = 65.5; // tipo 'number'
let chanceDerrota = 0.44; // tipo 'number'
let nomeTime = 'batata FC'; // tipo 'string'
let valor = true; // tipo 'boolean'
valor = false; // tipo 'boolean'

let patrocinio; // tipo 'undefined'
console.log(patrocinio); // Dá um valor indefinido já que nao foi atibuido quaisquer valor ao patrocinio 
patrocinio = 'TNT';

// Para saber o tipo da variável:
console.log(typeof posse)
console.log(typeof valor)