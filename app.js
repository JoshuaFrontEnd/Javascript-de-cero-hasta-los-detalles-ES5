/* -------------------------------------------------------------------------
  Sección 2: Variables, Objetos, Typeof y Condicionales
------------------------------------------------------------------------- */

/*-- Pasando variables por valor y por referencia --*/

/*-- Bibliografia de apoyo
  -
--*/

// Cuando se trata de variables con tipos primitivos siempre se pasan por valor

var a = 10
var b = a

console.log("a: ", a)
console.log("b: ", b)

a = 20

console.log("a: ", a)
console.log("b: ", b)

// Cuando se trata de objetos siempre el valor se pasa por referencia

var c = {
  nombre: 'Juanin'
}

var d = c

console.log("c: ", c)
console.log("d: ", c)

c.nombre = 'Tulio'

console.log("c: ", c)
console.log("d: ", c)

const aa = [1, 2, 3]
const bb = aa

console.log(aa)
console.log(bb)

aa.push(4)

console.log(aa)
console.log(bb)

/*

  Apuntes

  Cuando asignamos valores primitivos (Boolean, Null, Undefined, Number, String y Symbol), el valor asignado es una copia del valor que estamos asignando. Pero cuando asignamos valores NO primitivos o complejos (Object, Array y Function), JavaScript copia “la referencia”, lo que implica que no se copia el valor en sí, si no una referencia a través de la cual accedemos al valor original.

  Bibliografia de apoyo

  - https://medium.com/laboratoria-developers/por-valor-vs-por-referencia-en-javascript-de3daf53a8b9

*/