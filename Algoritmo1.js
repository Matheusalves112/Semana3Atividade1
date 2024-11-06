const numeros = [1,2,3,4,5];
//Define uma constante chamada 'numeros' e a inicializa com um array contendo os valores 1, 2, 3, 4 e 5.
//Esse array representa uma lista de números inteiros para os quais queremos calcular o dobro.

function calcularDobro(numero) //uma função que calcula o dobro do numero
{
  return numero*2;  // retorna o valor numero vezes 2
}
const numerosDobro = numeros.map(calcularDobro);
console.log(numerosDobro);
//Define uma constante chamada 'numeros' e a inicializa com um array contendo os valores 1, 2, 3, 4 e 5.
//Esse array representa uma lista de números inteiros para os quais queremos calcular o dobro.
