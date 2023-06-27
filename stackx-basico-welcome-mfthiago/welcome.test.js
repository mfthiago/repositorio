const welcome = require('./welcome');

test('retorna a saudacao da Stackx', () => {
  expect(welcome()).toBe("Eu faço parte da StackX!");
});
