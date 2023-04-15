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
// removeMain.addEventListener("click", bodyPush)
// function bodyPush (){
//       nav1.classList.add("inactive")
//       mobileMenu.classList.add("inactive")
//       product_detail.classList.add("inactive")
// } 
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
 const productList = [];
 productList.push({
      name: "Bike",
      price: "$"+120.00,
      img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 })
 productList.push({
      name: "Pantalla",
      price: "$"+200.00,
      img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 })
 productList.push({
      name: "Mouse",
      price: "$"+30.00,
      img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 })
 productList.push({
      name: "Bike",
      price: "$"+120.00,
      img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 })
 productList.push({
      name: "Pantalla",
      price: "$"+200.00,
      img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 })
 productList.push({
      name: "Mouse",
      price: "$"+30.00,
      img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 })
{/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p class="name1"></p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */}
    const cardsContainer = document.querySelector(".cards-container")
 
 function listProducts (arr) {
      for(i of arr){
            const productCard = document.createElement("div")
            productCard.classList.add("product-card")
             cardsContainer.append(productCard)
            const imageCreate = document.createElement("img") 
            imageCreate.setAttribute("src", i.img,)
            imageCreate.setAttribute("alt","") 
            productCard.append(imageCreate)
            const productInfo = document.createElement("div")
            productInfo.classList.add("product-info")
            productCard.append(productInfo) 
            const anotherDiv = document.createElement("div")
            productInfo.append(anotherDiv)
            const p1 = document.createElement("p") 
            const p2 = document.createElement("p") 
            anotherDiv.append(p1,p2)
            p1.append(i.price)
            p2.append(i.name)
            const figure1 = document.createElement("figure")
            productInfo.appendChild(figure1)
            const imgFigure = document.createElement("img")
            figure1.appendChild(imgFigure)
            imgFigure.setAttribute("src","./icons/bt_add_to_cart.svg" )
       }
 }
 listProducts(productList)