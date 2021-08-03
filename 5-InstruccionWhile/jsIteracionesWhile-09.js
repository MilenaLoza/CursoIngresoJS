/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
//1- declaración de variables --> numero/maximo/minimo/seguir/
let numero;
let maximo;
let minimo;
let seguir;
let flag = 0;
//2- generar un bucle del tipo mientras el usuario quiera (do-while)
//cosas que tengo que hacer dentro del bucle (más de una vez)
//2.1 - pedir un numero
do {
//2.2-valido en dato (que sea un numero)
numero = parseInt(prompt("Ingrese un número:"));
if (flag == 0){
//2.3 - me fijo si es la priemra vez
//2.3.1 - si es la primera vez --> asigno el numero a maximo y a minimo
maximo = numero;
minimo = numero;
flag = 1;
} else{
//2.3.2- si no es la primera vez
//2.3.3-me fijo si el numero es un nuevo maximo o un nuevo minimo y de ser asi actualizo la variable maximo o minimo segun corresponda
	if (numero > maximo) {
	maximo = numero;
	} else if (numero < minimo) {
	minimo = numero;
	}
}
seguir = prompt("Quiere ingresar otro numero: ");
}
while (seguir == "s");

//-----
// despues del bucle
//3-muestro los resultados
document.getElementById("txtIdMaximo").value = maximo;
document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN