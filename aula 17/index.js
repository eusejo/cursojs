//                 0      1        2 
const alunos = ['luiz', 'ana', 'augusto']

alunos.push('otavio') // Adiciona um item ao final do array
alunos.unshift('mauru') // Adiciona um item no inicio do array
alunos.pop() // Remove o ultimo elemento
alunos.shift() // Remove o primeiro elemento
const removido = alunos.pop() // Remove o ultimo elemento e salva em uma variavel
delete alunos[1] // Remove um item especificado e deixa o indice vazio

console.log(alunos.slice(0, -2)) // Fatiamento de array
console.log(alunos)