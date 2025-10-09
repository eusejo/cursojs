# Principais Métodos de Arrays em JavaScript

Esta é uma visão geral dos métodos de array mais comuns em JavaScript.

## Métodos que modificam o array original

### `push()`

Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

```javascript
const frutas = ['maçã', 'banana'];
const novoComprimento = frutas.push('laranja');
console.log(frutas); // ['maçã', 'banana', 'laranja']
console.log(novoComprimento); // 3
```

### `pop()`

Remove o último elemento de um array e retorna esse elemento.

```javascript
const frutas = ['maçã', 'banana', 'laranja'];
const frutaRemovida = frutas.pop();
console.log(frutas); // ['maçã', 'banana']
console.log(frutaRemovida); // 'laranja'
```

### `shift()`

Remove o primeiro elemento de um array e retorna esse elemento.

```javascript
const frutas = ['maçã', 'banana', 'laranja'];
const frutaRemovida = frutas.shift();
console.log(frutas); // ['banana', 'laranja']
console.log(frutaRemovida); // 'maçã'
```

### `unshift()`

Adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.

```javascript
const frutas = ['banana', 'laranja'];
const novoComprimento = frutas.unshift('maçã', 'morango');
console.log(frutas); // ['maçã', 'morango', 'banana', 'laranja']
console.log(novoComprimento); // 4
```

### `splice()`

Altera o conteúdo de um array removendo, substituindo ou adicionando elementos.

```javascript
const meses = ['Jan', 'Mar', 'Abr', 'Jun'];
// Adiciona 'Fev' na posição 1
meses.splice(1, 0, 'Fev');
console.log(meses); // ["Jan", "Fev", "Mar", "Abr", "Jun"]

// Remove 'Abr'
meses.splice(3, 1);
console.log(meses); // ["Jan", "Fev", "Mar", "Jun"]
```

### `sort()`

Ordena os elementos de um array no lugar e retorna o array. A ordenação padrão é como strings.

```javascript
const frutas = ['banana', 'maçã', 'laranja'];
frutas.sort();
console.log(frutas); // ['banana', 'laranja', 'maçã']

const numeros = [4, 2, 5, 1, 3];
numeros.sort((a, b) => a - b); // Para ordenação numérica
console.log(numeros); // [1, 2, 3, 4, 5]
```

## Métodos que retornam um novo array

### `map()`

Cria um novo array com os resultados da chamada de uma função para cada elemento do array.

```javascript
const numeros = [1, 4, 9, 16];
const raizes = numeros.map(Math.sqrt);
console.log(raizes); // [1, 2, 3, 4]
```

### `filter()`

Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

```javascript
const palavras = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const resultado = palavras.filter(palavra => palavra.length > 6);
console.log(resultado); // ["exuberant", "destruction", "present"]
```

### `slice()`

Retorna uma cópia de parte de um array em um novo array. O array original não é modificado.

```javascript
const animais = ['pato', 'ganso', 'cisne', 'galinha', 'pavão'];
console.log(animais.slice(2)); // ["cisne", "galinha", "pavão"]
console.log(animais.slice(2, 4)); // ["cisne", "galinha"]
```

### `concat()`

Retorna um novo array que é a concatenação de dois ou mais arrays.

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); // ["a", "b", "c", "d", "e", "f"]
```

## Métodos de iteração

### `forEach()`

Executa uma função para cada elemento do array.

```javascript
const frutas = ['maçã', 'banana', 'laranja'];
frutas.forEach(fruta => console.log(fruta));
// 'maçã'
// 'banana'
// 'laranja'
```

### `reduce()`

Executa uma função "redutora" em cada elemento do array, resultando em um único valor de retorno.

```javascript
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma); // 10
```

## Métodos de busca

### `find()`

Retorna o primeiro elemento no array que satisfaz a função de teste fornecida.

```javascript
const numeros = [5, 12, 8, 130, 44];
const encontrado = numeros.find(elemento => elemento > 10);
console.log(encontrado); // 12
```

### `findIndex()`

Retorna o índice do primeiro elemento no array que satisfaz a função de teste fornecida.

```javascript
const numeros = [5, 12, 8, 130, 44];
const indice = numeros.findIndex(elemento => elemento > 10);
console.log(indice); // 1
```

### `includes()`

Determina se um array contém um determinado elemento, retornando `true` ou `false`.

```javascript
const pets = ['gato', 'cachorro', 'morcego'];
console.log(pets.includes('gato')); // true
console.log(pets.includes('peixe')); // false
```

## Outros métodos úteis

### `join()`

Junta todos os elementos de um array em uma string.

```javascript
const elementos = ['Fogo', 'Ar', 'Água'];
console.log(elementos.join()); // "Fogo,Ar,Água"
console.log(elementos.join('')); // "FogoArÁgua"
console.log(elementos.join(' - ')); // "Fogo - Ar - Água"
```
