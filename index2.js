let cart_btn = document.querySelector(".cart i")
let x_btn = document.querySelector(".cancel-btn i")
let slider_inbox = document.querySelector(".sliding-cart")
let search_box = document.querySelector(".search-box input")
let del_logo=document.querySelector(".index")
let total_price=document.querySelector(".total-price")

let total_cart_price=0
let current_box=0

function mmmmmm(){
   
    console.log(current_box)
    // total_cart_price-=current_box
    // console.log(total_cart_price)
}







cart_btn.addEventListener("click", () => {
    slider_inbox.style.right = "0px"

})
x_btn.addEventListener("click", () => {
    slider_inbox.style.right = "-300px"

})

// -------------------------------------


let product_name = document.querySelectorAll(".det-box h6")


search_box.addEventListener("keyup", () => {
    let user_search = search_box.value.toLocaleLowerCase()
 
    console.log(user_search)
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

// ---------------------------------
let cart_num=document.querySelector(".cart-box")
cart_num.textContent=0

// let del_logo=document.querySelectorAll(".del-logo")


let cccc=0
// let sum_count= cart_num.innerHTML
anytime()
function anytime(a){
    cart_num.innerHTML=a
}


cccc=0

cart_num.innerHTML=cccc

function count(){
//    num= cart_num.innerHTML
//    num++
//    sum_count=num
//    anytime()
cccc++
cart_num.innerHTML=cccc
  
   
    

  



}





let add_cart_btn = document.querySelectorAll(".logo-box i ")

let update_t_cart;
// ppppppppppppppppppppppppppppppp
let click_count=0
var arr=[]
var arr2=[]
var deleted_box_index;

function upp(){
    var deleted_box_index;
    arr=[]
    arr2=[]
    // console.log(arr)
    // console.log(arr2)
   
    let rs=arr2[deleted_box_index]
    // console.log(rs)
    arr[rs]=undefined
    // let three=
    cccc=cart_num.textContent

    cccc--
    cart_num.innerHTML=cccc


    let sec=document.querySelector(".section-1")
    let fff=sec.querySelectorAll(".box")
    console.log(fff[arr[deleted_box_index]])

}

let add_cart_pro_all_priceamo=[]

add_cart_btn.forEach((a,i)=>{
    a.addEventListener("click",()=>{
        condition(a,i)
    })
})

function condition(a,i){
    
    if(arr[i]==undefined){
        check(a,i)
        count()

    }
}

function check(a,i){
     
   
   
    

   
    
    arr[i]=1

   
 
    arr2.push(i)
  
    update_inbox(a,i)
}

function update_inbox(a,i){
    let product_name = a.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent
    let product_price = a.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.textContent
    let product_image = a.parentElement.parentElement.parentElement.parentElement.firstElementChild.src

    //     --------------------------
    let rs=product_price.slice(3)
    rs=Number(rs)
  
    add_cart_pro_all_priceamo.unshift(rs)


    let create_inbox = document.createElement("div")
    create_inbox.classList.add("index-1")


    let append_index = `<div   class="box-inbox row row-cols-3 p-1 m-0"  >
    <div class="img-inbox p-0 ">
    <img src="${product_image}" alt="">
    </div>
    <div class="price-inbox p-0 ">
    <div class="product-name">${product_name}</div>
    <div class="product-price w-100 h-100">
        ${product_price}
    </div>
    <div class="product-quantioy ">
        <input type="number" class=" " value="1">
    </div>

    </div>
    <div class="total-inbox p-0">
    <div class="total"> ${product_price}</div>
    <div class="del-logo"  onclick="del(event)" >
        <i class="fa-solid fa-trash"></i>
    </div>

    </div></div>`
    create_inbox.innerHTML=append_index
   
  
    let inbox=document.querySelector(".inbox")
    inbox.append(create_inbox)

    let total_price=document.querySelector(".total-price")
    total_price.textContent=`Rs${product_price}`


    const sum = add_cart_pro_all_priceamo.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    total_price.textContent=`Rs.${sum}`
    total_cart_price=sum
    console.log("sum",sum)

    
    var all_inbox=document.querySelectorAll(".index-1 .del-logo")
    console.log(all_inbox)
    all_inbox.forEach((a,i)=>{
     
        // a=a.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling
        a.addEventListener("click",(event)=>{
            event.preventDefault()
            a.parentElement.parentElement.parentElement.remove()
            
            
            deleted_box_index=i
         
     
            inbox=document.querySelector(".inbox")
            let cc=inbox.querySelectorAll(".index-1")
           
            anytime(cc.length)
            cart_num.textContent=cc.length+1
            upp()
            price_update(a)
        })


    }) 
   
    


     
   
  
}







function price_update(a){
    b=a.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent
    
    let b1=b.split(".")
    let b2=Number(b1[1])
    current_box=b2
    mmmmmm()
 


}
    
    


    

    

    
   



    

    
   

function del(){

}