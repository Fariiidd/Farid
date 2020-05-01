let legueOfLegend = {
    rango: 'plata resentido',
    pentakills: 3,
    dias: 'todos los dias',
    notificacion: function() {
        return ' soss un ' + this.rango
    }
}
console.log(legueOfLegend.notificacion());