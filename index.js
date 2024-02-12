let cart_btn = document.querySelector(".cart i")
let x_btn = document.querySelector(".cancel-btn i")
let slider_inbox = document.querySelector(".sliding-cart")
let search_box = document.querySelector(".search-box input")




// -------------------------


cart_btn.addEventListener("click", () => {
    slider_inbox.style.right = "0px"

})
x_btn.addEventListener("click", () => {
    slider_inbox.style.right = "-300px"

})


// search------------------------

let product_name = document.querySelectorAll(".det-box h6")
console.log(product_name)

search_box.addEventListener("keyup", () => {
    let user_search = search_box.value.toLocaleLowerCase()
    // user_search=user_search.toLocaleLowerCase()
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

// -------------------side inbox

let add_cart_btn = document.querySelectorAll(".logo-box i")

add_cart_btn.forEach((a, i) => {
    a.addEventListener("click", (e) => {

        let product_name = a.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent
        let product_price = a.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.textContent
        let product_image = a.parentElement.parentElement.parentElement.parentElement.firstElementChild.src
        console.log(product_name)
        console.log(product_price)
        console.log(product_image)

        let create_inbox = document.createElement("div")
        create_inbox.classList.add("index-1")
        console.log(create_inbox)
        let append_index = `<div class="box-inbox row row-cols-3 p-1 m-0">
        <div class="img-inbox p-0 ">
        <img src="${product_image}" alt="">
        </div>
        <div class="price-inbox p-0 ">
        <div class="product-name">${product_name}</div>
        <div class="product-price w-100 h-100">
            ${product_price}
        </div>
        <div class="product-quantioy ">
            <input type="number" class=" ">
        </div>

        </div>
        <div class="total-inbox p-0">
        <div class="total"> ${product_price}</div>
        <div class="del-logo">
            <i class="fa-solid fa-trash"></i>
        </div>

        </div></div>`
        create_inbox.innerHTML=append_index
       
        // console.log(create_inbox)
        // console.log(append_index)
        let inbox=document.querySelector(".inbox")
        inbox.append(create_inbox)
        



    })
})






