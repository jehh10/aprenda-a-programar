const multiplicando = [9];
const multiplicador = [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i < multiplicando.length ; i+=1){
         console.log('Tabuada do ',multiplicando[i])
    for (let contador = 0; contador < multiplicador.length; contador++){
      resultado = (multiplicando[i]*multiplicador[contador])
     console.log(multiplicando[i] , 'X' , multiplicador[contador] , '=', resultado ) 
    }
}