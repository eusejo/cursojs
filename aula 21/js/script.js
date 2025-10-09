function meuEscopo() {

    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nome = form.querySelector("#Nomeform")
        const sobrenome = form.querySelector("#sobrenomeForm")
        const peso = form.querySelector("#pesoForm")
        const altura = form.querySelector("#alturaForm")

        const objPessoas = (nome, sobrenome, peso, altura) => {
            return {
                nome, sobrenome, peso, altura
            }
        }

        const pessoa = objPessoas(nome.value, sobrenome.value, peso.value, altura.value)
        pessoas.push(pessoa)
        console.log(pessoas)

        const htmlResultado = `
            <p>
                ${pessoa.nome} ${pessoa.peso} ${pessoa.altura}
            </p>
        `
        resultado.innerHTML += htmlResultado
    })
}
meuEscopo()