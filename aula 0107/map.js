// Map = cria um novo array com os resultado da função aplicada em cada elemento
const numeros = [3, 4, 9, 10]
// Cada elemento no array, será aplicado na função
// O resultado será gerado em um novo array
const quadrados = numeros.map((n) => n**2)
console.log(quadrados)
