const nav1 = document.querySelector(".desktop-menu")
const boton = document.querySelector(".boton1")
const mobileMenu = document.querySelector(".mobile-menu")
const menuBoton = document.querySelector(".menu")
const botonCarrito = document.querySelector(".navbar-shopping-cart")
const product_detail = document.querySelector(".product-detail")
const removeMain = document.querySelector(".remove")
boton.addEventListener("click", botonClickNav1)
menuBoton.addEventListener("click", pushMenuBoton)
botonCarrito.addEventListener("click", pushBotonCarrito)
removeMain.addEventListener("click", bodyPush)
function bodyPush (){
      nav1.classList.add("inactive")
      mobileMenu.classList.add("inactive")
      product_detail.classList.add("inactive")
} 
function botonClickNav1(){
      if(!product_detail.classList.toggle("inactive")){
            product_detail.classList.toggle("inactive")
      }
         nav1.classList.toggle("inactive")
       
}
function pushMenuBoton(){
      if(!product_detail.classList.toggle("inactive")){
            product_detail.classList.add("inactive")
      }
      mobileMenu.classList.toggle("inactive")
}
function pushBotonCarrito(){
       if(!mobileMenu.classList.contains("inactive")){
            mobileMenu.classList.add("inactive")
       }if(!nav1.classList.toggle("inactive")){
            nav1.classList.add("inactive")
       }
       product_detail.classList.toggle("inactive")
       
}
 