function otraFuncion() {
    return seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi funcion asincrona');
            cb(err);
        }
    });
}

try {
    // otraFuncion();
    seRompeAsincrona((err) => {
        console.log(`Mensaje de error: ${err.message}`);
    });
} catch (err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado.');
}

console.log('Esto de aqui esta al final');