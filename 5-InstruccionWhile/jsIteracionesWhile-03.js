/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	clave = prompt("ingrese el número clave.");

	while(clave != "utn750"){ //cuando el dto es invalido hace verdadera la condición
clave = prompt("Clave inválida. Reingrese clave:");
	} 
	alert("Clave correcta!!!");
}//FIN DE LA FUNCIÓN
