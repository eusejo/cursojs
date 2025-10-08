let num1 = 1.12213131
let num2 = 3.5

// toString(2) Retorna a representação em binario do numero
// toFixed(3) Arredonda numeros de ponto flutuante muito grandes

console.log(num1.toString() + num2) // Faz com que o num1 vire string temporariamente
console.log(num1.toFixed(3))
console.log(Number.isInteger(num1)) // Para saber se o numero é um inteiro


let temp = num1 * 'oi'
console.log(Number.isNaN(temp)) // Verifica se a variavel retorna um NaN