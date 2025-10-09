# Objetos em JavaScript

Objetos são uma das estruturas de dados mais importantes em JavaScript. Quase tudo em JavaScript é um objeto, ou se comporta como um. Um objeto é uma coleção de pares de chave-valor (propriedades e métodos).

## Criando Objetos

Existem várias maneiras de criar objetos:

### 1. Objeto Literal

A forma mais comum e simples de criar um objeto.

```javascript
const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo',
  saudacao: function() {
    return `Olá, meu nome é ${this.nome}.`;
  }
};

console.log(pessoa.nome); // João
console.log(pessoa.saudacao()); // Olá, meu nome é João.
```

### 2. Construtor de Objeto (`new Object()`)

Você pode criar um objeto vazio e adicionar propriedades a ele.

```javascript
const carro = new Object();
carro.marca = 'Ford';
carro.modelo = 'Mustang';
carro.ano = 1969;

console.log(carro.marca); // Ford
```

### 3. Funções Construtoras (Constructor Functions)

Permite criar um "molde" para objetos.

```javascript
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

const meuCarro = new Carro('Toyota', 'Corolla', 2022);
const seuCarro = new Carro('Honda', 'Civic', 2023);

console.log(meuCarro.modelo); // Corolla
console.log(seuCarro.modelo); // Civic
```

## Acessando Propriedades

Você pode acessar as propriedades de um objeto de duas maneiras:

### 1. Notação de Ponto (`.`)

```javascript
console.log(pessoa.nome);
```

### 2. Notação de Colchetes (`[]`)

Útil quando o nome da propriedade é uma variável ou contém caracteres especiais.

```javascript
console.log(pessoa['idade']); // 30

const propriedade = 'cidade';
console.log(pessoa[propriedade]); // São Paulo
```

## Adicionando e Modificando Propriedades

Você pode adicionar ou modificar propriedades a qualquer momento.

```javascript
const pessoa = { nome: 'Ana' };

// Adicionando uma nova propriedade
pessoa.idade = 25;
console.log(pessoa); // { nome: 'Ana', idade: 25 }

// Modificando uma propriedade existente
pessoa.nome = 'Ana Silva';
console.log(pessoa); // { nome: 'Ana Silva', idade: 25 }
```

## Métodos

Métodos são funções armazenadas como propriedades de um objeto.

```javascript
const calculadora = {
  somar: function(a, b) {
    return a + b;
  },
  subtrair: (a, b) => a - b // Usando arrow function
};

console.log(calculadora.somar(5, 3)); // 8
console.log(calculadora.subtrair(5, 3)); // 2
```

### A palavra-chave `this`

Dentro de um método de objeto, `this` se refere ao próprio objeto, permitindo acessar suas propriedades e outros métodos.

**Atenção:** Arrow functions não têm seu próprio `this`, elas herdam o `this` do escopo em que foram criadas. Por isso, geralmente não são usadas para métodos que precisam acessar propriedades do objeto.

## Iterando sobre Propriedades

### `for...in`

Percorre todas as propriedades enumeráveis de um objeto.

```javascript
for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
// nome: João
// idade: 30
// ...
```

### `Object.keys()`, `Object.values()`, `Object.entries()`

Esses métodos retornam arrays que podem ser facilmente iterados com `forEach`, `map`, etc.

- `Object.keys(obj)`: Retorna um array com as chaves (nomes das propriedades).
- `Object.values(obj)`: Retorna um array com os valores das propriedades.
- `Object.entries(obj)`: Retorna um array de arrays, onde cada subarray contém a chave e o valor.

```javascript
const frutas = { a: 'maçã', b: 'banana' };

console.log(Object.keys(frutas));   // ['a', 'b']
console.log(Object.values(frutas)); // ['maçã', 'banana']
console.log(Object.entries(frutas)); // [ ['a', 'maçã'], ['b', 'banana'] ]
```

## Desestruturação de Objetos (Object Destructuring)

Uma forma fácil de extrair propriedades de um objeto para variáveis.

```javascript
const usuario = {
  id: 42,
  nomeCompleto: 'John Doe',
  email: 'john.doe@example.com'
};

const { nomeCompleto, email } = usuario;

console.log(nomeCompleto); // 'John Doe'
console.log(email);      // 'john.doe@example.com'
```
