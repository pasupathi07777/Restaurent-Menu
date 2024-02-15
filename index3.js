
let slider = document.querySelector(".sliding-cart")
let cart_icon = document.querySelector(".cart")
let slider_close = document.querySelector(".cancel-btn i")


let add_cart = document.querySelectorAll(".logo")

// console.log(cart_items_del)



let cart_conatiner=[]

document.addEventListener("DOMContentLoaded", loder())


function loder() {
    // cart button 
    cart_icon.addEventListener("click", display_slider)

    // cart close button
    slider_close.addEventListener("click", slider_displaynone)

    // cart items deloete
    let cart_items_del = document.querySelectorAll(".del-logo")
    cart_items_del.forEach(a=>{
        a.addEventListener("click", cart_delete)
    })

    // product quantity
    let product_quantity = document.querySelectorAll(".quantity")
    product_quantity.forEach(a => {
        a.addEventListener("change", product_quantitys)
    })

    // add cart button 
    add_cart.forEach(a => {
        a.addEventListener("click", add_item)
    })
    update_price()



}


function display_slider() {

    slider.style.right = "0%"
}

function slider_displaynone() {
    slider.style.right = "-300px"

}
function cart_delete() {
    console.log(cart_conatiner)
    confirm("del")

    let name=this.parentElement.parentElement.querySelector(".product-name").innerHTML
    cart_conatiner=cart_conatiner.filter(a=>{
        a!=name
    })
    console.log(cart_conatiner)

    this.parentElement.parentElement.remove()


}

function product_quantitys() {
    console.log(this.value)
    if (NaN == this.value || (this.value) < 1) {
        this.value = 1
    }
    let value=this.value
    console.log(value)
}

function add_item() {
    let cart_item = this.parentElement.parentElement
    let name = cart_item.querySelector(".det-box h6").innerHTML
    let price = cart_item.querySelector(".det-box .price").innerHTML
    let image = cart_item.querySelector("img").src
    // console.log(name, price, image)
    if(cart_conatiner.find(a=> a==name)){
        // console.log()
        alert("is's already added")
        return
       
    }else{
        let html=` <div class="box-inbox row row-cols-3 p-1 m-0 ">
    <div class="img-inbox p-0 ">
        <img src="${image}" alt="">

    </div>
    <div class="price-inbox p-0 ">
        <div class="product-name">${name}</div>
        <div class="product-price w-100 h-100">
           ${price}
        </div>
        <div class="product-quantioy ">
            <input type="number"  value="1" class="quantity">
        </div>

    </div>
    <div class="total-inbox p-0">
        <div class="total">${price}</div>
        <div class="del-logo">
            <i class="fa-solid fa-trash"></i>
        </div>

    </div>

    </div>`
   

    let div = document.createElement("div")

    div.innerHTML=html
    let inbox_cart = document.querySelector(".inbox")
    inbox_cart.append(div)
    cart_conatiner.push(name)
    // console.log(cart_conatiner)
    
    
   
    loder()

    }
   
    



   

}
function update_price(){
    let cart_box=document.querySelectorAll(".box-inbox")
    console.log(cart_box)
    let price=document.querySelector(".product-price").textContent
    console.log(price)
}


