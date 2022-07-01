let hamburguesa = 900;
let papasfrita = 100;
let bebida = 150;
let condimentos = 50;
let precio = 0;
let cantidad = 0;
let envio = 150;
let precioTotal = 0;
let VolverComprar = false;
const nombre = ["Santi", "santi", "Santiago", "santiago", "MrBurger", "mrburger"]
const Comidas = [
    {
        id: 1,
        comida: "hamburguesa",
    },
    {
        id: 2,
        comida:"papasfrita",
    },
    {
        id: 3,
        comida:"bebida",
    },
    {
        id:4,
        comida:"condimentos",
    }
];

alert ("¡Bienvenido a MrBurger las mejores hamburguesas de Bs As!");

let nombreUsuario = "";

do {

    if ( nombreUsuario != "") {
        alert("el nombre o apodo ingresado es del propietario, ingrese otro")
    }

    nombreUsuario = prompt("Para comenzar queremos saber su nombre o apodo");
} while (nombre.indexOf(nombreUsuario) != -1 );

alert("Bienvenido a mi pagina web "+nombreUsuario)

















do {
    Comidas.comida = prompt(` Bienvenidos a MrBurger \n ¿Que desea pedir?
    hamburguesa / precio=${hamburguesa}
    papa frita / precio=${papasfrita}
    bebida / precio=${bebida}
    condimentos / precio=${condimentos}`)
    cantidad = Number(prompt("¿Cuantos desea llevar?"));
    switch (Comidas.comida) {
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

fincompra();

function fincompra() {

    alert("Total de su compra en espera es de: "+precioTotal);
    
    let fincompraCompra = confirm ('¿Esta seguro de finalizar su compra? de en CANCELAR para rechazar todo');
        
    if (fincompraCompra) {
        alert("Su total de la compra esta en espera, sea paciente y estará lista!");
    }
}