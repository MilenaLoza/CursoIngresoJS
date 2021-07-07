/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// declaración de variables
	let numero1;
	let numero2;
	let suma;

	//levanto los datos de las cajas de texto
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value );
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );

	//realizo la operación

	suma = numero1 + numero2;

	// muestro el resultado
	alert("La suma es " +suma);

}


