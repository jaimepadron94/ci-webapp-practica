const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const horaDeInicio = new Date().toISOString();
app.use(express.static(__dirname));
app.get("/status", (req, res) => {
  res.json({
    mensaje: "Ambiente efimero activo",
    servidorIniciado: horaDeInicio,
    horaActual: new Date().toISOString(),
  });
});
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
