const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},   
  ]; //declara um array chamado "usuarios" que tem a lista de objetos que representa nomes, idade e sobrenome
        //metodo map
  const output = users.map((x)=> x.firstName+" "+x.lastName); //uso do metod map que intera o item original representado por x na função ele extrai as propriedades o resultado é um novo array qu tem string nos nomes completos
  console.log(output);//imprime o output que contem o nome dos usuarios
  