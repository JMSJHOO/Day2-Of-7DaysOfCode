let nombre = prompt('¿Cual es tu nombre?');
while(nombre === ''){
    alert('Debes ingresar tu nombre');
    nombre = prompt('¿Cual es tu nombre?');
}

let edad = parseInt(prompt('¿Cuantos años tienes?'));
while(edad < 7 || isNaN(edad)){
    alert('Ingrese una edad valida y mayor a 7');
    edad = parseInt(prompt('¿Cuantos años tienes?'));
}
let lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');
while(lenguaje === ''){
    alert('Ingrese un lenguaje');
    lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');
}
const mensaje = (`Hola ${nombre}, tienes ${edad} años y ya etas aprendiendo ${lenguaje}.`);
alert(mensaje);