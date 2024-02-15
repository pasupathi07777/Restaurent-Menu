









// -------------------side inbox






add_cart_btn.forEach((a, i) => {
    a.addEventListener("click", (e) => {
       
        if(arr[i]==undefined){
            check()
            // click_count++
            // arr[i]=1
            // console.log(arr)
           
            // cart_count.textContent=click_count
            // arr2.push(i)
            // console.log(arr2,"arr2")
            
            let product_name = a.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent
            let product_price = a.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.textContent
            let product_image = a.parentElement.parentElement.parentElement.parentElement.firstElementChild.src

            //     --------------------------
            let rs=product_price.slice(3)
            rs=Number(rs)
            // console.log(typeof rs)
            add_cart_pro_all_priceamo.unshift(rs)
     


         // ----------------------------------
 

            let create_inbox = document.createElement("div")
            create_inbox.classList.add("index-1")
        
            // console.log(create_inbox)
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
            <div class="del-logo" >
                <i class="fa-solid fa-trash"></i>
            </div>

            </div></div>`
            create_inbox.innerHTML=append_index
           
            // console.log(create_inbox)
            // console.log(append_index)
            let inbox=document.querySelector(".inbox")
            inbox.append(create_inbox)
    
            let total_price=document.querySelector(".total-price")
            total_price.textContent=`Rs${product_price}`
            // console.log(add_cart_pro_all_priceamo)

            const sum = add_cart_pro_all_priceamo.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            total_price.textContent=`Rs${sum}`
    
            let del_logo=document.querySelectorAll(".box-inbox .del-logo")
        
    
            del_logo.forEach((a,i)=>{
            a.addEventListener("click", ()=> {
               
            
                let update_cart=click_count--
                a.parentElement.parentElement.parentElement.remove()
                cart_count.textContent=update_cart
        
                arr3=[]
                arr3.push(i)
                console.log(arr3)
                                 
            ))}
        }}
    }) 




        










        // let product_name = a.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent
        // let product_price = a.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.textContent
        // let product_image = a.parentElement.parentElement.parentElement.parentElement.firstElementChild.src
        // // console.log(product_name)
        // // console.log(product_price)
        // // console.log(product_image)

        // let create_inbox = document.createElement("div")
        // create_inbox.classList.add("index-1")
        // console.log(create_inbox)
        // let append_index = `<div class="box-inbox row row-cols-3 p-1 m-0">
        // <div class="img-inbox p-0 ">
        // <img src="${product_image}" alt="">
        // </div>
        // <div class="price-inbox p-0 ">
        // <div class="product-name">${product_name}</div>
        // <div class="product-price w-100 h-100">
        //     ${product_price}
        // </div>
        // <div class="product-quantioy ">
        //     <input type="number" class=" " value="1">
        // </div>

        // </div>
        // <div class="total-inbox p-0">
        // <div class="total"> ${product_price}</div>
        // <div class="del-logo">
        //     <i class="fa-solid fa-trash"></i>
        // </div>

        // </div></div>`
        // create_inbox.innerHTML=append_index
       
        // // console.log(create_inbox)
        // // console.log(append_index)
        // let inbox=document.querySelector(".inbox")
        // inbox.append(create_inbox)x