/*
    Funções

    funcion nome_da_funcao(parametros) {
        // Bloco de código da função
    }
*/

// Declarando uma função chamada 'boasVindas'
function boasVindas() { // Escopo da função
    console.log('Seja bem-vindo(a)'); // Dentro do escopo da função
    console.log('!!!!!!!');
}

// Chamando a função
boasVindas();

function exemplo() {
    let a = 5;
    let b = 10;

    console.log(`A soma é ${a + b}`);
}

exemplo();

// Escopo global
let num1 = 2;
let num2 = 5;

function exemplo2() {
    console.log(`A soma é ${num1 + num2}`)
}

// exemplo2();
// num1 = 10;
// num2 = 15;
// exemplo2();


// Parâmetros = entrada = o que é necessário para executar
function soma(a, b) {
    console.log(`A soma de ${a} e ${b} é ${a + b}`);
}

soma(10, 8);
soma(33, 5);

function media(n1, n2, n3) {
    let resultado = (n1 + n2 +n3) / 3;

    // Retorno = saída da função
    return resultado;
}

let mediaAluno1 = media(7.0, 6.0, 9.0);
let mediaAluno2 = media(8.0, 10.0, 6.0);
let mediaAluno3 = media(4.0, 5.0, 7.0);

console.log('Valores retornados: ');
console.log(mediaAluno1.toFixed(2));
console.log(mediaAluno2.toFixed(2));
console.log(mediaAluno3.toFixed(2));

let mediaTurma = media(mediaAluno1, mediaAluno2, mediaAluno3);
console.log(`Média da turma: ${mediaTurma.toFixed(2)}`);

function calcularImc(peso, altura) {
    calculo =  peso / (altura**2)
    return calculo.toFixed(2)
}

let pessoa1 = calcularImc(87, 1.78);
let pessoa2 = calcularImc(60, 1.60);
let pessoa3 = calcularImc(78, 1.70);
console.log(pessoa1);