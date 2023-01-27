function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('hola ' + nombre);
    miCallback(nombre);
  }, 1500 );
}

function hablar(callbackHablar){
  setTimeout(() => {
    console.log('Bla bla bla bla');
    callbackHablar();
  }, 1000);
}
function adios(nombre, otroCallback){
  setTimeout(() => {
    console.log('Adios ', nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if(veces >= 0) {
    hablar(function() {
      conversacion(nombre, --veces, callback);
    })
  } else {
    adios(nombre, callback);
  }
}
// -----------
console.log('Iniciando proceso..');

hola('Carlos', function(nombre){
  conversacion(nombre, 3, function(){
    console.log('Proceso terminado');
  });
})

// hola('Carlos', function (nombre) {
//   hablar(function(){
//     hablar(function () {
//       adios(nombre, function (){
//         console.log('Terminanso proceso..');
//       });
//     });
//   });
// });

// hola('Carlos', function(nombre) {
//   adios(nombre, function(){
//     console.log('Terminamos');
//   });
// });