const fs = require ('fs')
//import fs from 'fs'

function read(ruta, callback) {
  fs.readFile(ruta, (err, data) => {
    // Leido
    callback(data.toString());
  })
}

function write(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, (err) => {
    if(err){
      console.log('No he podido escribirlo', err);
    } else {
      console.log('Se ha escrito correctamente');
    }
  })
};

function deleteA(ruta, callback) {
  fs.unlink(ruta, callback);
}

// read(__dirname + '/archivo.txt', console.log);
// write(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
deleteA(__dirname + '/archivo1.txt', console.log);