/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//1- declarar variables numero/ acumulador negativos / acumulador positivos / contador positivos / contador negativos / contador de ceros / contador de pares / promedio positivos / promedio negativos / diferencia / respuesta
	let numero;
	let seguir;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	//2-genero un bucle del tipo mientras el usuario quiera (do while)
do {
	//pido un numero
	numero = parseInt(prompt("Ingrese un numero: "));
// analizar el signo del numero y actuar en consecuencia
if(numero < 0) {
//negativos
acumuladorNegativos += numero;
contadorNegativos++;
} 
else if(numero == 0) {
//ceros
contadorCeros++;
} 
else {
//positivos
acumuladorPositivos += numero;
contadorPositivos++;
}

// analizar si el numero es par
if (numero % 2 == 0) {
	contadorPares++;
}

seguir = prompt("Quiere ingresar otro numero?: ");
} while (seguir == "s");
//hacer los calculos con los datos obtenidos del bucle
// hacemos dos if separados porque los datos no tienen nada que ver uno con otro, no pueden agruparse

if(contadorPositivos > 0) {
	promedioPositivos =  acumuladorPositivos / contadorPositivos;
}	else {
	promedioPositivos = 0;
}
if (contadorNegativos > 0) {	
	promedioNegativos = acumuladorNegativos / contadorNegativos;	
} else{
	promedioNegativos = 0;
}
diferencia = contadorPositivos - contadorNegativos;
//muestro los resultados
console.log("Suma de los negativos: " + acumuladorNegativos);
console.log("Suma de los positivos: " + acumuladorPositivos);
console.log("Cantidad de positivos: " + contadorPositivos);
console.log("Cantidad de negativos: " + contadorNegativos);
console.log("Cantidad de ceros: " + contadorCeros);
console.log("Cantidad de pares: " + contadorPares);
console.log("Promedio de positivos: " + promedioPositivos);
console.log("Promedio de negativos: " + promedioNegativos);
console.log("Diferencia: " + diferencia);
}//FIN DE LA FUNCIÓN