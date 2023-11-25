const logplease = require('logplease');
const numeros = require('./numeros');

const logger = logplease.create('Ejercicio-3');
const numberEj = [2, 3, 101, 201, 202, 100]

numberEj.forEach(numero => {
  if (numeros.esPar(numero)) {
    logger.info(`El número ${numero} es par`);
  } else {
    logger.error(`El número ${numero} no es par`);
  }
});