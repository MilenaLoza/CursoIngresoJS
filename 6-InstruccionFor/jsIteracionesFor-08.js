function mostrar()
{

let numero;

numero = parseInt(prompt("Ingrese un nuémero: "));
for (let i = 1; i <= numero; i++){
if (numero % i == 0){
	contadorDivisores++;
}
}
if(contadorDivisores == 2){
	alert(numero + " es primo");
} else {
	alert(numero + " no es primo");
}
}//FIN DE LA FUNCIÓN