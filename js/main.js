alert("Tienda Nike");
let usuario = "FrancoDitale";
let pass = "12345";
let ingresoParaLogeados = false;

/* INICIO DE SESIÓN */

let ingresarUsuario = prompt("Ingrese su Usuario");
if (ingresarUsuario == usuario) {
    for (i = 1; i <= 3; i++) {
        let ingresarContraseña = prompt("Ingrese su contraseña")
        if (ingresarContraseña == pass) {
            alert("Bienvenido " + ingresarUsuario + " Has ingresado correctamente");
            ingresoParaLogeados = true;
            break;
        } else {
            alert("Te quedan " + (3 - i) + "intentos")
        }
    }
} else {
    alert("Datos Incorrectos");
}


const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}


let numero1;
let numero2;
let resultado;


if (ingresoParaLogeados) {
    op = prompt("Que operacion te gustaria hacer? \n 1-Suma \n 2-Resta \n 3-División \n 4-Multiplicación \n Para Abandonar el menu poner: SALIR");
    while (op != "SALIR" && op != "salir") {
        switch (op) {
            case "1":
                numero1 = prompt("Elegir Valor 1 Para Sumar");
                numero2 = prompt("Elegir Valor 2 Para Sumar");
                resultado = sumar(numero1, numero2);
                alert("Tu resultado es " + resultado);
                if (resultado >= 0 && resultado < 100) {
                    alert("Resultado Chico");
                }
                else if (resultado >= 100 && resultado < 1000) {
                    alert("Resultado Medio");
                }
                else if (resultado >= 1000 && resultado < 10000) {
                    alert("Resultado Alto");
                } else {
                    alert("Resultado Demasiado Alto");
                }
                break;

            case "2":
                numero1 = prompt("Elegir Valor 1 Para Restar");
                numero2 = prompt("Elegir Valor 2 Para Restar");
                resultado = restar(numero1, numero2);
                alert("Tu resultado es " + resultado);
                if (resultado >= 0 && resultado < 100) {
                    alert("Resultado Chico");
                }
                else if (resultado >= 100 && resultado < 1000) {
                    alert("Resultado Medio");
                }
                else if (resultado >= 1000 && resultado < 10000) {
                    alert("Resultado Alto");
                } else {
                    alert("Resultado Demasiado Alto");
                }
                break;

            case "3":
                numero1 = prompt("Elegir Valor 1 Para Dividir");
                numero2 = prompt("Elegir Valor 2 Para Dividir");
                resultado = dividir(numero1, numero2);
                alert("Tu resultado es " + resultado);
                if (resultado >= 0 && resultado < 100) {
                    alert("Resultado Chico");
                }
                else if (resultado >= 100 && resultado < 1000) {
                    alert("Resultado Medio");
                }
                else if (resultado >= 1000 && resultado < 10000) {
                    alert("Resultado Alto");
                } else {
                    alert("Resultado Demasiado Alto");
                }
                break;

            case "4":
                numero1 = prompt("Elegir Valor 1 Para Multiplicar");
                numero2 = prompt("Elegir Valor 2 Para Multiplicar");
                resultado = multiplicar(numero1, numero2);
                alert("Tu resultado es " + resultado);
                if (resultado >= 0 && resultado < 100) {
                    alert("Resultado Chico");
                }
                else if (resultado >= 100 && resultado < 1000) {
                    alert("Resultado Medio");
                }
                else if (resultado >= 1000 && resultado < 10000) {
                    alert("Resultado Alto");
                } else {
                    alert("Resultado Demasiado Alto");
                }
                break;

            default:
                alert("Selecciona alguna opción")
        }
    }
}