const fs = require('fs');

let numero_multiplicacion = 4;
let resultado = '';


console.log(process.argv);

const [, , numero] = process.argv;
const numero_multiplicacion_split = numero.split('=');
const [ , numeroParametro] = numero_multiplicacion_split;

for( let i = 1; i <= numeroParametro;i++){
    resultado += `Este es el resultado ${numeroParametro * i}\n`;
}

fs.writeFile(`./todas_multiplicacion/multiplicacion-${numeroParametro}.txt`, resultado, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});





