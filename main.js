let Comida = "";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let VolverComprar = false;

alert ("¡Bienvenido a MrBurger las mejores hamburguesas de Bs As!");

let NombreIngresado = prompt("Para comenzar queremos saber su nombre:")

console.log(NombreIngresado);

alert("Bienvenido a mi pagina web "+NombreIngresado)


do {
    Comida = prompt("Bienvenidos a MrBurger \n ¿Que desea pedir para llevar? \n hamburguesa, papa fritas, bebidas, condimentos")
    cantidad = Number(prompt("¿Cuantos desea llevar?"));
    switch (Comida) {
        case "hamburguesa":
            precio = 900
            break;
        case "papa fritas":
            precio = 100
            break;
        case "bebidas":
            precio = 150
            break;
        case "condimentos":
            precio = 50
            break;
        default:
            alert("No has ingresado nada aun, de en aceptar y vuelva a intentar")
            break;
    }
    precioTotal += precio * cantidad;

    VolverComprar = confirm("¿Algo más desea llevar?")
} while (VolverComprar);

alert("Total de su compra: "+precioTotal);