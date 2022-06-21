let Comida = "";
let hamburguesa = 900;
let papasfrita = 100;
let bebida = 150;
let condimentos = 50;
let precio = 0;
let cantidad = 0;
let envio = 150;
let precioTotal = 0;
let VolverComprar = false;

alert ("¡Bienvenido a MrBurger las mejores hamburguesas de Bs As!");

let NombreIngresado = prompt("Para comenzar queremos saber su nombre:")

console.log(NombreIngresado);

alert("Bienvenido a mi pagina web "+NombreIngresado)

do {
    Comida = prompt(` Bienvenidos a MrBurger \n ¿Que desea pedir?
    hamburguesa / precio=${hamburguesa}
    papa frita / precio=${papasfrita}
    bebida / precio=${bebida}
    condimentos / precio=${condimentos}`)
    cantidad = Number(prompt("¿Cuantos desea llevar?"));
    switch (Comida) {
        case "hamburguesa":
            precio = hamburguesa //precio = 900
            break;
        case "papa frita":
            precio = papasfrita //precio = 100
            break;
        case "bebida":
            precio = bebida //precio = 150
            break;
        case "condimentos":
            precio = condimentos //precio = 50
            break;
        default:
            alert("No has ingresado nada aun, de en aceptar y vuelva a intentar")
            break;
    }

    function multiplicar(precio, cantidad) {
        precioTotal += precio * cantidad;
    }
    function MostrarPrecioTotal(precioTotal) {
        console.log(precioTotal);
    }
    multiplicar(precio, cantidad);
    MostrarPrecioTotal(precioTotal);

    VolverComprar = confirm(`Su total de compra es de ${precioTotal}\n¿Desea llevar algo mas?\nDe en aceptar para continuar su compra o en cancelar para finalizar la compra`)
} while (VolverComprar);

alert("Total de su compra en espera es de: "+precioTotal);