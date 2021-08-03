function mostrar() {
//acumulador captura al numero para dejar libre la variable numero y entonces recibir al siguiente
//acumula lo que ya tengo y le sumo algo más
// diferencia con i (contador), a i le sumo una constante, se incrementa en valores fijos, ambos son acumuladores
// pero a acumulador le sumo dos variables. 
let numero;
let acumulador = 0; //cumple la funcion de suma, siempre empieza con un valor
let promedio;
let i = 0; //o contador

while(i < 5){
    numero = parseInt(prompt("Ingrese un número: "));
    acumulador = acumulador + numero;
    i = i + 1;
}
promedio = acumulador / 5;
document.getElementById("txtIdSuma").value = acumulador;
document.getElementById("txtIdPromedio").value = promedio;
}
