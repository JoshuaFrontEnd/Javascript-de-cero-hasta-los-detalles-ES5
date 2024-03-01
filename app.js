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

// function ejecutarFuncion( fn ){

//   if ( fn() === 1 ){
//     return true
//   } else {
//     return false
//   }

// }

// console.log(

//   ejecutarFuncion( function(){
//     console.log("Funcion anonima ejecutada!!")
//     return 1
//   } )

// )

/*-- ----------------------------------------------------- --*/
/*--            Funciones typeof e instanceof              --*/
/*-- ----------------------------------------------------- --*/

// - Va a ver momentos donde necesitamos estar seguros del tipo de dato que estamos recibiendo antes de hacer una accion, para eso nos sirve "typeof"

// - Con la siguiente funcion, utilizando "typeof", podemos ver de que tipo es el dato que enviamos por parametro
// function identifica( param ){
//   console.log( typeof param )
// }

// identifica( 1 )    // Number
// identifica( "1" )  // String
// identifica( {} )   // Object

// function Persona(){}

// var Tulio = new Persona()

// // Pasando una funcion constructora
// identifica( Tulio ) // Object

// // Pasando una funcion anonima
// identifica( function(){} ) // Function

// - Usando "typeof" para detectar si el parametro enviado es una funcion y si lo es, ejecutarla

// function identifica( param ){

//   if ( typeof param === "function" ) {
//     param()
//   } else {
//     console.log( param )
//   }

// }

// identifica( function(){ console.log("soy una funcion anonima") } )

// - Cuando necesitamos saber el tipo de objeto que ha sido creado con una funcion constructora podemos usar "instanceof", esto retorna true o false dependiendo de si coincide

// function identifica( param ){

//   console.log( param instanceof Titere )

// }

// function Titere(){
//   this.nombre = "Tulio"
//   this.apellido = "Triviño"
// }

// var tulio = new Titere()

// identifica( tulio )

/* -------------------------------------------------------------------------
  Sección 3: Profundizando objetos
------------------------------------------------------------------------- */

/*-- ----------------------------------------------------- --*/
/*--                    Arreglos: metodos                  --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript los arreglos son una coleccion de objetos y su posicion es en base a cero, esto quiere decir que la primera posicion siempre sera 0

// var arr = [ 5, 4, 3, 2, 1]

// console.log( arr )
// console.log( arr[0] )

// - Javascript posee multiples metodos (protipos) para utilizar con los arreglos, entre ellos:

// - Reverse: invertir los datos del arreglo

// arr.reverse()
// console.log( arr )

// - Map: nos devuelve un nuevo arreglo despues de ejecutar una funcion por cada elemento del arreglo original

// newArr = arr.map( function( elem ){
//   elem *= elem
//   return elem
// })

// console.log( arr, newArr )

// - Podemos usar Map con distintos objetos que poseen diferente funcionalidades, en este caso usaremos Map con el objeto Math.sqrt el cual devuelve la raiz cuadrada positiva de un numero, Map aplicara esta funcion a cada elemento del arreglo, devolviendo la raiz cuadrada de cada elemento

// raizSqrt = newArr.map( Math.sqrt )
// console.log( raizSqrt )

// - Join: este metodo UNE todos los elementos del array, convirtiendo todo a una cadena de texto, separando los elementos por comas, aunque podemos especificar el caracter que usaremos para separar los elementos, declarandolo como parametro

// joined = raizSqrt.join("|")
// console.log( joined )

// - Split: Este metodo sirve para dividir una cadena de texto (string) en un array, y podemos especificar el caracter que separara los elementos de la cadena especificandolo como parametro, si no se especifica, la cadena se convertira en un solo elemento del arreglo

// divided = joined.split("|")
// console.log( divided )

// - Push: Con este metodo podemos añadir uno o mas elementos al final del arreglo

// divided.push("6")
// console.log( divided )

// - Unshift: añade uno o mas elementos al principio del arreglo

// divided.unshift("0")
// console.log( divided )

// - toString: devuelve una cadena que representa un objeto, a diferencia de "join" en "toString" no podemos especificar un separador
// console.log( divided.toString() )

// - Pop: elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array

// eliminarUltimo = divided.pop()
// console.log("Nuevo arreglo sin el ultimo elemento: ", divided )
// console.log("Elemento eliminado: " + eliminarUltimo )

// - Splice: cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos, para usar este metodo deberemos usar ciertos parametros:

// divided.splice( start, deleteCount, item1, item2,...)

// - start: parametro obligatorio numerico, este parametro define donde se comenzara a cambiar el array, si solo se especifica ese parametro y nada mas, se conservara el valor de la posicion asignada mas los valores anteriores y se eliminara todo lo demas
// divided.splice( 2 )
// console.log( "Se han eliminado todos los elementos desde la posicion 2", divided )

// - deleleCount: parametro opcional numerico, este parametro trabaja en conjunto con el parametro anterior "start", al definirlo se especificara cuantos elementos se eliminaran desde la posicion definida en "start"

// divided.splice( 1, 1 )
// console.log( "Desde la posicion 1 elimina 1 elemento ", divided )

// var arrEjemplo = ["0","1","2","3","4","5"]

// arrEjemplo.splice( 2, 3 )
// console.log( "Desde la posicion 2 elimina 3 elementos", arrEjemplo )

// - item1, item2, ...: Parametro opcional para agregar elementos, a partir del tercer parametro "splice" nos permite agregar elementos al array, utilizando start, deleteCount y el elemento a agregar podemos eliminar y agregar al mismo tiempo elementos a un arreglo:

// arrEjemplo.splice( 1, 1, "10", "20", "30")
// console.log( "Desde la posicion 1, elimina 1 elemento y reemplaza por: '10', '20', '30'", arrEjemplo )

// Si no deseamos reemplazar/eliminar y solo agregar, podemos declarar con valor 0 el parametro "deleteCount"
// arrEjemplo.splice( 1, 0, "10", "20", "30")
// console.log( "Desde la posicion 1, agrega: '10', '20', '30'", arrEjemplo )

// Slice: Este metodo hace una copia de una parte del array especificado, desde el parametro inicio, hasta el parametro fin, pero no incluye el parametro final

// arrSlice = arrEjemplo.slice( 0, 3)
// console.log( "Array original: ", arrEjemplo )
// console.log( "Copia con parte del array original, extraida desde la posicion 0 hasta la posicion 2", arrSlice );

// - Length: con este metodo podemos obtener la longitud del array

// console.log( arrEjemplo.length ) // 6

/*-- ----------------------------------------------------- --*/
/*--                    Arreglos: datos                    --*/
/*-- ----------------------------------------------------- --*/

// - Javascript es muy flexible a la hora de trabajar con datos en los arreglos:

// var arr = [
//   true,
//   {
//     nombre: 'Policarpio',
//     apellido: 'Avendaño'
//   },
//   function (){
//     console.log("Estoy viviendo en un arreglo")
//   },
//   function ( persona ){
//     console.log( persona.nombre + " " + persona.apellido )
//   },
//   [
//     "Tulio",
//     "Bodoque",
//     "Patana",
//     "Juanin",
//     [
//       "Joe Pino",
//       "Freddy Turbina",
//       "Pepe Lota",
//       function (){
//         console.log( this )
//       }
//     ]
//   ]
// ]

// - Puedo obtener los valores del arreglo accediendo a sus posiciones:

// console.log( arr ) // Posicion 0
// console.log( arr[0] ) // Posicion 1

// - Incluso como en la posicion 1 existe un objeto, puedo acceder a sus propiedades con la notacion de puntos:

// console.log( arr[1].nombre + " " + arr[1].apellido )

// - Para invocar la funcion de la posicion 2:

// arr[2]()

// - Para invocar la funcion de la posicion 3, utilizando los datos de la posicion 1 como parametros

// arr[3]( arr[1] )

// - Obteniendo el valor de la 1 posicion del arreglo que se encuentra en la posicion 4 del arreglo "arr"

// console.log( arr[4][1] )

// - Cambiar el valor de la posicion 1 del arreglo que se encuentra dentro del arreglo de la posicion 4 del arreglo "arr"

// - Paso por referencia el arreglo que necesito modificar
// var arrModificado = arr[4][4]

// - Cambio el valor de la posicion solicitada
// arrModificado[1] = "Cesar"

// - Imprimo el arreglo modificado
// console.log( arr[4][4] )

// - Como cambie la referencia he cambiado el arreglo original
// console.log( arr )

// - Acceder a la funcion del arreglo que se encuentra dentro del arreglo de la posicion 4 del arreglo "arr"

// arrModificado[3]()

/*-- ----------------------------------------------------- --*/
/*--                    Argumentos                         --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript las funciones tambien poseen sus propios prototipos, uno de ellos es el "arguments", los argumentos es un objeto que contiene los parametros que se le envian a una funcion cuando esta es invocada, de esta manera la funcion puede utilizar esos datos

// - Defino una funcion que mostrara por consola los argumentos, en este caso el parametro "a" recibira el primer argumento que sea enviado cuando se invoque la funcion
// function miFuncion( a ) {
//   console.log( arguments )
// }

// - Invoco la funcion enviando el argumento: 10, entonces la funcion "miFuncion" le asignara este argumento al parametro "a" e imprimira por consola un objeto de un valor, ya que estamos enviando un solo parametro, el resultado será: [10]
// miFuncion( 10 )

// - Si necesitamos validar que se envien un numero especifico de parametros podemos hacerlo asi:
// function miFuncion( a, b, c, d ) {
//   if ( arguments.length !== 4 ){
//     console.error( "La funcion necesita 4 parametros" )
//     return
//   }

//   console.log( a + b + c + d )

// }

// miFuncion( 10, 20)

/*-- ----------------------------------------------------- --*/
/*--                Sobrecarga de Operadores               --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript no existe la sobrecarga de operadores, pero se pueden usar distintas estrategias para emular este comportamiento, mas no igualarlo:

// - Si tenemos una funcion donde necesitamos dos argumentos, pero existe la posibilidad de que esos parametros no sean enviados, podemos asignarles valor por defecto:

// - Si no viene el nombre se asigna el valor de "sin nombre" a la variable "nombre"
// - Si no viene el precio se asigna el valor de 0 a la variable "precio"

// function crearProducto( nombre, precio){

//   nombre = nombre || "sin nombre"
//   precio = precio || 0

//   console.log( "Producto: " + nombre + ", Precio: " + precio )

// }

// Si necesitamos setear un valor especifico, podriamos crear otra funcion que setee ese valor, y desde esa funcion llamar a crear producto:

// function crearProducto100( nombre ){
//   crearProducto( nombre, 100 )
// }

// De igual manera si necesitamos solo setear el valor a un producto en especifico, podriamos crear una funcion que setee ese valor, y desde esa funcion llamar a crear producto:

// function crearProductoCamisa( precio ){
//   crearProducto( "Camisa", precio )
// }

/*-- ----------------------------------------------------- --*/
/*--                      Poliformismo                     --*/
/*-- ----------------------------------------------------- --*/

// - El poliformismo en Javascript es la capacidad que los objetos tienen para reaccionar a distintos metodos o valores

// - Si defino una funcion donde quiero saber que tipo de dato es el parametro que estoy enviando
// function determinaDato( a ) {

//   if ( a === undefined ) {
//     console.log("A es undefined... no se que hacer")
//   }

//   if ( typeof a === "number" ) {
//     console.log( "A es un numero, y puedo hacer operaciones con numeros" )
//   }

//   if ( typeof a === "string" ) {
//     console.log("A es un texto, y puedo hacer operaciones con texto" )
//   }

//   if ( typeof a === "object" ) {
//     console.log("A es un objeto... pero puede ser cualquier cosa..." )
//   }

// }

// - Podria suceder que si creo un numero con el constructor Number, la funcion "determinarDato" no haga la validacion correctamente, o si?
// var b = new Number(3) // Esto es un numero, pero tambien es un objeto, de eso se trata el poliformismo

// console.log( b )

// - La idea es que independiente del tipo de dato la funcion pueda trabajar con ese valor, entonces lo que podemos hacer es que al detectar que es un objeto determinar su instancia, asi podemos obtener el comportamiento deseado, que "b" se comporte como numero y no como objeto:
// function determinaDato( a ) {

//   if ( a === undefined ) {
//     console.log("A es undefined... no se que hacer")
//   }

//   if ( typeof a === "number" ) {
//     console.log( "A es un numero, y puedo hacer operaciones con numeros" )
//   }

//   if ( typeof a === "string" ) {
//     console.log("A es un texto, y puedo hacer operaciones con texto" )
//   }

//   if ( typeof a === "object" ) {
//     console.log("A es un objeto... pero puede ser cualquier cosa..." )

//     if( a instanceof Number ) {
//       console.log("A es un objeto numerico 😎");
//     }

//   }

// }

// determinaDato( b )

/*-- ----------------------------------------------------- --*/
/*--        Cuidado con las funciones y su contexto        --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript existen dos contextos (Scopes), el scope global, y el de bloque, el global es el Window y el de bloque es el de una funcion, esto significa que dependiendo del contexto, ese sera el alcance de una variable

// - Teniendo una funcion que crea funciones y las retorna en un arreglo, seteamos una variable llamada "numero" y vamos sobre escribiendo su valor:

// function crearFunciones() {

//   var arr = []
//   var numero = 1

//   arr.push( function(){
//     console.log( numero )
//   })

//   numero = 2

//   arr.push( function(){
//     console.log( numero )
//   })

//   numero = 3

//   arr.push( function(){
//     console.log( numero )
//   })

//   return arr

// }

// var funciones = crearFunciones()

// - Uno tenderia a pensar que el resultado de estas llamadas seria: 1, 2, 3, pero en realidad será de: 3, 3, 3. Esto sucede por que la ultima varible sobre escribe el valor de las demás, independiente del orden en que fueron declaradas la ultima siempre sobre escribe
// funciones[0]() // 3
// funciones[1]() // 3
// funciones[2]() // 3

// - Entonces ¿De que manera podriamos obtener los distintos valores de "numero" sin que se sobreescriba?. Respuesta: Utilizando el contexto:

// function crearFunciones() {

//   var arr = []

//   for ( var numero = 1; numero <=3; numero++ ) {

//     arr.push(

//       // Al crear una funcion anonima que se autoejecuta estoy creando un nuevo contexto "scope", por lo tanto al pasar el valor de la variable "numero" este queda guardado dentro del nuevo contexto, donde no podra ser sobreescrita
//       (function(numero){

//         return function(){
//           console.log( numero )
//         }

//       })(numero)

//     )

//   }

//   return arr

// }

// var funciones = crearFunciones()

// funciones[0]() // 1
// funciones[1]() // 2
// funciones[2]() // 3

/*-- ----------------------------------------------------- --*/
/*--                    Objetos Number                     --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript podemos definir un dato de tipo numero de la siguiente manera:

// - Usando asignacion:
// var a = 10

// - Usando el constructor:
// var b = new Number(10)

// - La unica diferencia, es que "a" sera un numero literal, y "b" sera un objeto numerico, por eso al hacer un comparacion estricta (===) dara false:

// console.log( a === b ) // false

// - Pero al comparar si son iguales los valores dara true
// console.log( a == b )  // true

// - Los valores de tipo numero tienen algunas funciones en su prototipo:

// - toFixed: formatea el numero a una cantidad de datos decimales:

// console.log( a.toFixed(2) ) //10.00

// - toString: convierte el numero a una cadena de texto "string"

// console.log( a, a.toString() ) // 10 '10'

// - toPrecision: devuelve una cadena "string" que representa un objeto Number según la presicion especificada:
// console.log( a, a.toPrecision(4) ) //10 '10.00'

// - infinity: cuando un numero es demasiado grande para JavaScript se considera "infinity" o si es demasiado pequeño se considera "-infinity"

// - NaN: siglas de "not a number", esto sucede cuando un tipo de dato numerico en algun momento deja de ser numero, o es el resultado de sumar un numero con algun caracter:

// console.log( a = -10 * "f" ) // NaN

// valueOf: Retorna el valor primitivo inserto en un objeto Number

// var b = new Number("20")

// console.log( b ) // Number {20}
// console.log( b.valueOf() ) // 20

/*-- ----------------------------------------------------- --*/
/*--                    Objetos Booleanos                  --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript los objetos booleanos son los valores "true" o "false"

// var a = true
// var b = false

// - Cuando seteamos un valor booleano con un constructor, su valor sera "false" si y solo si, es 0, -0, null, NaN, undefined

/*-- ----------------------------------------------------- --*/
/*--                    Objetos String                     --*/
/*-- ----------------------------------------------------- --*/

// - En otros lenguajes de programacion los datos de tipo "string" son arreglos de caracteres/texto, en cambio en Javascript son objetos:

// - Podemos definir un dato de tipo "string" de las siguientes formas
// var a = new String("Tulio Triviño")
// var b = "Triviño"

// - Al mostrar en consola podemos ver la palabra como objeto
// console.log( a )

// - Los datos de tipo "string" tambien poseen sus propios metodos "prototypes", algunos de estos son:

// - toUpperCase: convierte todas las letras de una cadena "string" a mayusculas
// console.log( a.toUpperCase() )

// - toLowerCase: convierte todas las letras de una cadena "string" a minusculas
// console.log( a.toLowerCase() )

// - indexOf: sirve para obtener el primer indice del caracter o palabra especificada, al igual que los arrays, los indices de los datos de tipo "string" comienzan en cero y desde ahi empieza a contar, los espacios vacios tambien los cuenta como caracter

// console.log( "Obtener el indice de la letra '0' que se encuentra en la palabra Tulio Triviño:", a.indexOf("o") )
// console.log( "Obtener el indice de donde comienza la palabra 'Triviño' que se encuentra en la palabra Tulio Triviño:", a.indexOf("Triviño") )

// - lastIndexOf: sirve para obtener el ultimo indice de un caracter o palabra, es util cuando hay letras repetidas y quieres obtener la ultima:

// console.log( "Obtener la ultima letra 'o' de la palabra Tulio Triviño:", a.lastIndexOf("o") )

// - substring: extrae los caracteres de una cadena de texto, especificando como primer parametro el index de donde debe empezar a extraer, y como segundo parametro el index final de donde debe extraer, no extrae el caracter del indice final, si no se especifica el segundo parametro extraera toda la palabra desde el primer indice:

// console.log( "Extrae todos los caracteres desde la posicion 2 de la palabra Tulio Triviño:", a.substring(2))
// console.log( "Extrae todos los caracteres desde la posicion 2 hasta la posicion 6 de la palabra Tulio Triviño:", a.substring( 2, 8))
// console.log( "Extrae todos los caracteres desde la posicion 0 hasta el primer espacio de la palabra Tulio Triviño:", a.substring( 0, a.indexOf(" ")))

// - Split: Este metodo sirve para dividir una cadena de texto (string) en un array, y podemos especificar el caracter que separara los elementos de la cadena especificandolo como parametro, si no se especifica, la cadena se convertira en un solo elemento del arreglo

// divided = a.split(" ")
// console.log( divided )

/*-- ----------------------------------------------------- --*/
/*--                     Objeto Date                       --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript tenemos el objeto "Date" el cual nos permite trabajar con fechas

// var hoy = new Date()
// console.log( "La fecha de este momento:", hoy )

// var fechaMilisegundos = new Date(0)
// console.log( "La fecha en milisegundos:", fechaMilisegundos )

// - Date soporta los siguientes parametros en el siguiente orden: año, mes, dia, hora, min, seg, mili, y el mes comienza con base 0 como los arrays, por ejemplo uno podria pensar que Enero es 1, pero en realidad es 0

// var fechaFija = new Date( 2024, 1, 26, 19, 50, 15, 2  )
// console.log( "La fecha fija:", fechaFija )

// - Las fechas tambien tienen sus propios prototipos, a continuacion algunos:

// - getFullYear: obtener el año
// console.log( "Obteniendo el año:", hoy.getFullYear() )

// - getDate: obtener el dia
// console.log( "Obteniendo el dia:", hoy.getDate() )

// - getHours: obtener la hora
// console.log( "Obteniendo la hora:", hoy.getHours() )

// - getMilliseconds: obtener los milisegundos
// console.log( "Obteniendo los milisegundos:", hoy.getMilliseconds() )

// - getMonth: obtener el mes
// console.log( "Obteniendo el mes:", hoy.getMonth() )

// - getSeconds: obtener los segundos
// console.log( "Obteniendo los segundos:", hoy.getSeconds() )

// - getTime: obtener una representacion numerica en milisegundos de una fecha
// console.log( "Obteniendo una representacion numerica en milisegundos de una fecha:", hoy.getTime() )

/*-- ----------------------------------------------------- --*/
/*--                 Operaciones con fechas                --*/
/*-- ----------------------------------------------------- --*/

// var fecha = new Date( 2024, 1, 26 )
// console.log( fecha )

// - setDate: para setear un dia, si es mayor a 31 empieza a contar los dias del mes siguiente

// fecha.setDate( 32 )
// console.log( fecha )

// - Sumar dias usando el prototipo:

// Date.prototype.sumarDias = function( dias ){
//   this.setDate( this.getDate() + dias )
//   return this
// }

// console.log( fecha )
// console.log( fecha.sumarDias(5) )

// - Sumar años usando el prototipo:

// Date.prototype.sumarAnios = function( anios ){
//   this.setFullYear( this.getFullYear() + anios )
//   return this
// }

// console.log( fecha )
// console.log( fecha.sumarAnios(5) )

/*-- ----------------------------------------------------- --*/
/*--                     Objeto Math                       --*/
/*-- ----------------------------------------------------- --*/

// - El objeto Math de JavaScript permite trabajar con metodos matematicos, podemos ver todos sus prototipos de la siguiente manera:

// console.log( window.Math )

// - Obtener el valor constante de PI y de E (base de logaritmo natural)

// var PI = Math.PI
// var E  = Math.E

// console.log( "Valor de PI", PI )
// console.log( "Valor de E", E )

// - Round: para redonder un numero usamos este metodo
// var num1 = 10.456789

// console.log( "Numero de ejemplo:", num1 )
// console.log( "Numero redondeado", Math.round( num1 ))

// - Para obtener decimales con Round, hay que hacer un truco, multiplicar por la cantidad de decimales que se quiere obtener por ejemplo, para 2 decimales se debe multiplicar por 100 (cada cero representa un decimal), y ese resultado dividirlo por la misma cantidad multiplicada:
// console.log( "Numero redondeado con dos decimales", Math.round( num1 * 100 ) / 100 )

// - Floor: quita todos los decimales de un numero sin redondear
// console.log( "Numero sin redondeo, ni decimal:", Math.floor( num1 ))

// - Random: genera un numero aleatorio entre el 0 y 1
// var rnd = Math.random()
// console.log( "Numero aleatorio generado con random:", rnd )

// - Creacion de una funcion que permita devolver numeros aleatorios entre un rango especificado por parametros:
// function randomEntre( min, max ) {
//   return Math.floor( Math.random() * ( max - min + 1 ) + min )
// }

// console.log( "Numero aleatorio entre 1 y 6", randomEntre( 1, 6 ) )

// - Sqrt: obtener la raiz cuadrada:
// console.log( "Raiz cuadrada de 36:", Math.sqrt( 36 ) )

// - Pow: obtener la base elevada al exponente:
// console.log( "Si tomo como base el 7 y lo elevo a 2 el resultado es:", Math.pow( 7, 2 ) )

/*-- ----------------------------------------------------- --*/
/*--          Expresiones Regulares: Definiciones          --*/
/*-- ----------------------------------------------------- --*/

// - Las expresiones regulares sirven para buscar informacion en una cadena de caracteres (string) predefiniendo la busqueda por un formato creado con la expresion

// - Definir una expresion regular que busque el caracter "a"

// - Definicion con el constructor:

// var reg1 = new RegExp("a")

// // - Definicion literal

// var reg2 = /a/

// var texto = "Hola Mundo, 12345"

// var textoMultilinea = "Hola Mundo.\nQué tal?"

// var letrasRepetidas = "Holaa Mundoo"

// // - Para buscar en un texto la expresion definida, usamos el metodo "match", si la expresion es correcta regresa un arreglo con el resultado de la expresion, el index de la palabra donde encontro la expresion, y el texto donde busco, de lo contrario retornara el valor "null"

// var arr = texto.match( reg1 )
// console.log( arr )

// // - Con el simbolo ^ especificamos que busque en la primera posicion la expresion

// console.log( "Busca en la primera posicion de la palabra " + texto + " la letra a:", texto.match( /^a/ ) )

// // - Con el simbolo $ especificamos que busque en la ultima posicion la expresion

// console.log( "Busca en la ultima posicion de la palabra " + texto + " la letra o:", texto.match( /o$/ ) )

// // - Con el simbolo . especificamos que queremos obtener cualquier caracter contando desde la primera posicion

// console.log( "Busca cualquier caracter de la palabra " + texto + " de izquierda a derecha", texto.match( /../ ) )

// // - Buscar en el primer caracter cualquier letra que venga seguida de una letra o

// console.log( "Buscar en el primer caracter de la palabra " + texto + " cualquier letra que venga seguida de una letra o", texto.match( /^.o/ ) )

// // - Con los simbolos [] podemos definir un rango, por ejemplo un rango numerico seria del 0 al 9 [0-9], es decir, que encuentre el primer numero que este dentro del rango

// console.log( "Buscar en la palabra " + texto + " el primer numero que este dentro del rango del 0 y 9:", texto.match( /[0-9]/ ) )

// // - Con la expresion de rango tambien podemos buscar letras, como observacion las expresiones son case sensitive por lo que al buscar la primera letra en la palabra 'Hola Mundo' que coincida con el rango [0-9], el resultado sera la letra o, ya que la H de 'Hola Mundo' se encuentra en mayusculas, y la expresion esta definida en minusculas

// console.log( "Encontrar la primera letra en la palabra " + texto + " que coincida entre a y z", texto.match( /[a-z]/ ) )

// // - Para buscar la letra minuscula y la mayuscula puedo definir asi:

// console.log( "Encontrar la primera letra en la palabra " + texto + " que coincida entre a y z, o A y Z", texto.match( /[a-zA-Z]/ ) )

// // - Buscar cualquier letra entre la a y z, pero la palabra debe comenzar con H

// console.log( "Buscar en la palabra " + texto + " cualquier letra entre la a y z, pero la primera letra de la palabra debe comenzar con H", texto.match( /^H[a-z]/ ) )

// // - Buscar cualquier vocal

// console.log( "Buscar en la palabra " + texto + " la primera vocal", texto.match( /[aeiou]/ ) )

// // - Buscar la primera vocal, seguida de cualquier caracter, pero desde el final de la cadena

// console.log( "Buscar en la palabra " + texto + " la primera vocal, seguida de cualquier caracter, pero desde el final de la cadena", texto.match( /[aeiou].$/ ) )

// // - Buscar la primera vocal, seguida de cualquier caracter

// console.log( "Buscar en la palabra " + texto + " la primera vocal, seguida de cualquier caracter", texto.match( /[aeiou]./ ) )

// // - Buscar la primera separacion (espacio) que haya en la cadena

// console.log( "Buscar en la palabra " + texto + " cualquier separacion", texto.match( /\s/ ) )

// // - Podemos usar esta busqueda: [a-zA-Z0-9] de manera abreviada con /\w/ (viene de "word"), no funciona con la letra ñ

// console.log( "Buscar en la palabra " + texto + ", el primer caracter, letra minuscula, o mayuscula, o numero", texto.match( /\w/ ) )

// // .- Para abreviar esta busqueda [0-9], podemos usar /\d/ (viene de "decimo")

// console.log( "Buscar en la palabra " + texto + ", el primer numero", texto.match( /\d/ ) )

// // - Tambien existen 3 controladores que se declaran al final de la expresion para formatear la busqueda de manera mas especifica:

// // - i = insensible, elimina el case sensitive
// // - g = todas las ocurrencias
// // - m = multilinea

// // - Encuentra la primera letra m independiente de si es mayusucula o minuscula

// console.log( "Buscar en la palabra " + texto + ", la primera letra m, independiente de si es minuscula o mayuscula", texto.match( /\m/i ) )

// // - Obtener todas la vocales que se encuentran en una palabra

// console.log( "Buscar en la palabra " + texto + ", todas las vocales", texto.match( /[aeiou]/g ) )

// // - Obtener todos los caracteres especiales independiente de si es mayuscula o minuscula

// console.log( "Buscar en la frase " + textoMultilinea + " , todos los caracteres especiales, independiente de si es minuscula o mayuscula", textoMultilinea.match( /[áéíóúñ]/ig ) )

// // - Usando un repetidor podemos obtener los resultados que se repiten de manera continua:

// console.log( "Buscar en la palabra " + letrasRepetidas + ", la vocal o minuscula que se repite al menos una vez", letrasRepetidas.match( /o+/g ) )

// // - Definir que algo aparezca n veces

// console.log( "Buscar en la palabra " + letrasRepetidas + ", la primera vocal o minuscula que se repite dos veces", letrasRepetidas.match( /o{2}/ ) )

/*-- ----------------------------------------------------- --*/
/*--         Expresiones Regulares: Casos de uso           --*/
/*-- ----------------------------------------------------- --*/

// - Buscar los diptongos de la palabra "aeropuerto"

// var texto = "Aeropuerto"

// var arr = texto.match( /[aeiou]{2,2}/ig )

// console.log( "Los diptongos de la palabra " + texto + " son: " + arr )

// - Cualquier letra en grupos de dos

// var arr = texto.match( /\w{2,2}/ig )

// console.log( "Separando las letras de la palabra " + texto + " en grupos de dos: " + arr )

// - Obtener solo los numeros de una oracion:

// var oracionConNumeros = "La respuesta de la suma es: 45 + 60 = 105"

// var oCnArr = oracionConNumeros.match( /\d{1,}/g )

// console.log( "Los numeros de la siguiente oracion: '" + oracionConNumeros + "' son: " + oCnArr )

// - Obtener los numeros de una oracion mas una palabra especifica:

// var oCnArrWord = oracionConNumeros.match( /\d{1,}|respuesta/ig )

// console.log( "Extraer de la siguiente oracion: '" + oracionConNumeros + "' todos los numeros mas la palabra 'respuesta': " + oCnArrWord )

/* -------------------------------------------------------------------------
  Sección 4: Interpretacion, palabras reservadas, decisiones, escape y cookies
------------------------------------------------------------------------- */

/*-- ----------------------------------------------------- --*/
/*--           Manejo de errores con Try/Catch             --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript podemos usar la declaracion Try/Catch para manejar errores

// - Javascript intentara ejecutar todo lo que se encuentra en el "try", no trabaja solo, luego de esta sentencia debe declararse la sentencia "catch" y/o "finally" o si no se ejecutara un error
// try {

  // - Una forma de forzar la ejecucion del "catch" es ejecutando la sentencia "throw"
  // throw 'nuevo error para el catch'


  // Si aparece un error en el "try" se ejecutara el "catch", que recibe el error como argumento, es opcional, pero si no se declara debe declararse la sentencia "finally"
// } catch (error) {

  // console.log("Error de catch: ", error )

  // "Finally" ejecutara todo lo que se encuentre en su "scope" independiente de lo que haya hecho "try" y "catch", es opcional, pero si no se declara la sentencia "catch" debe declararse de forma obligatoria, o si no el "try" ejecutara un error
// } finally {

  // console.log("Finalmente");

// }

// - Otra forma de declarar un "throw" es con el constructor "Error"

// try {

//   // - Cuando declaramos un "throw" es como ejecutar un "return" todo lo que se haya declarado despues no será ejecutado
//   throw new Error('Error: tipo 1')

//   console.log('Esto nunca se va a ejecutar');

// } catch (error) {

//   // "throw" normal
//   console.log( error );

//   // - Podemos obtener una descripción del error, usando la propiedad "message", del prototipo del objeto "Error"
//   console.log( error.message );

// }

// - Podemos enviar como parametro cualquier cosa en el "throw"

// try {

//   // - Enviando un objeto
//   throw {
//     nombreError: "Error tipo 1",
//     accion: "Salir corriendo a hecharle agua al servidor",
//     codeError: 1
//   }

// } catch (error) {

//   console.log( error )
//   console.log( error.nombreError )
//   console.log( error.accion )
//   console.log( error.codeError )

// }

// - Funcion que registra un error con la hora en la cual se ejecuto:

// try {

//   throw new Error('Error espacial, estan invadiendo la tierra')

// } catch ( error ) {

//   registroError( error )

// }

// function registroError( error ) {

//   var ahora = new Date()

//   console.log('Se registro un error: ', error.message, "a las: ", ahora )

// }

// Ahora viene una parte enfocada a las "Cookies", para poder trabajar con ellas instalar: https://www.npmjs.com/package/http-server

/*-- ----------------------------------------------------- --*/
/*--                Escape, unescape y cookies             --*/
/*-- ----------------------------------------------------- --*/

// - Las cookies es informacion que uno puede guardar en el computador desde el navegador, como por ejemplo: saber que idioma selecciono el usuario, o el nombre de usuario, cosas generales que no sean sensibles para darle funcionamiento a una pagina, por ejemplo una contraseña no debe guardarse en una cookie ya que es informacion sensible guardada en un medio de muy facil acceso

// - Las cookies sobreviven el reinicio del navegador y pueden ser programadas para que expiren

// - Para crear una cookie con Javascript podemos hacerlo de la siguiente manera:

// document.cookie = "nombre=Policarpo"
// document.cookie = "apellido=Avendaño"

// - Funcion que crea cookies:

// function crearCookie( nombre, valor ){

//   // "Escape" es una funcion en Javascript que convierte los caracteres especiales a una secuencia hexadecimal legible, esto lo hace para evitar problemas con los caracteres especiales, esta deprecada
//   valor = escape( valor )

//   // Seteando una fecha de expiracion
//   var hoy = new Date()

//   // A partir de hoy que dure 30 dias
//   hoy.setMonth( hoy.getMonth() + 1 )

//   // Con el parametro "expires" seteamos la fecha de expiracion
//   document.cookie = nombre+"="+valor+";expires=" + hoy.toUTCString()+";"

// }

// crearCookie( "nombre", "Policarpo" )
// crearCookie( "correo", "policarpo@correo.com" )
// crearCookie( "direccion", "Titirilquen, Chile" )

// - Para leer una cookie:

// var cookies = document.cookie
// console.log( cookies )

// - Funcion para borrar una cookie:

// function borrarCookie( nombre ){

//   var hoy = new Date()
//   hoy.setMonth( hoy.getMonth() - 1 )

//   document.cookie = nombre+"=x;expires=" + hoy.toUTCString()+";"

// }

// borrarCookie( "nombre" )

// - Funcion para obtener cookies especificas

// function getCookie( nombre ){

//   var cookies = document.cookie

//   // Separar la cadena de caracteres con las cookies por espacio y generar un arreglo:
//   var cookieArr = cookies.split("; ")

//   for( var i=0; i<cookieArr.length; i++ ){

//     var parArr = cookieArr[i].split("=")
//     cookieArr[i] = parArr

//     if( parArr[0] === nombre ){
//       return unescape( parArr[1] )
//     }

//   }

//   // Este "return" es en caso de que no exista la cookie consultada
//   return undefined

// }

// console.log( getCookie( "direccion" ) )

/*-- ----------------------------------------------------- --*/
/*--             Funciones Call, Apply y Bind              --*/
/*-- ----------------------------------------------------- --*/

// - En Javascript cada funcion tiene 3 metodos que se encuentran en su prototipo Call, Apply y Bind

// -Bind: El método bind() crea una nueva función, que cuando es llamada, asigna a su operador "this" el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada. El valor de "this" es ignorado cuando la función es llamada con el operador "new"

// var carro = {
//   color: "Blanco",
//   marca: "Mazda",
//   imprimir: function(){
//     var salida = this.marca + " - " + this.color
//     return salida
//   }
// }

// var carro2 = {
//   color: "Rojo",
//   marca: "Toyota"
// }

// var logCarro = function( arg1, arg2 ){

//   // Acá el "this" apunta al objeto global "window"
//   console.log( "Carro: ", this.imprimir() )
//   console.log( "Argumentos:", arg1, arg2 )
//   console.log( "========================")

// }

// Esto acá dara error por el apuntado del "this" a windows
// logCarro()

// Pero acá con "bind" estamos apuntando el "this" de "logCarro" al objeto "carro", se debe asignar a una variable, porque bind() genera un contexto de ejecución nuevo
// var logModeloCarro = logCarro.bind( carro )

// Pero acá no dara error por el apuntado del "this" a "carro"
// logModeloCarro( "abc", "xyz" )

// - Call: El método call() llama a una función con un valor dado "this" y con argumentos provistos individualmente

// - Estructura: mifuncion( nuevoThis, argumentos... )

// logModeloCarro.call( carro, "123", "456" )

// - Apply: El método apply() invoca una determinada función asignando explícitamente el objeto "this" y un array como parámetros (argumentos) para dicha función, es casi igual a call(), pero a diferencia de este, los parametros deben ser enviados dentro de un array, esto es util cuando no sabemos la cantidad de parametros que debemos enviarle a la funcion

// logModeloCarro.apply( carro, ["asd", "qwe"] )

// - Todo esto sirve para utilizar "Funciones Prestadas", basicamente utilizar metodos definidos en otros objetos, con distintas referencias del "this"

// console.log( carro.imprimir.call( carro2 ) )

/*-- ----------------------------------------------------- --*/
/*--                 Sentencia If...Else                   --*/
/*-- ----------------------------------------------------- --*/

// - La sentencia "If...Else" ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada

// - Este codigo no es recomendable de usar, pero sirve para explicar, como trabaja la sentencia "If...Else", de manera indiviual, concatenada, con niveles, etc

// var nota = 55

// if ( nota >= 90 ) {

//   console.log( "A" )

// } else if ( nota >= 80 ) {

//   console.log( "B" )

// } else if ( nota >= 70 ) {

//   console.log( "C" )

// } else if ( nota >= 60 ) {

//   console.log( "D" )

// } else {

//   if ( nota < 50 ) {

//     console.log( "-F" )

//   } else {

//     console.log( "+F" )

//   }


// }

// console.log( "Termino el codigo." )

// - Tambien existen maneras abreviadas de utilizar la sentencia "If...Else":

// - Obtener el numero mayor entre 10 y 20:

// var a = 10
// var b = 20

// - Con "If...Else" normal:

// if ( a > b ) {
//   c = a
// } else {
//   c = b
// }

// - Con "Operador condicional ternario"

// var c = ( a > b ) ? a : b

// console.log( c )

/*-- ----------------------------------------------------- --*/
/*--            Switch... condicional multiple             --*/
/*-- ----------------------------------------------------- --*/

// var mes = 40

// switch ( mes ) {

//   case ( 10 > 5 ) ? 40 : 1 :
//     console.log( "Enero")
//     break
//   case undefined :
//     console.log( "Febrero")
//     break
//   case 3 :
//     console.log( "Marzo")
//     break

//   default:
//     console.log( "Cualquier otro mes" )

// }

/*-- ----------------------------------------------------- --*/
/*--                          JSON                         --*/
/*-- ----------------------------------------------------- --*/

// - En javascript podemos convertir objetos a formato JSON y viceversa

// var objetoJS = {
//   nombre: "Tulio",
//   edad: "30",
//   imprimir: function(){
//     console.log( this.nombre, this.edad )
//   }
// }

// console.log( "Objeto literal", objetoJS )

// - Podemos convertir un objeto a JSON usando el metodo JSON.stringify, cuando se hace esta conversion, se ignoran los metodos del objeto, para conservar los metodos, es mejor asignarlos a un prototipo

// var jsonString = JSON.stringify( objetoJS )

// console.log( "Objeto literal convertido a JSON:", jsonString )

// // - Podemos convertir un JSON a objeto con el metodo JSON.parse
// var objetoDesdeJson = JSON.parse( jsonString )

// console.log( "JSON convertido a objeto literal:", objetoDesdeJson )

/* -------------------------------------------------------------------------
  Sección 5: Ciclos en Javascript: Loops
------------------------------------------------------------------------- */

/*-- ----------------------------------------------------- --*/
/*--                 Ciclo While y Do While                --*/
/*-- ----------------------------------------------------- --*/

// - Los ciclos nos ayudan a repetir lineas de codigo

// var i = 0

// // - While: ejecutara el codigo y se repetira siempre y cuando se cumpla la condicion

// while ( i < 10 ) {

//   i++

//   // La palabra "break" sirve para forzar el termino del ciclo
//   // if( i === 5) {
//   //   break
//   // }

//   // La palabra "continue" sirve para saltarse lo que venga a continuacion ( por ejemplo con "continue" no se ejecutara el console.log ) y continuara con el ciclo
//   // if( i === 5) {
//   //   continue
//   // }

//   console.log( i )

// }

// Do While: ejecuta el ciclo al menos una vez y despues de eso siempre y cuando se cumpla la condicion se volvera a ejecutar
// do {

//   i++

//   console.log( i )

// } while ( i < 10 )


/*-- ----------------------------------------------------- --*/
/*--                 Ciclo For y For in                --*/
/*-- ----------------------------------------------------- --*/

// - El ciclo for opera pasando como argumento primero una variable del numero desde donde comenzara la iteracion, luego viene la condicion y como tercer argumento el contador

// - Podemos sumar de 2 en 2 usando "i+=2", de 3 en 3 usando "i+=3", etc

// - Se pueden hacer ciclos dentro de ciclos, es decir: podemos declarar un ciclo For, dentro de otro ciclo For

// for ( var i = 0; i <= 10; i++ ) {

//   // - Al haberse declarado un "continue" el console.log no mostrara el numero 5
//   if( i == 5 ) {
//     continue
//   }

//   console.log( i )

// }

// - Existe tambien el ciclo For in, que es muy utilizado para "barrer" las propiedades de los objetos

// - Defino un constructor de objetos de tipo Persona

var Persona = function(){
  this.nombre = "Tulio"
  this.apellido = "Triviño"
  this.edad = 30
}

// - A partir del constructor creado defino un objeto de tipo Persona

var juan = new Persona()

// - Si agregamos una propiedad al constructor de tipo Persona desde un "prototype" tambien podra verse reflejado en el objeto juan

Persona.prototype.direccion = "Titirilquen"

// - Puedo acceder a las propiedades del objeto Juan usando un ciclo For In

for ( prop in juan ) {

  //- Metodo para mostrar solo las propiedades del objeto que fueron creadas en el constructor, si se quieren visualizar solo las que fueron creadas con prototipos sacar el "!" del if
  if ( !juan.hasOwnProperty( prop ) )
    continue

  console.log( prop,":", juan[prop] )

}