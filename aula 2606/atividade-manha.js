// Exercício 1
let ola = "hello";
let palavraInvertida =''
for (let i = ola.length -1; i >=0; i--){
    palavraInvertida += ola[i]
}
console.log(palavraInvertida)

// Exercício 2
let frase = 'As did I, we drink to die, we drink tonight';
let fraseCensura = frase.replaceAll('drink', '###');
console.log(fraseCensura);

// Exercício 3
let email = 'andrezinhogameplays@soulcode.com';
const validacaoEmail = email.endsWith('soulcode.com');
if (validacaoEmail) {
    console.log('Email verificado com domínio soulcode.');
}
else {
    console.log('Email não possue domínio soulcode');
}