console.log('Algo');
console.info('Algo');
console.error('Algo');
console.warn('Algo');

var tabla = [
  {
    a: 1,
    b: 'z'
  },
  {
    a: 2,
    b: 'otra'
  }
]

console.table(tabla);
console.group('conver');
console.log('Hola');
console.log('Blabalab');
console.log('Adios');
console.groupEnd('conver');

function funcion1() {
  console.group('Funcion 1');
  console.log('Es es la funcion uno');
  console.log('Esto tambien');
  funcion2();
  console.log('hEMOS VUELTO A LA 1');
  console.groupEnd('Funcion 1');
}

function funcion2() {
  console.group('Funcion 2');
  console.log('Ahora estamos en la funcion 2');
  console.groupEnd('Funcion 2');
}

console.log('Empezamos');
funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');