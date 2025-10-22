# O Objeto Date em JavaScript

O objeto `Date` em JavaScript é usado para trabalhar com datas e horas. Ele permite criar, formatar, e manipular informações temporais.

## Criando um Objeto Date

Existem várias maneiras de instanciar um objeto `Date`:

1.  **Sem argumentos:** Cria um objeto com a data e hora atuais.
    ```javascript
    const agora = new Date();
    console.log(agora); // Exibe a data e hora atuais
    ```

2.  **Com uma string de data:**
    ```javascript
    const dataEspecifica = new Date('2025-10-10T12:00:00');
    console.log(dataEspecifica);
    ```

3.  **Com números (ano, mês, dia, horas, minutos, segundos, ms):**
    *Atenção: O mês é baseado em um índice de 0 (Janeiro) a 11 (Dezembro).*
    ```javascript
    // 10 de Outubro de 2025, 12:30:00
    const outraData = new Date(2025, 9, 10, 12, 30, 0);
    console.log(outraData);
    ```

4.  **Com milissegundos:** Desde o "Unix Epoch" (1 de Janeiro de 1970).
    ```javascript
    const dataPorMs = new Date(1728547200000); // Equivalente a 10/10/2025
    console.log(dataPorMs);
    ```

## Métodos Comuns para Obter Informações

-   `getFullYear()`: Retorna o ano com 4 dígitos.
-   `getMonth()`: Retorna o mês (0-11).
-   `getDate()`: Retorna o dia do mês (1-31).
-   `getDay()`: Retorna o dia da semana (0 para Domingo, 1 para Segunda, ...).
-   `getHours()`: Retorna a hora (0-23).
-   `getMinutes()`: Retorna os minutos (0-59).
-   `getSeconds()`: Retorna os segundos (0-59).
-   `getMilliseconds()`: Retorna os milissegundos (0-999).
-   `getTime()`: Retorna o número de milissegundos desde 1 de Janeiro de 1970.
-   `Date.now()`: Método estático que retorna o mesmo que `getTime()` para a data atual, mas sem precisar instanciar um objeto.

## Exemplo Prático: Formatando uma Data

```javascript
function formataData(data) {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Adiciona +1 ao mês
  const ano = data.getFullYear();
  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');

  return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}

const hoje = new Date();
const dataFormatada = formataData(hoje);
console.log(dataFormatada); // Ex: 10/10/2025 09:30
```
