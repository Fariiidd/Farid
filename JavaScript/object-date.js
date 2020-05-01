let fecha = new Date(2001, 10, 4);

let diaDeLaSemana = fecha.getDay();
let dia = fecha.getDate();
let anio = fecha.getFullYear();
let mes = fecha.getMonth();

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(' Es el dia ' + dia + ' de ' + mes + ' de ' + anio);