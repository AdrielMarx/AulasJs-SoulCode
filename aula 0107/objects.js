// Objetos -> são estruturas para representar dados
let pessoa = {
    nome: 'Adriel Marx',
    cpf: '999.999.999-99',
    dataNascimento: '10/01/2001',
    contato: {
        email: 'adrielmarrx@gmail.com',
        telefone: '61 9 9999-9999',
        fax: '9 999 999 9999'
    },
    endereco: {
        cidade: 'Brasília',
        estado: 'DF',
        cep: '99999-999',
        rua: 'Rua-X',
        numero: '23'
    },
    objeitvosProfissionais: ['Home Office', 'Desenvolvedor Sênior', 'Exterior'],
    formacao: [
        {nome: 'Ensino Médio', periodo: '2000-2003'},//0
        {nome: 'Técnico em Informática', periodo: '2003-2005'},//1
        {nome: 'Bacharelado em Computação', periodo: '2005-2010'},//2
    ]
}

// console.log(pessoa.contato)
// console.log(pessoa.contato.email)
// console.log(pessoa.endereco.estado)
// console.log(pessoa.objeitvosProfissionais)
// pessoa.objeitvosProfissionais.forEach(objetivo => console.log(objetivo))
// console.log(pessoa.formacao)
pessoa.formacao.push({nome: 'Mestrado em IA', periodo: '2010-2012'})
for (let f of pessoa.formacao) {
    console.log(`Formação: ${f.nome}`)
    console.log(`Período: ${f.periodo}`)
    console.log('=================')
}

let aluno = {
    nome: 'Adriel Marx',
    serie: '3º ano',
    materias: [
        {nome: 'Matemática', professor: 'Áthila'},
        {nome: 'Geografia', professor: 'Fernando'},
        {nome: 'Física', professor: 'Ronair'},
    ],
    notas: [
        {nome: 'Matemática', nota: '8.5'},
        {nome: 'Geografia', nota: '6.5'},
        {nome: 'Física', nota: '9.0'},
    ]
}