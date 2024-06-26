// Strings = Cadeias de caracteres

const nome = 'Adriel';
const sobrenome = "Batata";

// Interpolação de string
const nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

// Formação de Strings
let meuPet = 'Fred';
// 0 -> "F", 
// 1 -> "r", 
// 2 -> "e", 
// 3 -> "d"

let comida = 'Batata Assada'; // 0 até 12
console.log(comida[0]);
console.log(comida[1]);
console.log(comida[2]);
console.log(comida[6]);
console.log(comida[500]);

// Tamanho da String
console.log(comida.length); // Total de caracteres da string
console.log(comida[comida.length - 1]); // Último ítem da string

// Percorrendo a string caractere por caractere
for (let i = 0; i < comida.length; i++) {
    console.log(comida[i]); // Vai mostrar um caractere por vez.
}

// Funções de string
let palavra = 'Java Script';
const palavraMin = palavra.toLowerCase(); // Minúscula
const palavraMai = palavra.toUpperCase(); // Maiúscula
const palavraCaractere = palavra.charAt(7); // palavra[7]

console.log(`palavra em minúsculo: ${palavraMin}`);
console.log(`palavra em maiúsculo: ${palavraMai}`);
console.log(`índice escolhido da palavra: ${palavraCaractere}`);
console.log(palavra.replace('Java', 'Type')); // Muda o ítem escolhido de lugar
console.log(palavra.replace('J', 'R'));
console.log(palavra.replaceAll('a', 'x')); // Muda TODOS os ítems escolhidos de lugar

// Se a gente quisesse ignorar os padrões de Case a gente teria que usar expressões regulares.

let frase = 'Eu comi arroz, feijão, batata, carne e alface';

console.log(frase.includes('arroz'));
console.log(frase.includes('alface'));

if (frase.includes('alface')) {
    console.log('Muito bem! Tá comendo folhas saudáveis e tals');
}
else {
    console.log('Que vergonha meu amigo.');
}

let arquivo = 'música.mp3';
console.log(arquivo.endsWith('.mp3')); // Verifica se a string termina com .mp3.
console.log(arquivo.endsWith('.mp4'));
console.log(arquivo.startsWith('mus')); // Verifica se a string começa com mus.

// Slice
console.log(arquivo.slice(0, 4)); // Recorta a string do índice 0 até o 3.
console.log(arquivo.slice(4, 6));

