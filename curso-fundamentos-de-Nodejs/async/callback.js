function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('hola ' + nombre);
    miCallback(nombre);
  }, 1500 );
}

function adios(nombre, otroCallback){
  setTimeout(() => {
    console.log('Adios ', nombre);
    otroCallback();
  }, 1000);
}
console.log('Iniciando proceso..');

hola('Carlos', function (nombre) {
  adios(nombre, function (){
    console.log('Terminanso proceso..');
  });
});

// hola('Carlos ', function(){});
// adios('Carlos ', function(){});