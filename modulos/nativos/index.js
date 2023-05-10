const miAddon = require('addon');

console.log(miAddon.hola);

/*

Para poder importar modulos de C++ a Node.js se debe instalar el Visual Studio 2023 
o cualquier version actual, ya que node requiere "Desktop development with C++" para
funcionar.

El primer comando que se ejecuta es 'node-gyp configure' en la carpeta donde se tenga
el archivo de C++.

El segundo es 'node-gyp build'.
Con esto ya se puede importar el modulo de C++ para usar sus metodos.

En tal caso que no funcione 'node-gyp build', podemos ejecutar los siguientes comandos:

1. 'sudo apt-get install build-essential'
2. 'sudo apt-get update'
3. 'sudo apt-get install build-essential'
4. 'node-gyp build'

*/