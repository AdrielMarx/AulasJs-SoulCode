// Filter = cria um novo array com todos os elementos que passaram no teste da função
const notas = [7.0, 4.0, 5.5, 9.0, 8.4]
const notasAcima7 = notas.filter((nota) => nota > 7)
console.log(notasAcima7)

// Exemplo: filtro de arquivos
let arquivosPasta = ['codigo.js', 'estilos.css', 'index.html', 'sobre.html']
let extensao = '.html'
// Novo array com os elementos que passaram no teste
const arquivosHtml = arquivosPasta.filter((arquivo) => arquivo.endsWith(extensao))
console.log(arquivosHtml)