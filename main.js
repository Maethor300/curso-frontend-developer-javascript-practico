const nav1 = document.querySelector(".desktop-menu")
const boton = document.querySelector(".boton1")
boton.addEventListener("click" , function(){
      nav1.classList.toggle("inactive")
})
const mobileMenu = document.querySelector(".mobile-menu")
const menuBoton = document.querySelector(".menu")
menuBoton.addEventListener("click", function(){
      mobileMenu.classList.toggle("inactive")
})