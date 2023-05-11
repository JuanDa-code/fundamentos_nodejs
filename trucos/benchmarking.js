console.time('All');
let suma = 0;

console.time('Bucle')
for (let i = 0; i < 1000000; i++) {
    suma += 1;
}
console.timeEnd('Bucle')

console.time('Funcion asincrona');
console.log('Empieza el proceso asincrono');
asincrona()
    .then(() => {
        console.timeEnd('Funcion asincrona');
    });

let suma2 = 0;

console.time('Bucle 2')
for (let j = 0; j < 10000000; j++) {
    suma2 += 1;
}
console.timeEnd('Bucle 2')
console.timeEnd('All');

function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            resolve();
        });
    });
}