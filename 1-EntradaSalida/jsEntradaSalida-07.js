/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	// declaración de variables
	let numero1;
	let numero2;
	let resta;

	//levanto los datos de las cajas de texto
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value );
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );

	//realizo la operación

	resta = numero1 - numero2;

	// muestro el resultado
	alert("La resta es " +resta);
}

function multiplicar()
{ 
// declaración de variables
let numero1;
let numero2;
let multiplicar;

//levanto los datos de las cajas de texto
numero1 = parseInt(document.getElementById("txtIdNumeroUno").value );
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );

//realizo la operación

multiplicar = numero1 * numero2;

// muestro el resultado
alert("La multiplicación es " +multiplicar);	
}

function dividir()
{
// declaración de variables
let numero1;
let numero2;
let division;

//levanto los datos de las cajas de texto
numero1 = parseInt(document.getElementById("txtIdNumeroUno").value );
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );

//realizo la operación

division = numero1 / numero2;

// muestro el resultado
alert("La división es " +division);	
}

