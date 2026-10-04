const { sumar, esPar, dividir } = require("./operaciones");

test("suma dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("identifica un número par", () => {
  expect(esPar(4)).toBe(true);
});

test("identifica un número impar", () => {
  expect(esPar(7)).toBe(false);
});
