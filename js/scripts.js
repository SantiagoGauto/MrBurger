//llamando a todos los botones de las cards
const Clickbutton = document.querySelectorAll('.button')
//llamando al body de la carta
const tbody = document.querySelector('.tbody')
// guardado de información, todo lo que este ahi dentro se va a imprimir o renderizar en la sesión carrito.

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
//Toastify de https://sweetalert2.github.io/#examples

let carrito = []


//aca recorremos las matrices de los botones al hacer click y se ejecute la función addToCarritoItem.
Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  //botón al cual se le hace click
  const button = e.target
  //con el atributo closest estamos diciendo que obtenga el contenedor que obtenga la clase mas cercana a .card
  const item = button.closest('.card')
  //lamamos al titulo de la carta, de esta forma obtenemos el contenido con textContent.
  const itemTitle = item.querySelector('.card-title').textContent;
  //lamamos al precio de la carta, de esta forma obtenemos el contenido con textContent.
  const itemPrice = item.querySelector('.precio').textContent;
  //lamamos a la imagen de la carta, con src queremos lo que se encuentra dentro, en este caso la imagen.
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}

//Uso de Toast cuando se da al botón "Añadir a carrito".
const comprador = document.querySelectorAll('.buy')
comprador.forEach(el => el.addEventListener('click', () => {
  Toast.fire({
    icon: 'success',
    title: 'Compra realizada con éxito',
    background: '#026e3d',
    color: '#fff'
  })
}))

function addItemCarrito(newItem){

  // //constante del alert para que aparezca.
  // const alert = document.querySelector('.alert')

  // //cada vez que se compra un producto aparezca un alert como notificación de la compra.
  // setTimeout( function(){
  //   alert.classList.add('hide')
  // }, 1000)
  //   alert.classList.remove('hide')

  // llamamos al input elemento de la cantidad
  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  // recorremos el carrito
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      //con esto estamos sumando la cantidad.
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      // cada ves que pase esto sume de igual forma. Con lo que hicimos hasta ahora se va sumando la cantidad al carrito sin repetirse una bajo de otra y que estén dentro de una misma cantidad.
      

      //aca se va a ejecutar cuando se haga la sumatoria.
      CarritoTotal()

      //con el return null no se va a ejecutar los 2 de abajo carrito.push y el renderCarrito.
      return null;
    }
  }
  //dentro de nuestra variable carrito le voy a agregar el newItem, simplemente va a ir guardando cada ves que ocurra este proceso.
  carrito.push(newItem)
  
  renderCarrito()
} 

// aca están los datos esenciales del carrito.
function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    //creamos un elemento llamado tr el que se encuentra dentro de tbody.
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    //aca dentro creamos un nuevo contenido a tr.
    const Content = `
    
    <th scope="row"></th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    // dentro de ${} estamos llamando a la variable que creamos de newItem.
    tr.innerHTML = Content;
    // esto dice: dentro del tr agrégale el Content desde <th></th>.
    tbody.append(tr)
    // esto dice: y al tbody.append agrégale el tr

    // para que se eliminen los elementos por elección del usuario.
    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)

    // sumar la cantidad con las flechitas.
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })

  //aca se va a ejecutar cuando se haga la sumatoria.
  CarritoTotal()
}


// aca vemos ya el total de la compra.
function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  //forEach para recorre ese valor.
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
  //guardar el ultimo valor antes de ser renderizado. Cada vez que se cumpla esta función se me guarde y no se me pierda.
}

//función de remover, eliminar con el botón.
function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      //con esto estamos eliminando un elemento dentro del carrito
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  //cada vez que se elimina el producto aparezca un alert como notificación.

  setTimeout( function(){
    alert.classList.add('remove')
  }, 0)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

//para vaciar todo el carrito y cartel
const vaciador = document.getElementById('vaciado')
vaciador.addEventListener('click', () => {
  Toast.fire({
    icon: 'warning',
    title: 'Carrito vacío',
    background: '#d94444',
    color: '#fff'
  })
  carrito = []
  renderCarrito()
})

// Función para sumar la cantidad de los objetos
function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  // recorremos el carrito
  carrito.forEach(item => {
    if(item.title.trim() === title){
      //aca validamos para que el usuario no ponga números negativos para que no se baje el precio.
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      // con esto estamos cambiando el valor de mi matriz de la cantidad.
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}


//Un localStorage para que cada vez que se refresque no se borren los datos.
function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

//cuando refrescamos la pagina se va a ejecutar esta función.
window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    //guardamos todo lo que tenga el carrito previamente.
    carrito = storage;
    //para que se cumpla y la ejecute.
    renderCarrito()
  }
}

// alerta a la hora de dar a comprar
const buttonMessageBuyItems = document.getElementById('comprado');
buttonMessageBuyItems.addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  swalWithBootstrapButtons.fire({
    background: '#bf7400',
    color: '#e9ecef',
    title: '¿Finalizar compra?',
    text: "¡De en cancelar para continuar!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, adelante!',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
  }).then((result) => {
    //aceptado de la compra.
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        '¡Finalizado!',
        'Su compra a sido actualizada con éxito! :)',
        'success'
      )
      //vaciar todo el carrito a la hora de dar a 'Si, adelante!', simulando el fin de la compra y poder comenzar con otra.
      carrito = []
      renderCarrito()
      // cancelado de la compra, poder continuar sin perder todo el proceso de la compra.
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Continue con su compra! :)',
        'error',
      )
    }
  })
});

//##############################################################################################################################
//########################################
//-Eventos
//########################################
//##############################################################################################################################

const formulario = document.querySelector("#formulario");
const nombre = document.getElementById("names")
const edad = document.getElementById("edad")
const gmail = document.getElementById("email")

//uso del evento Submit, cuando el usuario puse el botón de enviar se mostraran los datos en la consola.

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
    event.preventDefault();


    console.log(nombre.value);
    console.log(edad.value);
    console.log(gmail.value);
}

//uso del evento input para el buscador.
const input1 = document.getElementById("buscador")

input1.addEventListener("input", () => {
    console.log(input1.value)
})

//habilitar y deshabilitar un botón al llenar formulario nombre, edad y email solo

function habilitar(){
    val = 0;

    // if(names.value == ""){
    //     val++;
    // }
    names.value == "" && val++;
    // if(edad.value == ""){
    //     val++;
    // }
    edad.value == "" && val++;
    // if(email.value == ""){
    //     val++;
    // }
    email.value == "" && val++;
    //simplifico la lineas de código de arriba usando operador and

    // if(val == 0){
    //     document.getElementById("btn").disabled = false;
    // } else {
    //     document.getElementById("btn").disabled = true;
    // }

    //simplifico la lineas de código de arriba usando el operador ternario.
    val == 0 ? document.getElementById("btn").disabled = false : document.getElementById("btn").disabled = true;
}
document.getElementById("names").addEventListener("keyup", habilitar);
document.getElementById("edad").addEventListener("keyup", habilitar);
document.getElementById("email").addEventListener("keyup", habilitar);
document.getElementById("btn").addEventListener("click", () => {
    Swal.fire({
        title: '¡Se a enviado todo correctamente!',
        width: 400,
        icon: 'success',
        padding: '2em',
        background: '#b8af00',
        color: '#603b00',
        backdrop: `
        #603b00b5
        url("imagenes/hamburguesa.gif")
        right top
        no-repeat
        `,
        showConfirmButton: false,
        timer: 1500
    })
});

// usando async y await con fetch.

const lista = document.getElementById("listado");

const texto = async () => {
  const response = await fetch ('data.json')
  const data = await response.json()
  data.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
                    <h4>${post.titulo}</h4>
                    <p>${post.resumen}</p>
    `
    lista.append(li)
  })
}

texto ()

// fetch para los títulos y la historia/reseña.

// fetch('data.json')
//     .then( (response) => response.json())
//     .then( (data) => {
//         data.forEach(post => {
//             const li = document.createElement("li");
//             li.innerHTML = `
//                             <h4>${post.titulo}</h4>
//                             <p>${post.resumen}</p>
//             `
//             lista.append(li)
//         });
//     })

// animación fachera para las imagenes de las hamburguesas :D

var $conteudoGeral = document.querySelector(".conteudo-geral");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".componente"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".componente-botao-fechar")
);

setTimeout(function () {
  $conteudoGeral.classList.remove("js-conteudo-geral");
}, 200);

$conteudoEmArray.forEach(function ($componente) {
  $componente.addEventListener("click", function () {
    if (this.classList.contains("caixa-conteudo-ativo")) return;
    $conteudoGeral.classList.add("caixa--componente-ativo");
    this.classList.add("caixa-conteudo-ativo");
  });
});

$botoesDeFechar.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $conteudoGeral.classList.remove("caixa--componente-ativo");
    document
      .querySelector(".componente.caixa-conteudo-ativo")
      .classList.remove("caixa-conteudo-ativo");
  });
});

// efecto tiltable card (imagen alado de la mini-reseña de la pagina)

let el = document.getElementById('w-101')
const height = el.clientHeight
const width = el.clientWidth
el.addEventListener('mousemove', handleMove)
function handleMove(e) {
  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 10 * ((xVal - width / 2) / width)
  const xRotation = -10 * ((yVal - height / 2) / height)

  const string = 'perspective(1500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
    el.style.transform = string
}
el.addEventListener('mouseout', function () {
    el.style.transform = 'perspective(1500px) scale (0.2) rotateX(0) rotateY(0)'
})
el.addEventListener('mousedown', function () {
    el.style.transform = 'perspective(1500px) scale (0.2) rotateX(0) rotateY(0)'
})
el.addEventListener('mouseup', function () {
    el.style.transform = 'perspective(1500px) scale (1) rotateX(0) rotateY(0)'
})