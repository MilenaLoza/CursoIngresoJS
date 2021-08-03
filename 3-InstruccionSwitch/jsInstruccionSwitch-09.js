function mostrar()
{
	let precio = 15000;
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

switch(estacion){
	case "Invierno":
	if (destino =="Bariloche"){
		alert("El precio a pagar es "+precio*1.2);
	} else if(destino == "Mar del plata"){
		alert("El precio a pagar es "+precio*0.8);
	}
	else{
		alert("El precio a pagar es "+precio*0.9);
	}
	break;

	case "Verano":
	if(destino == "Bariloche"){
		alert("El precio a pagar es "+precio*0.8);
	} else if(destino == "Mar del plata") {
		alert("El precio a pagar es "+precio*1.2);
	} else {
		alert("El precio a pagar es "+precio*1.1);
	}
	break;

	case "Otoño":
	case "Primavera":
	if(destino== "Cordoba") {
		alert("El precio a pagar es "+precio);
	} else {
		alert("El precio a pagar es " +precio*1.1);
	}
	break;
}


}//FIN DE LA FUNCIÓN