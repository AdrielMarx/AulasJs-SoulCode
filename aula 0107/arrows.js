// Declaração de uma function
function soma (a, b) {
    return a + b
}

let resultadoSoma = soma(10, 5) 

// Arrow function => +concisa
const somaArrow = (a, b) => a + b 
let resultadoArrow = somaArrow(5, 20)

// Arrow com corpo
const checarPar = (num) => {
    if(num % 2 == 0) {
        console.log(`O número ${num} é par!`)
        return true
    }
    else {
        console.log(`O número ${num} é ímpar`)
        return false
    }
}

// Transformando em arrow
const compararString = (str1, str2) => str1 === str2
console.log(compararString('Soulcode', 'Soulcode'))

// // Exemplo: Converter a função abaixo em arrow
function extrairDigitosVerificadores(cpf) {
    const partesCpf = cpf.split("-");
    return partesCpf[1];
}
const extrairDigitosVerificadoresArrow = (cpf) => {
    const partesCpfArrow = cpf.split('-')
    return partesCpfArrow[1]
} 

// For Each -> executa uma função para cada elemento no array
const numeros = [1, 2, 3, 4, 5, 6, 7]
for (let n of numeros) {
    console.log(n)
}

numeros.forEach((n) => {
    console.log(`O número é: ${n}`)
})

// Exemplo: Somar todos os números de um array (forEach)
soma = 0 
// quando o arrow tem 1 parametro não é oritorio os parenteses
// se o corpo possue uma linha, pode ser simplificado dessa forma:
numeros.forEach(numero => soma += numero)
console.log(soma)

// Exemplo: Converter a função em arrow, e o for em forEach.
function repetirPalavra(palavra, qt) {
    let resultado = "";

    for(let i = 0; i < qt; i++) {
        resultado += palavra;
    }

    return resultado;
}

// Exemplo: Converter a função abaixo em arrow e o for em forEach
function filtrarStrings(arr) {
    let stringsFiltradas = [];

    for(let str of arr) {
        if(str.length > 5) {
            stringsFiltradas.push(str);
        }
    }

    return stringsFiltradas;
}

const filtrarStringsArrow = (arr) => {
    stringsFiltradas = []
    arr.forEach((str) => {
        if (str.length > 5) {
            stringsFiltradas.push(str)
        }
    })
    return stringsFiltradas
}
