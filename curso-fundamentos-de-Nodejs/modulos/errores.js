function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error('Error en mi funcion asincrona');
      cb(err);
    }
  });
}

try {
  //otraFuncion();
  seRompeAsincrona((err) => {
    console.log(err.message);
  });
} catch (err) {
  console.log('Vaya algo malo paso', err.message);
}

console.log('Esto esta al final');