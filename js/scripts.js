//llamando a todos los botones de las cards
const Clickbutton = document.querySelectorAll('.button')
//llamando al body de la carta
const tbody = document.querySelector('.tbody')
// guardado de información, todo lo que este ahi dentro se va a imprimir o renderizar en la sesión carrito.
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


function addItemCarrito(newItem){

  //constante del alert para que aparezca.
  const alert = document.querySelector('.alert')

  //cada vez que se compra un producto aparezca un alert como notificación de la compra.
  setTimeout( function(){
    alert.classList.add('hide')
  }, 1000)
    alert.classList.remove('hide')

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
    
    <th scope="row">1</th>
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
  }, 1000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

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