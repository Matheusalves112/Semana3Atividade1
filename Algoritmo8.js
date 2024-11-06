const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},  
  ]; //declara o objeto usuario com as prioridades nome, sobrenome e idade
  const output=users.filter((x)=>x.age<30).map((x)=>x.firstName);// primeiro aplica o metodo filter que usa uma combinação pra criar um novo array e depois aplica o map
  console.log(output); //exibindo o console o output que é a array que resulta os primeiros nomes dos usuarios
  