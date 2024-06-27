// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.
let listaFalta = []
function listaDeFalta(turma, presenca) {
    for (let p of turma) {
        if (presenca.includes(p)) {

        }
        else {
            listaFalta.push(p);
        }
    }
    console.log(listaFalta);
}

listaDeFalta(['jorge', 'mateus', 'exemplo', 'pessoa'], ['jorge','mateus', 'exemplo']);

// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
function elevarQuadrado (n) {
    let numerosAoQuadrado = []
    for (let numeros of n) {
        numeros = numeros ** 2;
        numerosAoQuadrado.push(numeros);
    }
    return numerosAoQuadrado;
}

console.log(elevarQuadrado([1, 2, 3, 4, 5, 6, 7, 8]));

// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.
function validarArquivo (nome) {
    for (let i of nome) {
        if (i.endsWith('.exe')) {
            console.log(i)
        }
    }
}
validarArquivo(['sonic.exe', 'matilda.exe', 'batata.exe', 'almir.json', 'react.net'])

// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let n of numbers) {
    console.log(n);
}
for (let n = 0; n < numbers.length; n++) {
    console.log(numbers[n]);
}

// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.
function maisdeCinco (strings) {
    let novaArray = [];
    for (let i of strings) {
        if (i.length > 5) {
            novaArray.push(i);
        }
    }
    console.log(novaArray);
}
maisdeCinco(['batata', 'programação', 'computadores', 'céu', 'cola',]);

// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.
maiorNumero = 0;
numerinhos = [1, 5, 2, 8, 19, 137, 21, 88];
for (let c of numerinhos) {
    if (c > maiorNumero) {
        maiorNumero = c;
    }
}
console.log(maiorNumero);

// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.
function verificarCpf ([cpf]) {
    let arrayCpf = cpf.split('-');
    console.log(arrayCpf[1]);
}

verificarCpf(['012.431.122-61']);

// 8. Crie uma função que inverte uma string. Retorna ela invertida.
function inverterString (string) {
    let stringInvertida = string.split('').reverse().join('');
    console.log(stringInvertida);
}
inverterString('batata assada')

// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.
function repetirPalavra (palavra, numero) {
    for (let c = 0; c <= numero; c++) {
        console.log(palavra);
    }
}

repetirPalavra('amendoas', 9);

// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.
function stringsIguais (string1, string2) {
    let saoiguais = false;
    if (string1 == string2) {
        saoiguais = true
    }
    console.log(saoiguais);
}

stringsIguais('batata', 'batata');
stringsIguais('batata', 'beterraba');

// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'
function formatarData (data, separador) {
    let dataformatada = data.join(separador);
    console.log(dataformatada);
}

formatarData([10, 10, 2005], '.');

// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'
function buscar (array, busca, padrao) {
    if (array.includes(busca))
        console.log(busca);
    else {
        console.log(padrao);
    }
}

buscar(['amendoim', 'buraco', 'sinuca', 'poker', 'mouse', 'garrafa', 'pop'], 'mouse', 'sem resultados de pesquisa');
buscar(['amendoim', 'buraco', 'sinuca', 'poker', 'mouse', 'garrafa', 'pop'], 'refrigerante', 'sem resultados de pesquisa');