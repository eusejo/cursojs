const nome = 'sergio luis'
const sobrenome = 'guedes'
const idade = 21
const peso = 58
const alturaEmM = 1.8
let imc
let anoDeNascimento

imc = peso / (alturaEmM ** 2)
anoDeNascimento = 2025 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é ${imc}`)
console.log(`${nome} nasceu em ${anoDeNascimento}`)