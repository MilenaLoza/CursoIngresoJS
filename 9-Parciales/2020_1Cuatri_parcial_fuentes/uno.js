
function mostrar()
{
	//declaraacion de variables
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumuladorBarbijo = 0;
	let acumuladorAlcohol = 0;
	let acumuladorJabon = 0;
	let contBarbijo = 0;
	let contAlcohol = 0;
	let contJabon = 0;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let promedioCompra;
	let mayorTipo;
	let flagAlcohol = 0;
	let mensajeAlcohol = "No se compraron alcoholes";
	let mensajeb;
	let mensajeJabon;
	//tengo que generar un bucle que se repita 5 veces
	//(tipo,precio,cantidad,marca,fabricante) valido todo segun corresponda
	//utilizo un for porque conozco de antemano la cantidad de repeticiones
for (let i=0; i < 5; i++){
	tipo = prompt(`Ingrese tipo "barbijo", "jabon" o "alcohol": `);
	while (tipo != "barbijo" && tipo!= "jabon" && tipo!= "alcohol") {
		tipo = prompt(`Tipo inválido. Ingrese tipo "barbijo", "jabon" o "alcohol": `)
	}
	
	precio = parseInt(prompt("Ingrese precio $(100-300):"));
	while (precio < 100 || precio > 300 || isNaN(precio)) {
		precio = parseInt(prompt("Ingrese precio $(100-300):"));
	}

	cantidad = parseInt(prompt("Ingrese cantidad máx 1000:"));
	while (!(cantidad > 0 && cantidad <1000)) {
	cantidad = parseInt(prompt("Error. Ingrese cantidad máx 1000:"))
	}

	marca = prompt("Ingrese marca: ");
	fabricante = prompt("Ingrese fabricante: ");

	switch(tipo){
		case "barbijo":
			acumuladorBarbijo += cantidad;
			contBarbijo++;
			break;
		case "alcohol":
			acumuladorAlcohol += cantidad;
			contAlcohol++;
			if (flagAlcohol == 0 || precioAlcoholBarato > precio) {
				precioAlcoholBarato = precio;
				cantidadAlcoholBarato = cantidad;
				fabricanteAlcoholBarato = fabricante;
				flagAlcohol = 1;
			}
			break;
		case "jabon":
			acumuladorJabon += cantidad;
			contJabon++;
			break;
	}
if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
	//acumAlcohol sea el mayor
	mayorTipo = "Alcohol";
	promedioCompra = acumuladorAlcohol / contAlcohol;

} 
else if (acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >= acumuladorAlcohol) {
	//acumBarbijo sea el mayor
	mayorTipo = "Barbijo";
	promedioCompra = acumuladorBarbijo / contBarbijo;
}
else {
	//acumJabon sea el mayor
	mayorTipo = "Jabón";
	promedioCompra = acumuladorJabon / contJabon;
}
if (flagAlcohol == 1) {
	mensajeAlcohol = "Fabricante alcohol barato: " + fabricanteAlcoholBarato + 
	"\nCantidad: " + cantidadAlcoholBarato + 
	"\nPrecio: " + precioAlcoholBarato;
}
}
mensajeb = "B- Tipo con mas unidades: " + mayorTipo + "Promedio: " + promedioCompra;
mensajeJabon = "C- Unidades de jabon: " + acumuladorJabon;
alert(mensajeAlcohol + "\n" + mensajeb + "\n" + mensajeJabon);


	//A-tengo que reconocer si el producto es alcohol y recordar el precio, la cantidad y el fabricante del de menor precio
	//B-tengo que acumular las cantidades de cada tipo y del acumulador mayor calcular el promedio por compra


}
