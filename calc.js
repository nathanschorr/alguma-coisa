'use strict';

function soma(a, b) {
  if (!a || !b)
    return { message: 'parâmentos faltando'};
  return a + b;
}

module.exports = { soma };
