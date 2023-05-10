const { table } = require('console');
const os = require('os');

console.log(`Arquitectura: ${os.arch()}`);
console.log(`Sistema operativo: ${os.platform}`);
console.table(os.cpus());
console.table(os.constants.priority);
console.log(os.freemem());

const SIZE = 1024;
function kb(bytes) {return bytes / SIZE }
function mb(bytes) {return kb(bytes) / SIZE }
function gb(bytes) {return mb(bytes) / SIZE }

console.log(`Memoria en KB: ${kb(os.freemem())}`);
console.log(`Memoria en MB: ${mb(os.freemem())}`);
console.log(`Memoria en GB: ${gb(os.freemem())}`);

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.table(os.networkInterfaces());