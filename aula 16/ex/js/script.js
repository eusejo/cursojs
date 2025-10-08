const numero = Number(prompt('digite um numero'))
const titulo = document.getElementById("numero-titulo")
const conteudoDiv = document.getElementById("texto")

const conteudo = `
    <p>
        Raiz quadrada: ${numero ** (1/2)} <br>
        ${numero} é inteiro: ${Number.isInteger(numero)} <br>
        è NaN : ${Number.isNaN(numero)} <br>
        Arredondado para baixo: ${Math.floor(numero)} <br>
        Arredondado para cima: ${Math.ceil(numero)} <br>
        Com duas casas decimais: ${numero.toFixed(2)} <br>
    </p>
`
titulo.innerHTML = numero
conteudoDiv.innerHTML = conteudo