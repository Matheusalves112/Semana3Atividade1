let students = [
    {name:"Smith", average:80},
    {name:"Jenny", average:69},
    {name:"John", average:35},
    {name:"Tiger", average:55}
   ]; //declarando a variavel lista estudantes com as propriedades nome e media do aluno
   const output = student.map((student)=>{ //usando map para cada objeto
       if(student.marks < 60){
           student.average += 20; //verificando a media do aluno usando o mao
       }
       return student;
   }).filter((student)=> student.average > 60); 
   console.log(output); //exibe o valor da variavel com as media dos alunos
   