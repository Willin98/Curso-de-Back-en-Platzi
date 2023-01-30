//const process = require('process');

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('Ale, el proceso acabo');
});

process.on('uncaughtException', (err, origen) => {
  console.log('vaya se nos ha olvidado capturar un error');
  console.error(err);
});

functionQue();

console.log('Esto si el error no se recoje, no sale');

