for(let c = 2; c <= 10; c += 2) {
    console.log(c);
}

let n = 7;
for (let c = 1; c <= 10; c++) {
    console.log(`${n} X ${c} = ${n*c}`);
}

let soma = 0;
for (let c = 1; c <= 999; c ++) {
    if(c % 2 !== 0) {
        soma = soma + c;
    }
}

// Interpolação / Tempalte String
console.log(`Soma dos números: ${soma}`);

let qt = 0;
for(let c = 1; c <= 1000; c++) {
    if(c % 9 === 0) {
        console.log(`O número ${c} é divisível por 9`);
        qt += 1;
    }
}

console.log('Total:', qt);