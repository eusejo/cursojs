// Criando um objeto literal

const pessoa1 = {
    nome : 'Luiz',
    sobrenome : 'Miranda',
    idade : 25
}
console.log(pessoa1.nome)

// 

const criarPessoa = (nome, sobrenome, idade) => {
    return {
        /*
        nome : nome,
        sobrenome : sobrenome,
        idade : idade
        */
       // Maneira simplificada, o js ja entende que deve criar chaves com os mesmo nomes do parametros
       nome, sobrenome, idade
    }
}
const pessoa2 = criarPessoa('sergio','luis',21)
console.log(pessoa2.idade)

const objetoLiteral = {
    nome : 'sergio',
    gosto : [
        'python',
        'javascript'
    ],
    falar: function() {
        console.log(`oi! eu sou o ${this.nome} e gosto de ${this.gosto}`)
    }
}

objetoLiteral.falar()