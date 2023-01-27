var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiantes){
  console.log(`Hola, ${estudiantes}`);
}

while(estudiantes.length > 0){
  var estudiante = estudiantes.shift();
  saludarEstudiante(estudiante);
}