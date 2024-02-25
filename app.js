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

// // - Funcion declarativa:
// function sumar( a, b) {
//   return a + b
// }

// // - Expresion de funcion:
// var sumar = function ( a, b ) {
//   return a + b
// }

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
// function imprimir( fn ){

//   fn()

// }

// const funcionExpresiva = function() {
//   console.log( "Funcion expresiva" );
// }

// imprimir( funcionExpresiva )

/*-- ----------------------------------------------------- --*/
/*--               El Return en las Funciones              --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript existe una palabra reservada para retornar un valor desde una función llamada "return", las funciones pueden retornar cualquier tipo de valor

// - Obtener un numero aleatorio entre cero y uno y sumarle 10
// function obtenerAleatorio(){
//   return Math.random()
// }

// console.log( obtenerAleatorio() + 10 );

// - Obtener un nombre y concatenar un apellido
// function obtenerNombre(){
//   return "Tulio"
// }

// console.log( obtenerNombre() + " Triviño" );

// - Obtener un booleano
// function esMayor05(){

//   if ( obtenerAleatorio() > 0.5 ){
//     return true
//   } else {
//     return false
//   }

// }

// if ( esMayor05() ) {
//   console.log("Es mayor a 0.5")
// } else {
//   console.log("Es menor a 0.5")
// }

// - Obtener un objeto
// function crearPersona( nombre, apellido ){
//   return {
//     nombre: nombre,
//     apellido: apellido
//   }
// }

// var persona = crearPersona("Tulio", "Triviño")
// console.log( persona );

// - Obtener una funcion, para obtener una funcion desde una funcion, declarada en el return se puede hacer de dos formas:
// function creaFuncion(){

//   return function( nombre ){
//     console.log("Me creo: " + nombre )

//     return function(){
//       console.log( "Si, podemos ser infinitamente anidadas" );
//     }

//   }

// }

// - Primera forma:

// - Recibir el return de la primera funcion "creaFuncion" y asignarle ese valor a una variable
// var primeraFnAnidada = creaFuncion()

// Como se asigno una funcion a una variable, para poder ejecutar esa funcion habria que tratar la varibable como si fuese una funcion
// var segundaFnAnidada = primeraFnAnidada( persona.nombre )

// segundaFnAnidada()

// - Segunda forma:

// - Cuando declaramos los parentesis () al nombre de la funcion, esto quiere decir que estamos ejecutando la funcion, entonces si tenemos dos funciones anidadas bastaria con declarar tantos parentesis como tanta funciones hayan anidadas:

// creaFuncion()( persona.nombre )()

/*-- ----------------------------------------------------- --*/
/*--               Funciones de primera clase              --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript todos los datos no primitivos son objetos, por ejemplo si creamos una funcion y a esa funcion fuera de su "scope" le asignamos una propiedad llamada "nombre" con valor "maria", javascript añadira esa propiedad a la funcion como si fuese un objeto, por lo tanto se dice que por tener este comportamiento las funciones son de primera clase
// function a(){
//   var n = a.nombre
//   console.log("Funcion: ", n);
// }

// a.nombre = "Bodoque"

// De igual manera podemos asignar propiedades con objetos
// a.direccion = {
//   pais: "Chile",
//   ciudad: "Titirilquen",
//   edificio: {
//     piso: "8vo",
//     nombre: "Edificio principal"
//   }
// }

// a()

/*-- ----------------------------------------------------- --*/
/*--                 Metodos y el objeto THIS              --*/
/*-- ----------------------------------------------------- --*/

// En Javascript los objetos tienen propiedades y metodos, las propiedades son valores y los metodos son funciones dentro del objeto

// var persona = {
//   nombre: "Juan Carlos",
//   apellido: "Bodoque",
//   imprimirNombre: function(){
//     // - Esto dara error, por que javascript buscara una variable llamada "nombre", y lo unico que hay declarado es una propiedad
//     console.log( nombre );
//   }
// }

// var persona = {
//   nombre: "Juan Carlos",
//   apellido: "Bodoque",
//   imprimirNombre: function(){
//     // - Para obtener el valor de la propiedad "nombre" usamos la palabra reservada "THIS" que hace referencia al "scope" del objeto persona
//     console.log( this.nombre );
//   }
// }

// - This hace referencia al "scope" donde se encuentra, para poder obtener los valores de las propiedades de ese "scope"

// var persona = {
//   nombre: "Juan Carlos",
//   apellido: "Bodoque",
//   imprimirNombre: function(){
//     // - Aca "THIS" hace referencia al "scope" del objeto "persona"
//     console.log( this.nombre + " " + this.apellido );
//   },
//   direccion: {
//     pais: "Costa Rica",
//     obtenerPais: function(){
//       // - Aca "THIS" hace referencia al "scope" del objeto "direccion"
//       console.log( "El pais es: " + this.pais);

//       var nuevaDireccion = function(){
//         // - Aca sorprendentemente "THIS" hace referencia al "scope" global, es decir "window", esto sucede porque el valor de "THIS" está definido por como se llama a la función. Si la función se llama  de manera habitual, el valor de "THIS" es "window"; si la función se llama como método como constructor, entonces "THIS" es igual al objeto.
//         console.log( this )
//       }

//       nuevaDireccion()

//     }
//   }
// }

// - Lo mas recomendable al usar "THIS" es ir consultando con un "console.log" su valor, de esta manera podemos usar el valor de "THIS" del "scope" "direccion" dentro de la función "nuevaDireccion", asignando el valor del "THIS" que necesitamos a una variable

// var persona = {

//   direccion: {
//     pais: "Costa Rica",
//     obtenerPais: function(){

//       // Obtengo el valor de "THIS" del "scope" "direccion" y lo asigno a una variable con nombre "self"
//       var self = this;

//       var nuevaDireccion = function(){

//         // Acá como estoy usando una funcion sin su constructor el valor de "THIS" es el objeto "window", pero puedo usar el valor de la variable "self" para usar el "THIS" del "scope" de "direccion"

//         console.log( self )
//         console.log( "El pais es: " + self.pais);
//       }

//       nuevaDireccion()

//     }
//   }
// }

// persona.direccion.obtenerPais()

/*-- ----------------------------------------------------- --*/
/*--                 Palabra reservada NEW                 --*/
/*-- ----------------------------------------------------- --*/

// - El origen de la palabra reservada "NEW" tiene su origen en que cuando se creo Javascript el creador queria que otros desarrolladores que no conocian tanto este nuevo lenguaje se sintieran familiarizados con la sintaxis de otros lenguajes que si conocian como Java, para que pudieran probarlo y darle una oportunidad

// - En javascript podemos declarar un objeto vacio de la siguiente forma:

// var Tulio = {}

// - Pero tambien podemos hacerlo con la palabra reservada "NEW", al hacerlo de esta manera creamos un objeto/funcion de nombre "Tulio", del tipo "Persona", esto basicamente viene a ser una "funcion constructora", es decir, una funcion que crea objetos

// function Persona(){}

// var Tulio = new Persona()

// console.log( Tulio )

// - Por otro lado al usar "NEW" estamos creando un nuevo "scope" por lo cual podemos usar "THIS" con el valor del "scope" creado:

// function Persona( nombre, apellido ){

//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = 30;

//   this.imprimirPersona = function(){
//     return this.nombre + " " + this.apellido + "(" + this.edad + ")"
//   }

// }

// var Tulio = new Persona( "Tulio", "Triviño" )

// console.log( Tulio )

/*

  Apuntes

  - Comentario hecho por Orlando en: https://www.udemy.com/course/javascript-de-cero-hasta-los-detalles/learn/lecture/4504258#questions/5934670

  ¿Por que las funciones en JavaScript, aparte de poder definir un bloque reusable de codigo, permiten crear objetos?

  En ocasiones necesitaremos encapsular información y comportamiento en entidades individuales llamadas objetos. De esta manera podemos manipular de una mejor manera la logica de nuestros programas.  Asi entonces un objeto consta de una unidad que posee un estado(propiedades) y un comportamiento(métodos); es una colección de propiedades y funcionalidades.

  Ahora en el caso de usar this, tienes que tener en cuenta una cosa.

  Las funciones en javascript se comportan de dos maneras: como funciones simples o constructores.

  Una funcion simple es como ya la conoces :

  function saluda() {
    console.log("hola");
  }
  Una funcion como constructor se usa cuando queramos crear objetos. Como comente antes, un objeto es una colección de propiedades y funcionalidades— conocidos tambien como métodos.

  Una propiedad, como su nombre lo indica, es una caracteristica de un objeto. Un método es una funcion o proceso asociado a un objeto(funcion).

  Ahora, para que un objeto pueda ser creado necesitamos una clase. Una clase se puede pensar como una plantilla que permite crear objetos similares(con propiedades y métodos iguales )pero con información distinta.

  Por ejemplo esta plantilla:

  plantilla persona :
  ----- edad
  -----peso
  -----nombre
  Una vez tienes tu plantilla entonces puedes crear el objeto. En pocas palabras, un objeto se crea a partir de una clase, quien es la que define las propiedades y métodos que el objeto debe tener.

  Entonces podemos crear nuestro objeto:

  crear objeto Carlos de la plantilla Persona con edad : 17, peso : 42, nombre : "carlos".

  Como veras he llenado las propiedades al crear un objeto, asi puedo hacer mas.

  crear objeto José de la plantilla Persona con edad : 19, peso : 42, nombre : "jose".

  crear objeto Pedro de la plantilla Persona con edad : 15, peso : 45, nombre : "pedro".

  Si te das cuenta la clase sirve como impresora de objetos

  Debido a lo anterior se dice que un objeto es una instancia de una clase porque a partir de ella(clase) se crean objetos individuales.

  Usando y creando objetos.

  En javascript usamos new para decirle que no queremos una funcion normal, sino que queremos un objeto. Una vez le decimos eso, javascript nos permite usar la palabra reservada this.

  usando la funcion como constructor:

  function Persona (nombre, edad, peso) {
      this.nombre = nombre;
      this.edad = edad;
      this.peso = peso;
  }
  objetos - instancias

  var carlos = new Persona("carlos", 17, 42);
  var jose =  new Persona("jose", 19, 42);
  var pedro =  new Persona("pedro", 15, 45);

  Una vez usado new js le "hace caso" a tus this y lo crea como propiedades del objeto que se esta creando, si no lo usas no les hará caso(1).

  En conclusión, hay más teoría para this, sin embargo, es justo lo que necesites entender esta cuestion de los objetos. SI hay un error, que me digan. Espero que te haya servido.

  * Si no usas new pero usas this, automáticamente las propiedades se aplicaran window

  - Comentario hecho por Orlando en: https://www.udemy.com/course/javascript-de-cero-hasta-los-detalles/learn/lecture/4504258#questions/3918398

  1.- ¿En Javascript cómo identificamos un método?

  Un método es una función definida dentro de una clase o un algoritmo asociado a un objeto.Es básicamente una "acción" que un objeto puede llevar a acabo.

  En javascript identificas un método dentro de un constructor o un objeto literal.Ejemplo:

  Un constructor:

  function Persona(Nombre, Apellido, Edad){
      this.nombre=Nombre;
      this.apellido=Apellido;
      this.edad=Edad;
      //esto es un método
      this.obtenerPersona = function(){
          return this.nombre + " " + this.apellido + " " + this.Edad;
      }
  }
  Un objeto literal.

  var persona =  {
      comer : function(){
          console.log("hola estoy comiendo");
      }
  }
  persona.comer();

  Diferencias:

  La diferencia entre un método y las funciones es que, como había comentado antes un método es una función asociado o "ligado" a un objeto y mientras una función es un simple bloque de código independiente que puede ser llamado en un programa.

  2.-Otra cosa mas, no puedo pasar por parámetro números.Al querer pasar la edad por parametro me sale undefined.

  R.Si puedes pasar cualquier tipo de datos que requieras.Tu problema, es que comiste un error de tipeo es decir:

  function Persona(Nombre, Apellido, Edad){
      this.nombre=Nombre;
      this.apellido=Apellido;
      this.edad=Edad;
      //esto es un método
      this.obtenerPersona = function(){
          return this.nombre + " " + this.apellido + " " + this.Edad;
      }
  }

  en tu método imprimiste "this.Edad" mientras que tú propiedad es "edad" seria algo como this.edad.

  function Persona(Nombre, Apellido, Edad){
      this.nombre=Nombre;
      this.apellido=Apellido;
      this.edad=Edad;
      //esto es un método
      this.obtenerPersona = function(){
          return this.nombre + " " + this.apellido + " " + this.edad;
      }
  }

  PD: Quiero ampliar un poco el tema de las funciones vs metodos.

  Primero imagina que yo empiezo con un programa simple, personas:

  var contactos = [{nombre : "maria", telefono : 99989898},{nombre : "pedro", telefono : 9989787},{nombre : "jose", telefono : 99989898},{nombre : "maria", telefono : 99989898}];

  //creo mis funciones
  function obtenerNumero(obj){
    console.log("el numero de "+ obj.nombre + " es "+ obj.telefono);
  }

  function llamar(obj){
    console.log(obj.nombre + "llamando desde el numero " + obj.telefono);
  }

  //llamo la funcion y le paso el objeto
  obtenerNumero(contactos[0]); // "el numero de maria es 99989898"
  obtenerNumero(contactos[1]); // "el numero de pedro es 9989787"

  llamar(contactos[0]); //"maria llamado desde el numero 99989898";

  Todo OK. sin embargo podemos hacer mas legible y organizado el código si tomamos un enfoque Orientado a objetos.(Ojo que estamos usando objetos de manera literal) podríamos incluso haber asignado los métodos a cada uno de los objetos directamente pero podría llegar a ser algo ilegible.

  contactos[0].llamar(); //"maria llamado desde el numero 99989898";
  Ahora nosotros podriamos crear plantillas o "moldes" para los contactos.Es decir podemos crear entidades en base a un molde.

  function Contacto(nombre, telefono){
      this.nombre = nombre;
      this.telefono = telefono;

      //llamar ahora es un metodo
      this.llamar = function(){
          console.log(this.nombre + "esta llamado desde " + this.numero);
      }
  }

  Ahora llamar() es un método por que está asociado a nuestra clase persona.Listo, ahora podemos crear varios objetos a creandolos gracias a nuestra clase/constructor.

  var jose = new Contacto("jose", 9797878);
  var maria= new Contacto("Maria", 34343343);
  var pedro= new Contacto("Pedro", 33333);
  Ahora podemos hacer uso de nuestros métodos.

  pedro.llamar();// "pedro esta llamando desde 9797878"

  Y asi con los demás objetos.

*/

/*-- ----------------------------------------------------- --*/
/*--     El señor de los anillos: The Javascript Game      --*/
/*-- ----------------------------------------------------- --*/

// Creo una funcion constructora ( existe una convencion en javascript para nombrar con mayuscula la primera letra de la funcion, asi se sabe que sera un funcion constructora ), y defino las propiedades de los objetos a crear. pv = puntos de vida, sp = special points
// function Jugador( nombre ){

//   this.nombre = nombre;
//   this.pv = 100;
//   this.sp = 100;

//   // Creo el metodo de curar
//   this.curar = function( jugadorObjetivo ){

//     // Validacion para detectar que el jugador que usara el metodo tenga al menos la cantidad de special points que recibe el metodo
//     if ( this.sp >= 40 ){
//       // El jugador que use el metodo de curar perdera 40 special points
//       this.sp -= 40
//       // El jugador a curar se cura en 20 puntos
//       jugadorObjetivo.pv += 20
//     } else {
//       // Si no le queda sp que muestre el siguiente mensaje
//       console.info( this.nombre + " no tiene sp" );
//     }

//     this.estado ( jugadorObjetivo )

//   }

//   this.tirarFlecha = function( jugadorObjetivo ){

//     if ( jugadorObjetivo.pv > 40 ){
//       jugadorObjetivo.pv -= 40
//     } else {
//       jugadorObjetivo.pv = 0
//       console.error( jugadorObjetivo.nombre + " murio!")
//     }

//     this.estado ( jugadorObjetivo )
//   }

//   this.estado = function( jugadorObjetivo ){
//     console.info( this )
//     console.info( jugadorObjetivo )
//   }

// }

// // Creo los objetos de tipo Jugador
// var gandalf = new Jugador( "Gandalf" )
// var legolas = new Jugador( "Legolas" )

// console.log( gandalf )
// console.log( legolas )

// gandalf.curar( legolas )
// // Gandalf cura a legolas

/*-- ----------------------------------------------------- --*/
/*--                 Prototipos: prototypes                --*/
/*-- ----------------------------------------------------- --*/

// - Los prototipos en Javascript permiten expandir las propiedades y metodos de un objeto sin alterar la definicion del objeto original

// function Persona(){

//   this.nombre   = "Tulio"
//   this.apellido = "Triviño"
//   this.edad     = 30

// }

// - Agregando una propiedad primitiva al objeto de tipo "Persona" sin modificar su definicion inicial, como no se ha modificado su definicion, para ver esta propiedad agregada, hay que revisar en la consola el "prototype" de "Persona"
// Persona.prototype.pais = "Chile"

// - El potencial de los "prototypes" se basa en que si tenemos 1000 objetos (por decir un numero grande) y tenemos un solo metodo que se repite 1000 veces lo mejor seria cargarlo en un "prototype", de esta manera el metodo solo se cargaria una vez en memoria:
// Persona.prototype.imprimirInfo = function(){
//   console.log( this.nombre + " " + this.apellido + " (" + this.edad + ")" )
// }

// var titere = new Persona()

// console.log( titere )

// titere.imprimirInfo()

// - Otro ejemplo de la pontencia que tienen los "prototypes" es por ejemplo para aplicar un metodo a tipos de datos, en este caso creo un "prototype" que me permite detectar si los tipos de datos primitivos de tipo "Number" son positivos o negativos:

// Number.prototype.esPositivo = function(){

//   if ( this > 0) {
//     return true
//   } else {
//     return false
//   }

// }

// var pos = 5
// pos.esPositivo() // retorna true

// var neg = -5
// neg.esPositivo // retorna false

// - Basicamente Javascript esta construido sobre prototipos, y podemos verlos cada vez que necesitamos acceder a metodos nativos de cada tipo de datos, por ejemplo el metodo "tostring" de los objetos, o el metodo "push" de los arreglos, etc.

/*-- ----------------------------------------------------- --*/
/*--                 Funciones anonimas                    --*/
/*-- ----------------------------------------------------- --*/

// - Las funciones anonimas, tal como lo indica su nombre, son funciones que no tienen nombre, estas nos permiten encapsular el codigo para prevenir que sea accidentalmente manipulado o para evitar problemas de "scope"

// - Al declarar una variable de nombre, en este caso "scopeGlobal" se creara en el scope global, esto significa que esta variable podra ser modificada en cualquier parte del programa
// var scopeGlobal = 10 // console.log( scopeGlobal ) = 10

// - Debido a esto podemos cambiar de manera muy sencilla el valor de "scopeGlobal" al sobreescribir su valor, en este caso utilizando una funcion, pero se puede hacer de diferentes maneras:
// function cambiarScopeGlobal(){
//   scopeGlobal = 20   // console.log( scopeGlobal ) = 20
// }

// - Para evitar esto podemos usar funciones anonimas, la sintaxis es la siguiente:

// ( function(){
//   // En el "scope" de la funcion anonima "scopeGlobal" vale 10
//   var scopeGlobal = 10 // console.log( scopeGlobal ) = 10
// } )()

// Pero si intentamos modificar "scopeGlobal" desde el scope global, estaremos declarando una nueva variable llamada "scopeGlobal" con el nuevo valor asignado, es decir, en la funcion anonima "scopeGlobal" valdra 10 y en el ambito global "scopeGlobal" valdra 20
// scopeGlobal = 20

// - Otro ejemplo para las funciones anonimas es cuando necesitamos crear una funcion en tiempo de ejecucion:

// function ejecutarFuncion( fn ){

//   fn();

// }

// ejecutarFuncion( function(){
//   console.log("Funcion anonima ejecutada!!")
// } )

// - Añadiendo mas logica:

function ejecutarFuncion( fn ){

  if ( fn() === 1 ){
    return true
  } else {
    return false
  }

}

console.log(

  ejecutarFuncion( function(){
    console.log("Funcion anonima ejecutada!!")
    return 1
  } )

)

