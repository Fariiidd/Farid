let notas = [3, 5, 8, 10, 9, 7, 8, 8];

//Map

let notasHasta100 = notas.map(function(numero) {
    return numero * 10;
})
console.log(notasHasta100);

let notasAprobadas = notas.filter(function(numero) {
    return numero >= 4;
})
console.log(notasAprobadas);

let resultadoFinal = notas.reduce(function(estado, numero) {
    return estado + numero;
})
console.log(resultadoFinal);

notas.forEach(function(valor, indice) {
    console.log(' El valor ' + valor + ' esta en el indice ' + indice);
})