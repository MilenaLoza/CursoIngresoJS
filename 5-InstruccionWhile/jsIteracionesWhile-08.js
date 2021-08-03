/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
//estrategia de resolucion
// 1- declaro variables(respuesta/numero/acumulador de positivos y acumulador de negativos)
let respuesta;
let numero;
let acumPos = 0;
let acumNeg = 1; //al ser multiplicacion, si dejo cero me va a dar cero. 
let flag = 0;
//2- generar un bucle del tipo mientras el usuario quiera (do while)
do{
//2.1- pido el numero
numero = parseInt(prompt("Ingrese un número: "));
//2.2 - analizar el signo del numero (generar un scope para los positivos y otro para los negativos)
if (numero >= 0) {
acumPos = acumPos + numero; // o acumPos += numero;
flag = 0;
} //positivos - los sumo
else {
acumNeg = acumNeg * numero; // acumNeg *= numero;
flag = 1;
} //negativos - los multiplico
	respuesta = prompt("Quiere ingresar otro número?");
} while(respuesta == "s");

if (flag == 0){
	acumNeg = 0;
} //FLAG DETECTA SI INGRESA EL CÓDIGO Y SE EJECUTA O NO, POR ESO EL 0 SIGNIFICA QUE NO LO HIZO

//3- mostramos los resultados
document.getElementById("txtIdSuma").value = acumPos;
document.getElementById("txtIdProducto").value = acumNeg;

} //FIN DE LA FUNCIÓN