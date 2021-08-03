function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;
switch(mes){
	case "Febrero":
	alert("Este mes no tiene más de 29 días");
	break;
	
	default:
	alert("Este mes tiene más de 30 días");
}
	
	


}//FIN DE LA FUNCIÓN