const express = require("express");
const app = express();
const PORT = 3000;

// Esta línea le dice a Express cómo leer los datos que llegan en POST
app.use(express.json());

// Importamos el router de libros
const librosRouter = require("./routes/libros");

// Todo lo que llegue a /libros se lo mandamos al router de libros
app.use("/libros", librosRouter);

app.listen(PORT, () => {
  console.log(`BookAPI corriendo en http://localhost:${PORT}`);
});