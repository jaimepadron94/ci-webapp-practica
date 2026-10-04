function sumar(a, b) {
  return a + b;
}

function esPar(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

module.exports = { sumar, esPar, dividir };
