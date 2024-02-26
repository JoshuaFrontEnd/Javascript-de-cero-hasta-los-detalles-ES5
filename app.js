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

var a = true
var b = false

// - Cuando seteamos un valor booleano con un constructor, su valor sera "false" si y solo si, es 0, -0, null, NaN, undefined
