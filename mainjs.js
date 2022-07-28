// // let hamburguesa = 900;
// // let papasfrita = 100;
// // let bebida = 150;
// // let condimentos = 50;
// let precio = 0;
// let cantidad = 0;
// // let envio = 150;
// let precioTotal = 0;
// let VolverComprar = false;
// // const compra = (a, b) => a * b;
// const nombre = ["Santi", "santi", "Santiago", "santiago", "MrBurger", "mrburger"]

// //Array con Objetos

// const productos = [
// //--- Hamburguesas ---
//     { id: 1, producto: "MrBurger Simple", precio: 800, cantidad: 0},
//     { id: 2, producto: "MrBurger Medium", precio: 1200, cantidad: 0},
//     { id: 3, producto: "MrBurger Big", precio: 1400, cantidad: 0},
// //--- Fritas ---
//     { id: 4, producto: "Patatas española", precio: 300, cantidad: 0},
//     { id: 5, producto: "Patatas en bastón", precio: 300, cantidad: 0},
//     { id: 6, producto: "Patatas cerilla", precio: 300, cantidad: 0},
//     { id: 7, producto: "Patatas paja", precio: 300, cantidad: 0},
//     { id: 8, producto: "Patatas onduladas", precio: 300, cantidad: 0},
// //--- Bebidas ---
//     { id: 9, producto: "Agua", precio: 200, cantidad: 0},
//     { id: 10, producto: "Coca-Cola", precio: 150, cantidad: 0},
//     { id: 11, producto: "Pepsi", precio: 150, cantidad: 0},
//     { id: 12, producto: "Sprite", precio: 150, cantidad: 0},
// ];

// //método push
// //--- condimentos ---
// productos.push ( { id: 13, producto: "Ketchup", precio: 20, cantidad: 0});
// productos.push ( { id: 14, producto: "Mayonesa", precio: 20, cantidad: 0});
// productos.push ( { id: 15, producto: "Mostaza", precio: 20, cantidad: 0});
// productos.push ( { id: 16, producto: "Salsa Tártara", precio: 20, cantidad: 0});


// //Método filter, filtración por precio por menor o mayor.
// const resultado1 = productos.filter ( (el) => el.precio < 500 )
// const resultado2 = productos.filter ( (el) => el.precio > 500 )
// const resultado3 = productos.filter ( (el) => el.precio < 200 )
// const resultado4 = productos.filter ( (el) => el.precio > 200 )

// console.log(resultado1);
// console.log(resultado2);
// console.log(resultado3);
// console.log(resultado4);

// //Método map + el supuesto costo que vendría siendo el envio a 150

// const Envio = productos.map( producto => {
//     return{
//         producto: producto.producto,
//         precio: producto.precio + 150
//     }
// })

// console.log (Envio)

// //*--------------------------------------alerta de bienvenida--------------------------------------*

// alert ("¡Bienvenido/a a MrBurger las mejores hamburguesas de Bs As!");

// let nombreUsuario = "";
// //llamada de la clase id del html a js para hacer la función de mostrar nombre de la persona+la bienvenida a la pagina.
// let titulo = document.getElementById("bienvenida")

// do {

//     if ( nombreUsuario != "") {
//         alert("el nombre o apodo ingresado es del propietario, ingrese otro")
//     }

//     nombreUsuario = prompt("Para comenzar queremos saber su nombre o apodo");
// } while (nombre.indexOf(nombreUsuario) != -1 );

// alert("Bienvenido a mi pagina web "+nombreUsuario+"!")
// //aca se mostrara la bienvenida a esa persona y su nombre debajo de h1 de mi pagina.
// titulo.innerText = "Bienvenido a mi pagina web "+nombreUsuario+"!";

// //*--------------------------------------Bucle Do.. While--------------------------------------*


// do {      
//     let Comidas= prompt(` Bienvenidos a MrBurger \n ¿Que desea pedir? \n ingrese el numero que quiere y presione aceptar.
//     >>Hamburguesas<<
//     1- MrBurger Simple precio: 800.
//     2- MrBurger Medium precio: 1200.
//     3- MrBurger Big precio: 1400.
//     >>Papas Fritas<<
//     4- Patatas española precio: 300.
//     5- Patatas en bastón precio: 300.
//     6- Patatas cerilla precio: 300.
//     7- Patatas paja precio: 300.
//     8- Patatas onduladas precio: 300.
//     >>Bebida<<
//     9- Agua precio: 200.
//     10- Coca-Cola precio: 150.
//     11- Pepsi precio: 150.
//     12- Sprite precio: 150.
//     >>Condimentos<<
//     13- Ketchup precio: 20.
//     14- Mayonesa precio: 20.
//     15- Mostaza precio: 20.
//     16- Salsa Tártara precio: 20.
//     `)
//     cantidad = Number(prompt("¿Cuantos desea llevar?"));
    
//     switch (Comidas) {
//         case "1":
//             precio = 800;
//             break;
//         case "2":
//             precio = 1200;
//             break;
//         case "3":
//             precio = 1400;
//             break;
//         case "4":
//             precio = 300;
//             break;
//         case "5":
//             precio = 300;
//             break;
//         case "6":
//             precio = 300;
//             break;
//         case "7":
//             precio = 300;
//             break;
//         case "8":
//             precio = 300;
//             break;
//         case "9":
//             precio = 200;
//             break;
//         case "10":
//             precio = 150;
//             break;
//         case "11":
//             precio = 150;
//             break;
//         case "12":
//             precio = 150;
//             break;
//         case "13":
//             precio = 20;
//             break;
//         case "14":
//             precio = 20;
//             break;
//         case "15":
//             precio = 20;
//             break;
//         case "15":
//             precio = 20;
//             break;
//         default:
//             alert("No has ingresado nada aun, de en aceptar y vuelva a intentar")
//             break;
//     }    
    
//     function multiplicar(precio, cantidad) {
//         precioTotal += precio * cantidad;
//     }
//     function MostrarPrecioTotal(precioTotal) {
//         console.log(precioTotal);
//     }
//     multiplicar(precio, cantidad);
//     MostrarPrecioTotal(precioTotal);

//     VolverComprar = confirm(`Su total de compra es de ${precioTotal}\n¿Desea llevar algo mas?\nDe en aceptar para continuar su compra o en cancelar para finalizar la compra`)
// } while (VolverComprar);

// fincompra();

//     function fincompra() {

//         alert("Total de su compra en espera es de: "+precioTotal);
        
//         let fincompraCompra = confirm ('Si usted quiere rechazar todo de en CANCELAR, si desea continuar y esperar su orden de en ACEPTAR');
            
//         if (fincompraCompra) {
//             alert("Su total de la compra esta en espera, sea paciente y estará lista!");
//         }
//     }

