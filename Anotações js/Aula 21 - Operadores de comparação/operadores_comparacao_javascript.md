# Operadores de Comparação em JavaScript

Operadores de comparação são usados em declarações lógicas para determinar a igualdade ou a diferença entre variáveis ou valores. Eles sempre retornam um valor booleano (`true` ou `false`).

## Igualdade (`==`) vs. Igualdade Estrita (`===`)

Esta é uma das distinções mais importantes em JavaScript.

### Igualdade (ou Igualdade "Solta") `==`

O operador `==` compara dois valores para igualdade **após converter ambos os valores para um tipo comum**. Esse processo é chamado de coerção de tipo.

```javascript
console.log(5 == 5);      // true
console.log('5' == 5);    // true (a string '5' é convertida para o número 5)
console.log(true == 1);     // true (o booleano true é convertido para o número 1)
console.log(null == undefined); // true
```

**Atenção:** O uso de `==` pode levar a resultados inesperados e bugs difíceis de rastrear devido à coerção de tipo. Geralmente, é recomendado evitar seu uso.

### Igualdade Estrita `===`

O operador `===` compara dois valores para igualdade **sem fazer nenhuma conversão de tipo**. Os valores devem ter o mesmo tipo e o mesmo valor para que o resultado seja `true`.

```javascript
console.log(5 === 5);     // true
console.log('5' === 5);   // false (tipos diferentes: string vs. número)
console.log(true === 1);    // false (tipos diferentes: booleano vs. número)
console.log(null === undefined); // false (tipos diferentes)
```

**Boa prática:** Prefira sempre usar o operador de igualdade estrita (`===`) para evitar os efeitos colaterais da coerção de tipo e tornar seu código mais previsível e seguro.

## Desigualdade (`!=`) vs. Desigualdade Estrita (`!==`)

O mesmo princípio se aplica aos operadores de desigualdade.

### Desigualdade `!=`

Retorna `true` se os operandos **não são iguais**, após a coerção de tipo.

```javascript
console.log('5' != 5);    // false (porque após a coerção, eles são iguais)
```

### Desigualdade Estrita `!==`

Retorna `true` se os operandos **não são estritamente iguais** (diferentes em valor ou tipo).

```javascript
console.log('5' !== 5);   // true (porque os tipos são diferentes)
console.log(5 !== 5);     // false (porque valor e tipo são iguais)
```

**Boa prática:** Assim como na igualdade, prefira sempre o operador de desigualdade estrita (`!==`).

## Operadores Relacionais

### Maior que `>`

```javascript
console.log(10 > 5);  // true
console.log(5 > 10);  // false
```

### Menor que `<`

```javascript
console.log(10 < 5);  // false
console.log(5 < 10);  // true
```

### Maior ou igual a `>=`

```javascript
console.log(10 >= 10); // true
console.log(10 >= 5);  // true
```

### Menor ou igual a `<=`

```javascript
console.log(5 <= 5);   // true
console.log(10 <= 5);  // false
```

## Tabela Resumo

| Operador | Descrição                                       | Exemplo             | Resultado |
|:--------:|---------------------------------------------------|---------------------|:---------:|
| `==`     | Igual (com coerção de tipo)                       | `'1' == 1`          | `true`    |
| `===`    | Estritamente igual (sem coerção de tipo)          | `'1' === 1`         | `false`   |
| `!=`     | Diferente (com coerção de tipo)                   | `'1' != 1`          | `false`   |
| `!==`    | Estritamente diferente (sem coerção de tipo)      | `'1' !== 1`         | `true`    |
| `>`      | Maior que                                         | `10 > 5`            | `true`    |
| `<`      | Menor que                                         | `10 < 5`            | `false`   |
| `>=`     | Maior ou igual a                                  | `10 >= 10`          | `true`    |
| `<=`     | Menor ou igual a                                  | `10 <= 5`           | `false`   |

## Operador Ternário

O operador condicional (ou ternário) é o único operador JavaScript que utiliza três operandos. Ele é frequentemente usado como um atalho para a instrução `if`.

**Sintaxe:** `condição ? expressãoSeVerdadeiro : expressãoSeFalso`

```javascript
const idade = 20;
const status = (idade >= 18) ? 'Adulto' : 'Menor de idade';

console.log(status); // 'Adulto'
```
