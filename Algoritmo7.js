let estudantes =[
    {nome:"João", idade:15},
    {nome:"Maria", idade:20},
    {nome:"Felipe", idade:22},
    {nome:"Pedro", idade:12},
    {nome:"Joana", idade:18},
   ]; //definiu a variavel estudantes e armazenou a lista incluindo idades e nome
   const details = estudantes.filter((x)=> x.idade >= 18); // declara uma constante chamada details aplicou o filter no array contendo os objetos cuja idade é maior ou igual a 18 estudantes considerados maiores de idade
   console.log(details.length);// exibe no console a quantidade de estudantes que maiores de idade
   