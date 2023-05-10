process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('Listo, el proceso acabo');
});

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya, se nos ha olvidado capturar un error');
    console.error(err);
});

functionquenoExiste();
// process.on('uncaughtRejection')