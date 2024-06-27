// Array => armazens mpultiplos valores/itens/elementos
// [] -> vazio
// [1, 2, 3, 4, 5] -> preenchido
// ['batata', 'batata doce'] -> com strings

let figuras = ['coração', 'estrela', 'ok', 'não', 'sim', 'sorriso'];
console.log(figuras); // Ver os elementos dentro do array

let numeros = [1, 2, 6, 4, 9.3];
console.log(numeros);

// Acessando um elemento do array
console.log(figuras[1]);
console.log(figuras[5]);
console.log(numeros[4]);
console.log(numeros[1000]); // Undefined 

// Alterar os elementos
let notas = [6.5, 8.0, 9.0];
console.log(`antes ${notas}`);
notas[1] = 8.5;
notas[2] += 0.5;
notas[0] ++;
console.log(`depois ${notas}`);

// Não dá pra fazer isso numa string, strings no js são imutáveis. e quando a gente usa métodos de strings eles criam novas strings.

// Tamanho (length)
let arr1 = [];
let arr2 = [1, 2, 3, 4];

console.log(arr1.length);
console.log(arr2.length);

// Percorrer array com o for
for(let i = 0; i < arr2.length; i ++) {
    console.log(arr2[i]);
}

let alunos = ['Alberto', 'Jorge', 'Matheus', 'Ana'];
for(let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${i} é ${alunos[i]}`);
}

// Percorrer array com o For-Of
let frutas = ['abacaxi', 'laranja', 'manga', 'abacate']; // Percorre os elementos do array
for(let f of frutas) {
    console.log(f);
}

// Percorrer o array com o For-In
for(let i in frutas) { // Percorre os índices do array
    console.log(frutas[i]);
}