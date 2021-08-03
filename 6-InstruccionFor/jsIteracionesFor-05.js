function mostrar()
{
	let numero;
	for (;;){
numero = parseInt(prompt("Ingrese un número: "));
if (numero == 9) {
	break;
}	
alert("Usted ingreso el numero " + numero);
	}
}//FIN DE LA FUNCIÓN