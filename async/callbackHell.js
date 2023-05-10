function hola(nombre, myCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        myCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios, ${nombre}`);
        otroCallback();
    }, 1000);
}

// --

console.log('Iniciando proceso...');

hola('Juan', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('Proceso terminado');
    });
});

// hola('Juan', (nombre) => {
//     adios(nombre, () => {
//         console.log('Terminando proceso...');
//     });
// });

// hola('Juan', (nombre) => {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, () => {
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     });
// });