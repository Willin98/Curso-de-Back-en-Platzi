var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiantes){
  console.log(`Hola, ${estudiantes}`);
}

for(var i = 0; i<estudiantes.length ; i++ ){
  saludarEstudiante(estudiantes[i]);
}

for(var estudiante of estudiantes){
  saludarEstudiante(estudiante);
}