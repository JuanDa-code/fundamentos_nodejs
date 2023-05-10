var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a:2,
        b: 'L'
    }
]

console.log('Algo');
console.info('Informacion');
console.error('Error');
console.warn('Advertencia');
console.table(tabla);

console.group('Conversacion');
console.log('Hola');
console.log('Bla bla bla');
console.log('Adios');
console.groupEnd();

function function1() {
    console.group('Funcion 1');
    console.log('Esto es de la funcion 1');
    function2();
    console.groupEnd();
}

function function2() {
    console.group('Funcion 2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd();
}

console.log('Empezamos');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');