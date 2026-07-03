// Este archivo es el almacén de datos.
// Por ahora los guardamos en memoria — más adelante usaremos una base de datos real.
let libros = [
{ id: 1, titulo: "Harry Potter y la Piedra Filosofal", autor: "J. K. Rowling", genero: "Fantasía", paginas: 256},
{ id: 2, titulo:"El Principito", autor: "Antoine de Saint-Exupéry", genero: "Fábula", paginas: 96},
{ id: 3, titulo:"Frankenstein", autor: "Mary Shelley", genero: "Terror", paginas: 280},
{ id: 4, titulo:"El diario de Ana Frank", autor: "Ana Frank", genero: "Biografía", paginas: 352},
{ id: 5, titulo:"Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Novela", paginas: 863},
{ id: 6, titulo:"El señor de los anillos", autor: "J. R. R. Tolkien", genero: "Fantasía", paginas: 1178},
{ id: 7, titulo:"Drácula", autor: "Bram Stoker", genero: "Terror", paginas: 418},
{ id: 8, titulo:"La isla del tesoro", autor: "Robert Louis Stevenson", genero: "Aventura", paginas: 240},
];

// Exportamos el array para que otros archivos puedan usarlo
module.exports = libros;