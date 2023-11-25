// index.js
const logplease = require('logplease');
const logger = logplease.create('Ejercicio-2');

logger.debug('Hola Mundo de Node (usando el método debug)');
logger.info('Noticias de última hora, Node.js me encanta!! (usando el método info)');
logger.warn('Tirando warnings como campeones (usando el método warn)');
logger.error('Algo no está bien!!! (usando el método error)');