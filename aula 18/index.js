/*
function oi(nome) {
    return `bom dia, ${nome}!`
}

const saudacao = oi('sejo')
console.log(saudacao)

function somar(x,y) {
    const resultado = x + y
    return resultado
}

const soma = somar(3,7)
console.log(soma)
*/


// Função anonima (dentro de uma variavel)

const raiz = function (n) {
    return n ** (1/2)
};

const teste = raiz(9)
console.log(teste)


// Arrow function
const arrowRaiz = (n) => n ** 0.5
