//Variables
// -------------

// Tipos de datos
// ---------
// Booleanos
const variable1 = true;
//Array
const variable2 = [1, 2, 3, 4];
//String
const numero = 123;
const string = 'Hola';
const nan = NaN;
const undefined = undefined;
const objLiteral = {
        nombre: 'Juan',
        apellido: 'Rodriguez',
    }
    //Para agregar nuevas propiedads es
objLiteral.x
    //Javascript toma todo como objeto, son instancias y tienen metodos.
    //console.log()
    // -------------

//Ejecuciones con node
// --------------


//Operadores aritmeticos
// ---------------
console.log(1 + ' hola');


//operadores de comparacion
// -----------
if (
    (' ' == ' ' && ' ' == ' ') &&
    ('' == ' ' && ' ' == ' ')
) {
    else if ()

} else {

}

const ternario = condicion ? valorTrue : valorFalse;

//Bucles
// ----------------- Repetir un sin numero de veces una operacion que manualmente no se podria utilizar

//Diferencia entre el for y el while, el for va a esperar una condicion y hay una finalizacion, y en el while va a pasar mientras suceda algo.
for (let index = 0; index < array.length; index++) {
    const element = array[index];

}
while (condition) {

}

const array = [1, 2, 3];
array.forEach /*.map*/ (function(numero) { //forEach y map devuelven un valor.
    console.log(numero)
});