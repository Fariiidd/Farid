let laMitad = numero => numero / 2;
console.log(laMitad(8));

let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(8, 2));

let tengoQueTrabajar = dia => {
    if (dia == 'sabado' || dia == 'domingo') {
        return 'No tenes que trabajar';
    } else {
        return 'Si tenes que trabajar';
    }
}
console.log(tengoQueTrabajar('lunes'));