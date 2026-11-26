/* ///////////////////////////
    EJERCICIO 2 (JS)          
/////////////////////////// */

// VARIABLES
var nombre = document.getElementById('tbNombre');
var fono = document.getElementById('tbFono');
var email = document.getElementById('tbEmail');
var password = document.getElementById('tbPassword');
var bRegistrar = document.getElementById('bRegistrar');

const nombre = /^\W{0,20}$/;
const vfono = /^\d{8}$/;

// FUNCIONES

function validar(e){
    if (nombre.value == '' || 
        fono.value == "" ||
        email.value == '' || 
        password.value == '') {
        alert('Todos los campos son obligados');
        e.preventDefault();
    }
    -

}

function validarNombre(e){
    if(nombre.value.length > 20){
        alert('Texto Largo');
        nombre.focus();
        e.preventDefault();
    }
}


function validarFono(e){
    
    if (!vfono.test(fono.value)){
        alert('Fono Incorrecto');
        e.preventDefault();
        fono.focus();
    }
}



function validarEmail(e){
    if (email.value) {
        alert('Fono Incorrecto');
        e.preventDefault();
        fono.focus();
    }
}

// EVENTOS
bRegistrar.addEventListener('click',validar);
nombre.addEventListener('change',validarNombre);
fono.addEventListener('change',validarFono);


