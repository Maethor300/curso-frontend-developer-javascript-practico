const nav1 = document.querySelector(".desktop-menu")
const boton = document.querySelector(".boton1")
const mobileMenu = document.querySelector(".mobile-menu")
const menuBoton = document.querySelector(".menu")
const botonCarrito = document.querySelector(".navbar-shopping-cart")
const firstViewProducts = document.querySelector("#firstViewProducts")
const removeMain = document.querySelector(".remove")
const clickProducts = document.querySelector("#clickProducts") 
const productDetailClose = document.querySelector(".product-detail-close")
boton.addEventListener("click", botonClickNav1)
menuBoton.addEventListener("click", pushMenuBoton)
botonCarrito.addEventListener("click", pushBotonCarrito)
productDetailClose.addEventListener("click", closeProductDetail) 
// removeMain.addEventListener("click", bodyPush)
// function bodyPush (){
//       nav1.classList.add("inactive")
//       mobileMenu.classList.add("inactive")
//       firstViewProducts.classList.add("inactive")
// } 
function botonClickNav1(){
      if(!firstViewProducts.classList.toggle("inactive")){
            firstViewProducts.classList.toggle("inactive")
      }if(! clickProducts.classList.contains("inactive")){
            clickProducts.classList.add("inactive")
       }
         nav1.classList.toggle("inactive")
       
}
function pushMenuBoton(){
      if(!firstViewProducts.classList.toggle("inactive")){
            firstViewProducts.classList.add("inactive")
      }if(! clickProducts.classList.contains("inactive")){
            clickProducts.classList.add("inactive")
       }
      mobileMenu.classList.toggle("inactive")
}
function pushBotonCarrito(){
       if(!mobileMenu.classList.contains("inactive")){
            mobileMenu.classList.add("inactive")
       }if(!nav1.classList.toggle("inactive")){
            nav1.classList.add("inactive")
       }if(! clickProducts.classList.contains("inactive")){
            clickProducts.classList.add("inactive")
       }
       firstViewProducts.classList.toggle("inactive")
       
}
function closeProductDetail(){
      if(!clickProducts.classList.contains("inactive")){
            clickProducts.classList.toggle("inactive")
      }
}
 const productList = [];
 productList.push({
      name: "Bike",
      price: "$"+120.00,
      img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 })
 productList.push({
      name: "PC",
      price: "$"+1000.00,
      img:"./icons/laptop-ga48b71101_1280.jpg",
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
            imageCreate.addEventListener("click", openDetails)
            function openDetails (){
                  if(!firstViewProducts.classList.contains("inactive")){
                        firstViewProducts.classList.add("inactive")
                  }if(!nav1.classList.toggle("inactive")){
                        nav1.classList.add("inactive")}
                        if(!mobileMenu.classList.contains("inactive")){
                              mobileMenu.classList.add("inactive")
                         }
                  clickProducts.classList.remove("inactive")
            }
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
            imgFigure.classList.add("img-show")             
       }
 }
 listProducts(productList)
 
