function saludar(nombre) {
  const mensaje = "Hola " + nombre;
  if (nombre === "Admin") {
    return mensaje;
  }
  return mensaje;
}

module.exports = { saludar };
