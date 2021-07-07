/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo;
let nuevoSueldo;

sueldo = parseInt(document.getElementById("txtIdSueldo").value);

nuevoSueldo = sueldo * 1.10;

alert (+nuevoSueldo);
}

// Estrategia de resolución
// declaración de variables sueldo nuevoSueldo aumento
// leer el sueldo
// muestro el resultado
