/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let acumulador = 0;
	let contador = 0;
	let promedio;
	let respuesta;
	do{
		numero = parseInt(prompt("Ingrese un número"));
		acumulador= acumulador + numero;
		contador++; //o contador = contador + 1;
		respuesta = prompt("Quiere ingresar otro número?");
	} while (respuesta == "s");
	promedio = acumulador / contador;
	

document.getElementById("txtIdSuma").value = acumulador;
document.getElementById("txtIdPromedio").value = promedio;
}
//FALTA RESOLVER