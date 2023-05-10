const http = require('http');

const router = (req, res) => {
    console.log('Nueva peticion!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
            break;
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' });

    // res.write('Hola, ya se usar HTTP de NodeJS');

    // res.end();
}

http.createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000');