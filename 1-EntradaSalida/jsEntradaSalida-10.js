/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
let importe;
let resultado;

importe = parseInt(document.getElementById("txtIdImporte").value);

resultado = importe * 0.75;

alert (+resultado);

// Estrategia de resolución
// declaración de variables sueldo nuevoSueldo aumento
// leer el sueldo
// muestro el resultado
}
