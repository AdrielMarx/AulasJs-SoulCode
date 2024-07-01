// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.
const maiorEntre = (n1, n2) => {
    if (n1 > n2) {
        console.log(`O número ${n1} é maior`)
    }
    else if (n1 < n2) {
        console.log(`O número ${n2} é maior`)
    }
    else {
        console.log('Os números são iguais')
    }
}
maiorEntre(3, 7)
maiorEntre(6, 1)
maiorEntre(1, 1)

// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.
let palavras = ['jose', 'almir', 'batata', 'alface']
palavras.forEach((palavra) => {
    let palavraArray = palavra.split('')
    palavraArray[0] = palavraArray[0].toUpperCase()
    let juncao = palavraArray.join('')
    console.log(juncao)
})

// 3. Use map para transformar um array de números, multiplicando cada número por 5.
const numeros = [3, 1, 5, 4, 8, 7]
const multi5 = numeros.map((numero) => numero * 5)
console.log(multi5)

// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.
const idades = [18, 15, 51, 26, 8, 3]
const filtro = idades.filter((idade) => idade >= 18)
console.log(filtro)

// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.
let livro = {
    titulo: 'Metamorphosis',
    autor: 'Franz Kafka',
    publicacao: {
        editora: 'Pandorga',
        ano: 1915
    }
}
console.log(livro.publicacao.editora)

// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.
const frutas = ['tomate', 'maçã', 'ameixa', 'abacate']
let [fruta1, fruta2] = frutas
console.log(fruta1, fruta2)

// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.

// Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
// function mostrarPares (numeros) {
//     let numerosPares = []
//     for (let n of numeros) {
//         if (n % 2 == 0) {
//             numerosPares.push(n)
//         }
//     }
//     console.log(numerosPares)
// }
// mostrarPares([1, 4, 12, 2, 7, 13, 93, 5])
const mostrarPares = (numeros) => {
    const filtro2 = numeros.filter((numero) => numero % 2 == 0)
    console.log(filtro2)
}
mostrarPares([1, 4, 12, 2, 7, 13, 93, 5])

// Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.
// function somarArray (numeros) {
//     let soma = 0
//     for (let i of numeros) {
//         soma += i
//     }
//     console.log(soma)
// }
// somarArray([1, 5, 23, 23, 76, 43, 10])
const somarArray = (numeros) => {
    let soma = 0
    numeros.forEach((numero) => {
        soma += numero
    })
    console.log(soma)
}
somarArray([1, 5, 23, 23, 76, 43, 10])

// Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
// function verificarPalindromo (string) {
//     let stringInvertida = string.split('').reverse().join('').toLowerCase()
//     if (stringInvertida == string.toLowerCase()) {
//         console.log('É um palíndromo')
//     }
//     else {
//         console.log('Não é um palíndromo')
//     }
// }
const verificarPalindromo = (string) => {
    let stringInvertida = string.split('').reverse().join('').toLowerCase()
    if (stringInvertida == string.toLowerCase()) {
        console.log('É um palíndromo')
    }
    else {
        console.log('Não é um palíndromo')
    }
}
verificarPalindromo('arara')

// Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.
// function contarVogais (string) {
//     let vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'à', 'ã', 'é', 'í', 'ú', 'ê', 'â']
//     let contVogais = 0
//     for (let letra of string) {
//         if (vogais.includes(letra)) {
//             contVogais += 1
//         }
//     }
//     console.log(`A string "${string}" possue ${contVogais} vogais.`)
// }
// contarVogais('joão marques')
const contarVogais = (string) => {
    let vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'à', 'ã', 'é', 'í', 'ú', 'ê', 'â']
    let contVogais = 0
    let stringSplit = string.split('')
    stringSplit.forEach((letra) => {
        if (vogais.includes(letra.toLowerCase())) {
            contVogais += 1
        }
    })
    console.log(`A string "${string}" possue ${contVogais} vogais.`)
}
contarVogais('Todos os garotos')

// Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.
// function menorEntre (numeros) {
//     let menor = numeros[0]
//     for (let n of numeros) {
//         if (n < menor) {
//             menor = n
//         }
//     }
//     console.log(`O menor número é ${menor}`)
// }
// menorEntre([1, 4, 6, 3, 0, 8, 3, -4])
const menorEntre = (numeros) => {
    let menor = numeros[0]
    numeros.forEach((numero) => {
        if (numero < menor) {
            menor = numero
        }
    })
    console.log(`O menor número é ${menor}`)
}
menorEntre([1, 4, 3, 18, 93, -1, 3])

// Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3
// function calcularMedia (numeros) {
//     let divisor = numeros.length
//     let soma = 0
//     for (let numero of numeros) {
//         soma += numero
//     }
//     let media = soma / divisor
//     console.log(media)
// }
// calcularMedia([3.5, 4.5, 9.0, 10])
const calcularMedia = (numeros) => {
    let divisor = numeros.length
    let soma = 0
    numeros.forEach((numero) => {
        soma += numero
    })
    let media = soma / divisor
    console.log(media)
}
calcularMedia([4.5, 3, 1.0, 10])

// Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
// function ofuscarEmail (email) {
//     let limite = email.indexOf('@')
//     let começo = email[0]
//     let parteParaOfuscar = email.slice(1, limite)
//     let fim = email.slice(limite, email.length)
//     let parteOfuscada = ''
//     for (let c of parteParaOfuscar) {
//         c = '*'
//         parteOfuscada += c
//     }
//     let emailOfuscado = [começo, parteOfuscada, fim]
//     console.log(emailOfuscado.join(''))
// }
// ofuscarEmail ('adrielmarx@email.com')
const ofuscarEmail = (email) => {
    let primeiraLetra = email[0]
    let corte = email.split('@')
    let nome = corte[0] 
    let ofuscar = nome.split('').map((letra) => letra = '*')
    console.log(primeiraLetra + ofuscar.join('') + '@' + corte[1])
}
ofuscarEmail('adriel@email.com')