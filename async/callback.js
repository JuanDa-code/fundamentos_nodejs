function hola(nombre, myCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        myCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios, ${nombre}`);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');

hola('Juan', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso...');
    });
});

// hola('Juan', () => {});
// adios('Juan', () => {});