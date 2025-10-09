# Funções em JavaScript

Funções são blocos de construção fundamentais em JavaScript. Elas são um conjunto de instruções que realizam uma tarefa ou calculam um valor.

## Declarando Funções

Existem várias maneiras de definir funções em JavaScript:

### 1. Declaração de Função (Function Declaration)

A forma mais comum, usando a palavra-chave `function`.

```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao('Mundo')); // Olá, Mundo!
```

Uma característica importante das declarações de função é o *hoisting* (içamento), o que significa que você pode chamar a função antes de ela ser declarada no código.

### 2. Expressão de Função (Function Expression)

Uma função também pode ser definida como uma expressão e atribuída a uma variável. Essas funções são anônimas (não têm um nome).

```javascript
const saudacao = function(nome) {
  return `Olá, ${nome}!`;
};

console.log(saudacao('Mundo')); // Olá, Mundo!
```

Expressões de função não sofrem *hoisting*.

### 3. Funções de Seta (Arrow Functions)

Introduzidas no ES6, as arrow functions oferecem uma sintaxe mais curta e têm um comportamento diferente com a palavra-chave `this`.

```javascript
const saudacao = (nome) => {
  return `Olá, ${nome}!`;
};

// Se a função tem apenas uma linha de retorno, pode ser ainda mais curta:
const adicionar = (a, b) => a + b;

console.log(saudacao('Mundo')); // Olá, Mundo!
console.log(adicionar(5, 3));    // 8
```

## Parâmetros e Argumentos

- **Parâmetros**: São os nomes listados na definição da função.
- **Argumentos**: São os valores reais passados para a função quando ela é chamada.

```javascript
function somar(a, b) { // a e b são parâmetros
  return a + b;
}

somar(10, 5); // 10 e 5 são argumentos
```

### Parâmetros Padrão (Default Parameters)

Você pode definir valores padrão para os parâmetros caso nenhum argumento seja fornecido.

```javascript
function cumprimentar(nome = 'visitante') {
  console.log(`Bem-vindo, ${nome}!`);
}

cumprimentar('Ana');      // Bem-vindo, Ana!
cumprimentar();           // Bem-vindo, visitante!
```

## O Retorno (`return`)

Uma função pode retornar um valor usando a instrução `return`. Se a instrução `return` for omitida, a função retornará `undefined`.

```javascript
function multiplicar(x, y) {
  return x * y;
  // Qualquer código aqui não será executado
}

const resultado = multiplicar(4, 3);
console.log(resultado); // 12
```

## Funções de Ordem Superior (Higher-Order Functions)

Em JavaScript, as funções são "cidadãs de primeira classe", o que significa que podem ser tratadas como qualquer outro valor. Elas podem ser passadas como argumentos para outras funções e podem ser retornadas por outras funções.

- Uma **função de ordem superior** é uma função que recebe outra função como argumento ou que retorna uma função.

```javascript
const numeros = [1, 2, 3, 4];

// .map() é uma função de ordem superior que recebe uma função como argumento
const dobrados = numeros.map(function(n) {
  return n * 2;
});

console.log(dobrados); // [2, 4, 6, 8]
```

## Expressão de Função Invocada Imediatamente (IIFE)

Uma IIFE (Immediately Invoked Function Expression) é uma função que é executada assim que é definida. É uma maneira de criar um escopo privado para variáveis, evitando a poluição do escopo global.

```javascript
(function() {
  const mensagem = "Estou dentro de uma IIFE!";
  console.log(mensagem);
})();

// A variável 'mensagem' não está acessível aqui fora.
// console.log(mensagem); // Geraria um erro: ReferenceError
```
