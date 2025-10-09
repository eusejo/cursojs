# Operadores Lógicos em JavaScript

Operadores lógicos são usados para combinar ou inverter valores booleanos (`true` e `false`), permitindo tomar decisões complexas no código.

## AND Lógico (`&&`)

O operador `&&` retorna `true` somente se **ambos** os operandos forem verdadeiros.

**Sintaxe:** `expressao1 && expressao2`

| `expressao1` | `expressao2` | Resultado |
|:------------:|:------------:|:---------:|
| `true`       | `true`       | `true`    |
| `true`       | `false`      | `false`   |
| `false`      | `true`       | `false`   |
| `false`      | `false`      | `false`   |

```javascript
const temIdade = true;
const temCarteira = false;

const podeDirigir = temIdade && temCarteira;
console.log(podeDirigir); // false
```

### Avaliação de Curto-Circuito (Short-Circuit) com `&&`

Se o primeiro operando for `false`, o `&&` não avalia o segundo operando e retorna imediatamente o valor do primeiro. Isso é útil para, por exemplo, verificar se um objeto existe antes de acessar uma de suas propriedades.

```javascript
const usuario = null;
// A segunda parte (usuario.nome) nunca é executada, evitando um erro.
const nomeUsuario = usuario && usuario.nome;
console.log(nomeUsuario); // null
```

## OR Lógico (`||`)

O operador `||` retorna `true` se **pelo menos um** dos operandos for verdadeiro.

**Sintaxe:** `expressao1 || expressao2`

| `expressao1` | `expressao2` | Resultado |
|:------------:|:------------:|:---------:|
| `true`       | `true`       | `true`    |
| `true`       | `false`      | `true`    |
| `false`      | `true`       | `true`    |
| `false`      | `false`      | `false`   |

```javascript
const eFimDeSemana = true;
const estaDeFerias = false;

const podeDescansar = eFimDeSemana || estaDeFerias;
console.log(podeDescansar); // true
```

### Avaliação de Curto-Circuito (Short-Circuit) com `||`

Se o primeiro operando for `true`, o `||` não avalia o segundo operando e retorna imediatamente o valor do primeiro. É comumente usado para definir valores padrão.

```javascript
const nome = null;
const nomeDeUsuario = nome || 'Anônimo';

console.log(nomeDeUsuario); // 'Anônimo'
```

## NOT Lógico (`!`)

O operador `!` inverte o valor booleano de um operando. O que é `true` se torna `false`, e o que é `false` se torna `true`.

**Sintaxe:** `!expressao`

```javascript
const portaAberta = false;

console.log(!portaAberta); // true

const logado = true;
console.log(!logado); // false
```

## Truthy e Falsy

Em JavaScript, não apenas os booleanos `true` e `false` são avaliados em contextos lógicos. Todos os valores têm uma veracidade inerente.

- **Valores Falsy:** São valores que se comportam como `false` quando encontrados em um contexto booleano.
  - `false`
  - `0` (zero)
  - `''` ou `""` (string vazia)
  - `null`
  - `undefined`
  - `NaN` (Not a Number)

- **Valores Truthy:** Qualquer valor que não seja *falsy*. Isso inclui:
  - `'0'` (uma string contendo um zero)
  - `'false'` (a string "false")
  - `[]` (um array vazio)
  - `{}` (um objeto vazio)
  - `function() {}` (uma função vazia)

Os operadores lógicos `&&` e `||` na verdade retornam o valor de um dos operandos originais, o que os torna muito poderosos em conjunto com valores *truthy* e *falsy*.

```javascript
// && retorna o primeiro valor falsy, ou o último valor se todos forem truthy.
console.log('Gato' && 'Cachorro'); // 'Cachorro'
console.log('Gato' && false && 'Cachorro'); // false

// || retorna o primeiro valor truthy, ou o último valor se todos forem falsy.
console.log(null || 'Cachorro'); // 'Cachorro'
console.log(null || 0 || undefined); // undefined
```
