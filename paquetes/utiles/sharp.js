const sharp = require('sharp');

sharp('Code.png')
    .resize(5000)
    .toFile('resized.png')
    .then(console.log('Realizamos el cambio'));