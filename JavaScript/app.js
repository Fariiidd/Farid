const [, , operacion, ...operandos] = process.argv;

calculadora = require("./calculadora");

function sumar(...operandos) {
    return operandos.reduce((res, elem) => {
        return Number(res) + Number(elem);
    });
}

function restar(...operandos) {
    return operandos.reduce((res, elem) => {
        return Number(res) - Number(elem);
    });
}

function dividir(...operandos) {
    return operandos.reduce((res, elem) => {
        return Number(res) / Number(elem);
    });
}

function multiplicar(...operandos) {
    return operandos.reduce((res, elem) => {
        return Number(res) * Number(elem);
    });
}

switch (operacion) {
    case 'sumar':
        {
            let resultado = calculadora.sumar(...operandos);
            console.log(resultado);

        }
        break;
    case 'restar':
        {
            let resultado = calculadora.restar(...operandos);
            console.log(resultado);
        }
        break;
    case 'dividir':
        {
            let resultado = calculadora.dividir(...operandos);
            console.log(resultado);
        }
        break;
    case 'multiplicar':
        {
            let resultado = calculadora.multiplicar(...operandos);
            console.log(resultado);
        }
        break;
}