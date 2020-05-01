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

module.exports = {
    "sumar": sumar,
    "restar": restar,
    "dividir": dividir,
    "multiplicar": multiplicar
}