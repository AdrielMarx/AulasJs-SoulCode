// Exercício 1
let string = 'Jamelão';
let stringSplit = string.split('');
let splitReverse = stringSplit.reverse();
let reverseJoin = splitReverse.join('');
console.log(reverseJoin);

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