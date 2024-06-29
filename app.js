
let texto = document.querySelector("h1");
texto.innerHTML = "Hora del desafio"

//const button = document.getElementById('.button button_consola');

function mostrarMensaje() {
    console.log('El boton fue clicado')
}

function buttonPromp() {
    var ciudad = prompt("Ingrese una ciudad de Brasil")
    alert(`Estuve en ${ciudad} y me acordé de ti.`)
}

function buttonAlert() {
    alert("Yo amo JS")
}
function suma() {
    let num1 ;
    let num2;

    num1= parseInt(prompt("Ingrese el primer valor"));
    num2= parseInt(prompt("Ingrese el segundo valor")) 

    let suma =  parseInt (num1+num2);
    alert("La suma de " +num1+ " + " + num2 + " es: "+ suma)
}
