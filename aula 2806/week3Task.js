// Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
function mostrarPares (numeros) {
    let numerosPares = []
    for (let n of numeros) {
        if (n % 2 == 0) {
            numerosPares.push(n)
        }
    }
    console.log(numerosPares)
}
mostrarPares([1, 4, 12, 2, 7, 13, 93, 5])

// Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.
function somarArray (numeros) {
    let soma = 0
    for (let i of numeros) {
        soma += i
    }
    console.log(soma)
}
somarArray([1, 5, 23, 23, 76, 43, 10])

// Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
function verificarPalindromo (string) {
    let stringInvertida = string.split('').reverse().join('').toLowerCase();
    if (stringInvertida == string.toLowerCase()) {
        console.log('É um palíndromo')
    }
    else {
        console.log('Não é um palíndromo')
    }
}
verificarPalindromo('batata assada')
verificarPalindromo('Omissíssimo')

// Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.
function contarVogais (string) {
    let vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'à', 'ã', 'é', 'í', 'ú', 'ê', 'â']
    let contVogais = 0
    for (let letra of string) {
        if (vogais.includes(letra)) {
            contVogais += 1
        }
    }
    console.log(`A string "${string}" possue ${contVogais} vogais.`)
}
contarVogais('joão marques')

// Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.
function menorEntre (numeros) {
    let menor = numeros[0]
    for (let n of numeros) {
        if (n < menor) {
            menor = n
        }
    }
    console.log(`O menor número é ${menor}`)
}
menorEntre([1, 4, 6, 3, 0, 8, 3, -4])

// Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3
function calcularMedia (numeros) {
    let divisor = numeros.length
    let soma = 0
    for (let numero of numeros) {
        soma += numero
    }
    let media = soma / divisor
    console.log(media)
}
calcularMedia([3.5, 4.5, 9.0, 10])

// Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
function ofuscarEmail (email) {
    let limite = email.indexOf('@')
    let começo = email[0]
    let parteParaOfuscar = email.slice(1, limite)
    let fim = email.slice(limite, email.length)
    let parteOfuscada = ''
    for (let c of parteParaOfuscar) {
        c = '*'
        parteOfuscada += c
    }
    let emailOfuscado = [começo, parteOfuscada, fim]
    console.log(emailOfuscado.join(''))
}
ofuscarEmail ('adrielmarx@email.com')