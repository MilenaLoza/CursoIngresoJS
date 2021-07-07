/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// declaración de variables
let dividendo;
let divisor;
let resto;

//levanto los datos de las cajas de texto
dividendo = document.getElementById("txtIdNumeroDividendo").value;
divisor = document.getElementById("txtIdNumeroDivisor").value;

//realizo la operación

resto = dividendo % divisor;

// muestro el resultado
alert("El resto es " +resto);	
}
