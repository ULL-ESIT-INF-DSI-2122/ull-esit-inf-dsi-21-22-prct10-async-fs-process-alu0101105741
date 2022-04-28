/* eslint-disable max-len */
import {readFile} from 'fs';

/**
 * Function that allow us to read a file and do operation with the
 * numbers of its content
 */
readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log('There must be a problem with the file you are trying to read');
  } else {
    let suma: number = 0;
    const numbers: string[] = data.toString().split(', ');
    switch (process.argv[3]) {
      case '+':
        numbers.forEach((number) => {
          suma += +number;
        });
        break;
      case '-':
        numbers.forEach((number) => {
          suma -= +number;
        });
        break;
      case '*':
        suma = 1;
        numbers.forEach((number) => {
          suma = suma * +number;
        });
        break;
      default:
        console.log('Introduzca un operador válido (+, - o *)');
        break;
    }

    console.log(suma);
  }
});
