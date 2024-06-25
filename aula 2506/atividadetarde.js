// Exercício 1
for (let c = 1; c <= 10; c++) {
    console.log(`===Tabuada de ${c}===`);
    for(let multi = 1; multi <= 10; multi++) {
        console.log(`${c} x ${multi} = ${c*multi}`);
    }
}

// Exercício 2 
let n = 10;
let t1 = 0;
let t2 = 1;
let t3 = 0;

console.log('========================');
console.log('SEQUÊNCIA DE FIBONACCI');

for(let cont = 0; cont < n; cont++) {
    console.log(`${t3}`);
    t1 = t2;
    t2 = t3;
    t3 = t1 + t2;
}

// Exercício 3
for(let cont = 10; cont >= 1; cont --) {
    console.log(cont);
}

// Exercício 4
let result = 1;

for (let n = 5; n >= 1; n--) {
    result *= n;
}
console.log(`O resultado é ${result}!`);

// Exercício 5
for(let c = 1; c <= 100; c++) {
    if(c % 7 === 0) {
        console.log(`O número ${c} é um multiplo de 7.`)
    }
}

// Exercício 6
let soma = 0;
for(let c = 50; c <= 100; c++) {
    soma += c;
}
console.log(`a soma de todos os números entre 50 e 100 é: ${soma}`);

// Exercício 7
let mensagem = '*';
let asterisco = '*';
for(let c = 1; c <= 5; c++) {
    console.log(`${mensagem}`);
    mensagem = mensagem + asterisco;
}