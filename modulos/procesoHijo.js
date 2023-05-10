const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('cmd.exe', ['/c', 'dir']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log('Esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit', () => {
    console.log('El proceso termino');
    console.log(proceso.killed);
})