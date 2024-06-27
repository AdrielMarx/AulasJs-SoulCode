let nums = [];
console.log(nums) ;

// Adiciona elemento ao final do array
nums.push(4);
nums.push(5);
nums.push(10);
console.log(nums);
nums.push(1000);
console.log(nums);

// Removendo elemento 
nums.pop();
nums.pop();
console.log(nums);

// Inserir no início
let notas = [6.5, 7.9, 9.0];
console.log(notas);
notas.unshift(8.0);
notas.unshift(4.5);
notas.unshift(7.5);
console.log(notas);

// Reomover do início
notas.shift();
notas.shift();
console.log(notas);

// Juntar o array e montar uma string
let endereçoIP = [182, 168, 1, 1];
console.log(endereçoIP.join('.')); 

let data = ['27', '06', '2024'];
let dataString = data.join('/');
console.log(dataString);

// Concatenar arrays
let p1 = ['Mouse', 'Monitor', 'Microfone'];
let p2 = ['Webcam', 'Teclado'];

let p3 = p1.concat(p2); // Gerou um novo array com os dois combinados.
console.log(p3);

// Reverter um array
let n = [1, 2, 3];
let arrayInvertido = n.reverse();
console.log(arrayInvertido);

// Includes (verificar a existência de determinado elemento do array)
let pessoas = ['joão', 'josé', 'ana'];

if(pessoas.includes('josé')) {
    console.log('josé está presente.');
}
else {
    console.log('josé não está presente');
}

// Split (Vai quebrar a string e formar um array)
let frase = 'Eu vou estudar React';
let dataInicio = '26/06/2000';
let palavraEspecial = 'BATATA';

fraseArray = frase.split(' ');
console.log(fraseArray);

let dataArray = dataInicio.split('/');
console.log(dataArray);

// Inverter a string
console.log(palavraEspecial.split('').reverse().join(''));

// indexOf (mostrar o indice do item selecionado do array)
let figuras = ['coração', 'estrela', 'ok', 'não', 'joinha', 'sorriso'];

console.log(figuras.indexOf('ok'));
console.log(figuras.indexOf('batata')); // -1 -> não encontrou o elemento no array

// Fatiamento de Arrays (Faz recortes e guarda apenas o que estiver entre o inicio e o fim do parâmetro)
let fig1 = figuras.slice(1, 3);
console.log(fig1);

let fig2 = figuras.slice(3); // corta do 1 até o final do array
console.log(fig2);

// Último elemento do array
console.log(figuras.slice(-1)); // Vai criar um Array
console.log(figuras[figuras.length - 1]); // Vai retornar uma String