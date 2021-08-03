/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese f o m:").toLowerCase();
	while (sexo != "f" && sexo != "m"){
		sexo = prompt("sexo desconocido. Ingrese nuevamente:").toLowerCase();
	}
	document.getElementById("txtIdSexo").value = sexo;
}//FIN DE LA FUNCIÓN