/* -------------------------------------------------------------------------
  Sección 2: Variables, Objetos, Typeof y Condicionales
------------------------------------------------------------------------- */

/*-- -------------------------------------------- --*/
/*-- Pasando variables por valor y por referencia --*/
/*-- -------------------------------------------- --*/

// - Cuando se trata de variables con tipos primitivos siempre se pasan por valor

// var a = 10
// var b = a

// console.log("a: ", a)
// console.log("b: ", b)

// a = 20

// console.log("a: ", a)
// console.log("b: ", b)

// - Cuando se trata de objetos siempre el valor se pasa por referencia

// var c = {
//   nombre: 'Juanin'
// }

// var d = c

// console.log("c: ", c)
// console.log("d: ", c)

// c.nombre = 'Tulio'

// console.log("c: ", c)
// console.log("d: ", c)

// const aa = [1, 2, 3]
// const bb = aa

// console.log(aa)
// console.log(bb)

// aa.push(4)

// console.log(aa)
// console.log(bb)

/*

  Apuntes

  Cuando asignamos valores primitivos (Boolean, Null, Undefined, Number, String y Symbol), el valor asignado es una copia del valor que estamos asignando. Pero cuando asignamos valores NO primitivos o complejos (Object, Array y Function), JavaScript copia “la referencia”, lo que implica que no se copia el valor en sí, si no una referencia a través de la cual accedemos al valor original.

  Bibliografia de apoyo

  - https://medium.com/laboratoria-developers/por-valor-vs-por-referencia-en-javascript-de3daf53a8b9

*/

/*-- -------------------------------------------- --*/
/*--        Notacion de puntos y corchetes        --*/
/*-- -------------------------------------------- --*/

// var persona = {
//   nombre: "Tulio",
//   apellido: "Triviño",
//   edad: 25,
//   direccion: {
//     pais: "Chile",
//     ciudad: "Santiago",
//     edificio: {
//       nombre: "Edificio principal",
//       telefono: "2222-3333"
//     }
//   }
// }

// PUNTOS

// - Para acceder al valor de las propiedades de un objeto utilizamos la notacion de "puntos"
// console.log( persona.direccion )
// console.log( persona.direccion.pais )

// - Para agregar una nueva propiedad al objeto "persona" sin tener que editar de manera directa y literal se hace con la notacion de punto, seguido del nombre de la propiedad a agregar y asigando el valor

// persona.direccion.zipcode = 11101
// console.log( persona.direccion )

// - ¿Que pasa si queremos obtener el telefono del edificio, de la direccion, de la persona?
// La manera literal de hacerlo seria:

// console.log( persona.direccion.edificio.telefono )

// - Pero esta forma es muy larga de escribir si se necesita trabajar con datos en un objeto de nivel muy profundo, lo mejor seria aprovechar el hecho de que los objetos pueden ser pasados por referencia al asignarlos a variables nuevas, y desde ahi "hacer un atajo" para acceder a los valores que necesitamos

// - Asigno el objeto "edificio", que se encuentra en el objeto "direccion" del objeto "persona" a una variable llamada "edificio"
// var nuevoEdificio = persona.direccion.edificio

// - Y desde ahi, como el valor del objeto "edificio" ha sido pasado por referencia puedo acceder directamente a sus propiedades desde la variable "nuevoEdificio"
// console.log( nuevoEdificio.telefono )

// - De la misma forma puedo crear propiedades nuevas al objeto "edificio" desde la variable "nuevoEdificio", sin tener que recorrer todo el objeto persona con la notacion de puntos
// nuevoEdificio.numeroPiso = "8vo Piso"

// console.log( persona );

// CORCHETES

// - Otra forma en la que podemos acceder a los valores de las propiedades de un objeto es con la notacion de "corchetes"

// console.log( persona["direccion"]["edificio"])

// - Una forma en que nos beneficia la notacion de corchetes es que podemos asignar las propiedades de un objeto a una variable y trabajar con esa variable, de esa manera si cambiar el nombre de la propiedad, solo la cambiamos en la variable y no en todo el codigo

// - Asigno el valor de la propiedad "edad" del objeto "persona" a una variable llamada "campo"
// var campo = "edad"

// - Puedo acceder al valor de la propiedad "edad" llamando con la notacion de corchetes su asignacion en la variable campo, si por alguna razon la propiedad "campo" debe cambiar su nombre solo se cambiaria en la asignacion de variable y en el objeto, y no en todo el codigo
// console.log( persona[campo] )


/*-- -------------------------------------------- --*/
/*--                   Funciones                  --*/
/*-- -------------------------------------------- --*/

// - Estructura de una funcion en Javascript
// function nombreDeLaFuncion( parametros ){
//   // Ambito de funcion
// }

// function primeraFuncion() {
//   var a = 20
//   console.log( a );
// }

// - Para ejecutar una funcion debe llamarse de esta manera:
// primeraFuncion()

// - En Javascript todo retorna un valor, en este caso la funcion "vacia" retornara "undefined"
// function primeraFuncion() {
// }

// primeraFuncion()

// - Si la funcion es llamada sin los parentesis retornara la definicion de la funcion, osea el codigo literal:
// primeraFuncion

/*-- ----------------------------------------------------- --*/
/*--      Argumentos o parametros de las Funciones         --*/
/*-- ----------------------------------------------------- --*/

// - En javascript los parametros en una funcion se definen en los parentesis y se envia su valor al momento de llamar a la funcion:

// function imprimir( nombre, apellido ){
//   console.log( nombre + " " + apellido);
// }

// imprimir( "Tulio", "Triviño" )

// - Si al llamar una funcion se omiten parametros, al intentar mostrar ese parametro dara "undefined"

// function imprimir( nombre, apellido ){
//   console.log( nombre + " " + apellido);
// }

// imprimir( "Tulio" )

// - Para evitar esto, podemos hacer una variable dinamica, que dependiendo de si el parametro es "undefined" le aplique un valor por defecto:
// function imprimir( nombre, apellido ){

//   apellido = apellido || "valorPorDefecto"

//   console.log( nombre + " " + apellido)

// }

// imprimir( "Tulio" )

// - Ademas de datos primitivos las Funciones pueden recibir en sus parametros un objeto

// function imprimir( persona ){

//   console.log( persona.nombre + " " + persona.apellido )

// }

// var persona = {
//   nombre: "Tulio",
//   apellido: "Triviño"
// }

// imprimir( persona )

// - COSAS EXTRAÑAS DE JAVASCRIPT: como los objetos siempre se pasan por referencia, si en la funcion "imprimir" modificamos la propiedad "nombre" del objeto "Persona", al llamar la funcion "imprimir" por segunda vez se mostrara el objeto "Persona" modificado
// function imprimir( persona ){

//   console.log( persona )

//   console.log( persona.nombre + " " + persona.apellido )

//   persona.nombre = "Patana"

//   console.log( persona  );

// }

// var persona = {
//   nombre: "Tulio",
//   apellido: "Triviño"
// }

// console.table( "Primera impresion:" )
// imprimir( persona )

// console.log( "Segunda impresion:" )
// imprimir( persona )

// - Enviar una funcion anónima por parametro

// function imprimir( fn ){

//   fn()

// }

// imprimir( function (){
//   console.log( "Funcion anónima" );
// } )

// - Enviar una funcion expresiva
function imprimir( fn ){

  fn()

}

const funcionExpresiva = function() {
  console.log( "Funcion expresiva" );
}

imprimir( funcionExpresiva )