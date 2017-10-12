do{
  var input= prompt('Ingresa el número de tu tarjeta');
  isValidCard(input);
}while (input.length < 1);// no permite ingresar un vacio

// Funcion para validar la tarjeta de credito
function isValidCard(input){
 // Variable que contiene los numeros invertidos
 var array=[];
 // Contiene los numeros de posiciones impares y pares
 var newArr=[];
 //Inicializa la suma en 0
 var sum=0;
 //Se invierte los números del input y lo almacenamos en array
 for(var i=input.length-1;i>=0;i--){
   array.push(input[i]);

 }
 for(var j=0;j<array.length;j++){
   //multiplicamos los numeros en posiciones impares contando desde 0
   if(j%2===1){
     var multipli=array[j]*2;
     // Se evalua si el numero es mayor igual a 10
     if(multipli>=10){
       // Se obtiene el digito de la decena
       var div=Math.floor(multipli/10);
       // Se obtiene el digito de la unidad
       var resi=multipli%10;
       // Se suma los digitos del numero
       var newNum=div+resi;
       // se colocan en el newArray
       newArr.push(newNum);
     }
     else{
       //si no es mayor a 10, se coloca en el newarray
       newArr.push(multipli);
     }
   }
   //se coloca si no es una posicion par
   else{
     newArr.push(parseInt(array[j]));
   }
 }// la variable a analizar es newArr
 for(var k=0;k<newArr.length;k++){
   // se procede con la suma de todos los elementos en el newArray
   sum+=newArr[k];
 }
 // valida si la suma es divisible entre 10 para dar el mensaje de valido o no valido
 if(sum%10===0){
   return document.write ('tu número de tarjeta es válido');
 }
 else{
    return document.write('tu número de tarjeta es inválido');
 }

}
