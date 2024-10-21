// 1. Formulario de contacto - Local Storage

// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje
// Crea una función que cuando envíes el formulario muestre por consola los datos de contacto rellenados en un objeto de JS

const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const mensaje = document.getElementById("mensaje")

const nombreValor = nombre.value
const correoValor = correo.value
const mensajeValor = mensaje.value

function mostrarDatos(e){
  e.preventDefault()
  let datosUsuario = {
    Nombre: nombreValor,
    Correo: correoValor,
    Mensaje: mensajeValor
  }

  console.log(datosUsuario)
// Guardar en Local Storage el objeto consoleado antes (sólo guarda un usuario)
localStorage.setItem('user', JSON.stringify(datosUsuario))

// Muestra el usuario que has guardado en el DOM (en el HTML)

const usuario = localStorage.getItem('user')
document.body.innerHTML = "Nombre: " + JSON.parse(usuario).Nombre +"<br>Correo: " + JSON.parse(usuario).Correo + "<br>Mensaje: " + JSON.parse(usuario).Mensaje
}

const btn = document.getElementById("btn")
btn.addEventListener("click",mostrarDatos)
