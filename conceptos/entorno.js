let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web';

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);

/*

Dos herramientas que nos pueden ayudar tanto en produccion 
como en desarrollo de nuestra aplicacion:

Desarrollo.
Nodemon: "Demons en linux" Podemos tener procesos que vemos ejecutandose.
        Aplica los cambios automaticamente, lo cual 
        compila y revisa el codigo.

        Se ejecuta:
        nodemon + archivo a ejecutar

Produccion.
PM2: "Demonio adminisrtador" de procesos que nos ayuda a administrar y
    mantener una aplicacion 24/7. Con este se puede monitorizar el
    codigo para saber si algo falla o se rompe.
    Permite ver dashboards del codigo de la aplicacion.
    Ver rendimiento de la cpu.

    Se ejecuta:
    pm2 start + archivo a ejecutar

*/