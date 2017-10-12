#README
##VALIDACION DE TARJETA DE CREDITO

AUTORES: Las Padawans 2017 II - PM
1. OBJETIVO

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

###Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío

2. Pseudocódigo

-Inicio
  -Ingresa el número de la tarjeta de crédito
  -Verificamos si el input está vacío
  -Si el input está vacío volvemos a pedir al usuario que ingrese su número hasta que lo haga.
  -Invertimos los numeros del input y los almacenamos en un array
  -Se busca la posicion impar
  -Si no lo es, almacenamos los elementos en un newArray
  -Si lo es, multiplicamos los números contando desde 0
  -Si verifica si el elemento es mayor o igual a 10
  -si no lo es, se almacena en el newArray
  -Si lo es, se suman los digitos de cada elemento y se almacena en el newArray
  -Se suman los elementos de este newArray
  -Si la sumatoria es divisible entre 10, el número de tarjeta es válido
  -Si la sumatoria no es divisible entre 10, el número de tarjeta es inválido
-Fin

3. [recursos](assets/docs/recursos.JPG)
