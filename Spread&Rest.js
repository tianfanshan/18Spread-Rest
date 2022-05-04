'use strict'
//1.Ejercicios destructuring

console.log('Dado el siguiente objeto:')

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

console.log('Extrae la empleada Ana con todos sus datos personales:')

const [uno,dos,tres] = empleados
console.log(dos)

const {name,email} = tres
console.log(email)





//Usa la desestructuración para intercambiar los valores de a y b

// Inicialmente
// let a = 5;
// let b = 3;
// Al final
// let a = 3;
// let b = 5;

let a = 5;
let b = 3;

[a,b] = [b,a];

console.log(a);
console.log(b);





//2.Ejercicios spread/rest

console.log('Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.')

//const sumaTodo = (a,b) =>a + b;

const sumEveryOther = (...laSuma) => {
  let sum = laSuma.reduce((a,b)=> a + b)
  return sum
}

console.log(sumEveryOther(11, 3, 12)); //26
console.log(sumEveryOther(11, 3, 12)); //26 
console.log(sumEveryOther(11, 3)); //14




console.log('Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.')

const addOnlyNums = (...argumentos) =>{
  let numeros = argumentos.filter(argumentos => typeof argumentos == 'number')
  let sum = numeros.reduce((a,b)=> a+b)
  return sum
}

console.log(addOnlyNums(1, 'perro', 2, 4)); //7




console.log('Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.')

const countTheArgs = (...args) =>{
  let index = args.length
  return index
}

console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); //4



console.log('Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).')

let arrayUno = [15,'dos',true]
let arrayDos = ['Juan',70,false]

const listarArticulos = (arrayUno,arrayDos) => {
  const arrayTres = [...arrayUno,...arrayDos]
  return arrayTres
}

console.log(listarArticulos(arrayUno,arrayDos))


//3.Extra

console.log('Dado el siguiente objeto:')

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

console.log('Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana')

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;

const  copyHIGH_TEMPERATURES= {...HIGH_TEMPERATURES}
copyHIGH_TEMPERATURES.today = 60,
copyHIGH_TEMPERATURES.tomorrow = 50

const maximaHoy = copyHIGH_TEMPERATURES.today
const maximaManana = copyHIGH_TEMPERATURES.tomorrow

console.log(maximaHoy)
console.log(maximaManana)

const {today,tomorrow} = HIGH_TEMPERATURES

console.log(today)
console.log(tomorrow)





console.log('Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.')

const onlyUniques = (...argumentos) =>{
  return Array.from(new Set(argumentos))
}

console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo')); 
// ['gato', 'pollo', 'cerdo']
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]





console.log('Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.')

const combineAllArrays = (...combinados) =>{
  return combinados.reduce((a,b)=>[...a, ...b])
}

console.log(combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]));
// [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]));
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]





console.log('Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.')

const sumAndSquare = (...elevador) => {
  const aCuadrado = elevador.map((e)=>e*e)
  return aCuadrado.reduce((a,b)=>a+b)
}

console.log(sumAndSquare(2,3,4,5,6,7,8));












