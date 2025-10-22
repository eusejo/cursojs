# Estruturas Condicionais em JavaScript

Estruturas condicionais permitem que seu programa execute diferentes ações com base em diferentes condições. Elas são a base para a lógica e a tomada de decisão em programação.

## A Estrutura `if`

A instrução `if` executa um bloco de código se uma condição especificada for avaliada como `true` (ou *truthy*).

**Sintaxe:**
```javascript
if (condição) {
  // Bloco de código a ser executado se a condição for verdadeira
}
```

**Exemplo:**
```javascript
const idade = 18;

if (idade >= 18) {
  console.log('Você é maior de idade.');
}
```

## A Estrutura `else`

A instrução `else` é usada para executar um bloco de código se a condição do `if` for `false` (ou *falsy*).

**Sintaxe:**
```javascript
if (condição) {
  // Bloco de código se a condição for verdadeira
} else {
  // Bloco de código se a condição for falsa
}
```

**Exemplo:**
```javascript
const temperatura = 15;

if (temperatura > 25) {
  console.log('Está um dia quente!');
} else {
  console.log('Não está quente hoje.');
}
```

## A Estrutura `else if`

Para testar múltiplas condições em sequência, você pode usar a instrução `else if`.

**Sintaxe:**
```javascript
if (condição1) {
  // Bloco de código se a condição1 for verdadeira
} else if (condição2) {
  // Bloco de código se a condição2 for verdadeira
} else {
  // Bloco de código se todas as condições anteriores forem falsas
}
```

**Exemplo:**
```javascript
const hora = 14;

if (hora < 12) {
  console.log('Bom dia!');
} else if (hora < 18) {
  console.log('Boa tarde!');
} else {
  console.log('Boa noite!');
}
```

## A Estrutura `switch`

A instrução `switch` é uma alternativa para uma longa cadeia de `if...else if`. Ela avalia uma expressão e executa o bloco de código correspondente ao `case` que corresponde ao valor da expressão.

**Pontos importantes:**
- Use `break` para sair do `switch` após um `case` ser executado. Se você não usar `break`, a execução continuará para o próximo `case` (comportamento conhecido como "fall-through").
- O `default` é opcional e é executado se nenhum `case` corresponder ao valor da expressão.

**Sintaxe:**
```javascript
switch (expressão) {
  case valor1:
    // Bloco de código para valor1
    break;
  case valor2:
    // Bloco de código para valor2
    break;
  default:
    // Bloco de código se nenhum case corresponder
}
```

**Exemplo:**
```javascript
const diaDaSemana = new Date().getDay(); // Retorna um número de 0 (Domingo) a 6 (Sábado)
let nomeDoDia;

switch (diaDaSemana) {
  case 0:
    nomeDoDia = 'Domingo';
    break;
  case 1:
    nomeDoDia = 'Segunda-feira';
    break;
  case 2:
    nomeDoDia = 'Terça-feira';
    break;
  case 3:
    nomeDoDia = 'Quarta-feira';
    break;
  case 4:
    nomeDoDia = 'Quinta-feira';
    break;
  case 5:
    nomeDoDia = 'Sexta-feira';
    break;
  case 6:
    nomeDoDia = 'Sábado';
    break;
  default:
    nomeDoDia = 'Dia inválido';
}

console.log(`Hoje é ${nomeDoDia}.`);
```

## Operador Ternário `? :`

O operador ternário é uma forma concisa de escrever uma instrução `if...else` simples.

**Sintaxe:** `condição ? valorSeTrue : valorSeFalse`

**Exemplo:**
```javascript
const pontuacao = 100;
const nivel = (pontuacao >= 100) ? 'Expert' : 'Iniciante';

console.log(nivel); // 'Expert'
```
