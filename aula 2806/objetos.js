// Objetos = servem para estruturar dados

/*
    let variavel = {
        propriedade1: valor1,
        propriedade2: valor2,
        propriedade3: valor3
    }
*/

// nome, idade, peso, altura => propriedades do objeto.
let pessoa1 = {
    nome: 'Adriel',
    idade: 19,
    peso: 55,
    altura: 1.72
};

let pessoa2 = {
    nome: 'Maria',
    idade: 22,
    peso: 50,
    altura: 1.64
};

// Acesso de propriedade
console.log(pessoa1.nome);
console.log(pessoa2.idade);
console.log(pessoa1['peso']);
console.log(pessoa2['altura']);
console.log(pessoa1.email);

// Adicionando propriedades ao objeto
pessoa1['email'] = 'adriel@email.com';
console.log(pessoa1.email);

// Alterar valores nas propriedades
pessoa1.idade ++;
pessoa2['idade'] += 5; // (acrescentou mais 5 na idade da pessoa 2)

console.log(pessoa1.idade);
console.log(pessoa2.idade);

// Removendo propiedades
delete pessoa1.idade; // idade da pessoa 1 foi deletada
console.log(pessoa1);

// Conversão JSON
const dado = JSON.stringify(pessoa2);
console.log(JSON.parse(dado));