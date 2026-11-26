/* ///////////////////////////
    EJERCICIO 1 (JS)          
/////////////////////////// */

// VARIABLES
var precioCompra = document.getElementById('tbPC');
var precioVenta = document.getElementById('tbPV');
var utilidad = document.getElementById('tbU');
var bCalcular = document.getElementById('bCalcular');

// FUNCIONES
function calcular(){
  utilidad.value = precioVenta.value - precioCompra.value;
}
// EVENTOS 
//bCalcular.addEventListener('click',calcular);

