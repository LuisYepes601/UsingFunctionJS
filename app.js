
let texto = document.querySelector("h1");
texto.innerHTML = "Hora del desafio"

function cambiarContenido(element, texto) {
    let modificar = document.querySelector(element);
    modificar.innerHTML = texto;
}

cambiarContenido(".text", "Hora del desafio!");
//cambiarContenido("#parrafo_de_prueba","New pargraph"); //usando el id
/** 
 * function cambiarStyle(id,color){
let variable = document.getElementById(id)
variable.style.color=color
}

cambiarStyle("parrafo_de_prueba","white");


*/

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
    let num1;
    let num2;

    num1 = parseInt(prompt("Ingrese el primer valor"));
    num2 = parseInt(prompt("Ingrese el segundo valor"))

    let suma = parseInt(num1 + num2);
    alert("La suma de " + num1 + " + " + num2 + " es: " + suma)
}

function suma2(num1, num2) {
    let condicion = true;
    while (condicion) {
        num1 = parseInt(prompt("Ingrese el primer valor"));
        num2 = parseInt(prompt("Ingrese el segundo valor"))

        if (num1 !== null && num2 !== null) {
            let suma = parseInt(num1 + num2);
            alert("La suma de " + num1 + " + " + num2 + " es: " + suma)
            condicion = false;
        } else {
            alert("Has salido de la aplicacion")
            condicion = false;
        } condicion = false;


    
}
}

//let variable = document.querySelector(".bottones");
//variable.setAttribute("style",  "background-color: red;");

function cambiarStyleAtributo(elemento,style){
    let variable = document.querySelector(elemento)
    variable.setAttribute("style",style )
}

//cambiarStyleAtributo("header","text-align : left; color : red");