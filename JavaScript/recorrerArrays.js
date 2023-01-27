var articulos = [
  {
    nombre: "Bici",
    costo: 3000
  },
  {
    nombre: "Television",
    costo: 2500
  },
  {
    nombre: "Libro",
    costo: 320
  },
  {
    nombre: "Celular",
    costo: 1000
  },
  {
    nombre: "Laptop",
    costo: 2000
  },
  {
    nombre: "Teclado",
    costo: 500
  },
  {
    nombre: "Audifonos",
    costo: 1700
  },
]

//filter
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500
});

//map
var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
});

//find
var encuentraArticulo = articulos.find(function (articulo){
  return articulo.nombre === "Laptop"
});

//forEach
articulos.forEach(function(articulo){
  console.log(articulo.nombre);
});

//some
var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
});

