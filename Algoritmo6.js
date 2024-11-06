const input = prompt(); //solicita o usuario um valor de entrada para solicitar e valor na variavel
const value = parserInt(input); //converte o valor de input para um numero inteiro para definir o valor da array
const array = new Array(input).fill(null);// criando um array de comprimento baseada na entrada do usuario
let values = new Array(input)
  .fill(null)
  .map((currentValue, index) => index + 1)
  // criando um array com numeros sequenciais seguindo com aplicação do map para substituir
