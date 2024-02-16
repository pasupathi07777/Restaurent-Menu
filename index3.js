
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
    slider.style.right = "-250px"

}
function cart_delete() {
    console.log(cart_conatiner)
    // confirm("del")

    let name=this.parentElement.parentElement.querySelector(".product-name").innerHTML
    cart_conatiner=cart_conatiner.filter(a=>{
        a!=name
    })
    console.log(cart_conatiner)

    this.parentElement.parentElement.remove()
    update_price()
    total_cart_amount()

    let cart_total=document.querySelector(".cart-box")
    let pri=cart_total.textContent
    pri=parseFloat(pri)
    console.log(pri)
    pri--
    cart_total.textContent=pri


}

function product_quantitys() {
    console.log(this.value)
    if (NaN == this.value || (this.value) < 1) {
        this.value = 1
    }
    let value=this.value
    
    console.log(value)
    update_price(this.value)
    total_cart_amount()
}

function add_item() {
    let cart_item = this.parentElement.parentElement
    let name = cart_item.querySelector(".det-box h6").innerHTML
    let price = cart_item.querySelector(".det-box .price").innerHTML
    let image = cart_item.querySelector("img").src
  
    if(cart_conatiner.find(a=> a==name)){
       
        alert("Is's already added")
        return
       
    }else{
        let html=` <div class="box-inbox row row-cols-3 p-0 m-0 ">
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
    let cart_total=document.querySelector(".cart-box")
    let pri=cart_total.textContent
    pri=parseFloat(pri)
    console.log(pri)
    pri++
    cart_total.textContent=pri
    
    

  
    
    
   
    loder()

    }
   
    



   

}
function update_price(value){
    let tatal_amount=0
    let cart_box=document.querySelectorAll(".box-inbox")
    cart_box.forEach((a)=>{
        let price=a.querySelector(".product-price").innerHTML.replace("RS.","")
        let qua=a.querySelector(".quantity").value
        let total_inbox=a.querySelector(".total-inbox .total")
        tatal_amount=Number(price)*qua
        total_inbox.textContent=`RS.${tatal_amount}`
       
    })
  

    total_cart_amount()
   
    
 
   
   
}


function total_cart_amount(){
    let total=0
    let cart_box=document.querySelectorAll(".box-inbox")
    let total_price=document.querySelector(".total-cart-amount .total-price")
    cart_box.forEach((a)=>{
        
        let total_inbox=a.querySelector(".total-inbox .total").textContent.replace("RS.","")
        total_inbox=Number(total_inbox)
        console.log(total_inbox)

        total+=total_inbox
        
      
       
       
       
    })
    total_price.textContent=`            Rs.     ${total}`

}



let product_name = document.querySelectorAll(".det-box h6")
let cart_btn = document.querySelector(".cart i")
let x_btn = document.querySelector(".cancel-btn i")
let slider_inbox = document.querySelector(".sliding-cart")
let search_box = document.querySelector(".search-box input")


search_box.addEventListener("keyup", () => {
    let user_search = search_box.value.toLocaleLowerCase()
 
   
    product_name.forEach((a, i) => {


        let product_name_text = a.textContent.toLocaleLowerCase()
        console.log(product_name_text)
        console.log(user_search)
        console.log(product_name_text.indexOf(user_search))
        if (product_name_text.indexOf(user_search) != 0) {
            let f_par = a.parentElement
            let s_par = f_par.parentElement
            let t_par = s_par.parentElement
            let final_parent = t_par.parentElement
            console.log(final_parent)
            final_parent.style.display = "none"
5
        } else {

            let f_par = a.parentElement
            let s_par = f_par.parentElement
            let t_par = s_par.parentElement
            let final_parent = t_par.parentElement
            console.log(final_parent)
            final_parent.style.display = "block"
        }

    })


})

