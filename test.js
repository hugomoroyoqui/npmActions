class Clase {
    constructor(nombre){
        this.nombre = nombre;
        this.calculo = (edad) => {
            return edad >= 18 ? 'Mayor' : 'Menor'
        }
    }
}

const instancia = new Clase('Hugo');
//console.log(instancia);
console.log(instancia.nombre);
console.log(instancia.calculo(26));