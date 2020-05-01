let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
};
for (const llave in bart) {
    console.log(' En el atributo ' + llave + ' se encuentra el valor ' + bart[llave]);
};