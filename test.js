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
console.log(instancia.calculo(15));

/*fetch("https://app-mykey.herokuapp.com/api/brands")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})*/

const axios = require('axios'); 
async function makeRequest() { 
const config = { 
method: 'get', 
url: 'https://app-mykey.herokuapp.com/api/brands'
} 
 
let res = await axios(config) 
console.log(res.status); 
} 
 
makeRequest(); 

