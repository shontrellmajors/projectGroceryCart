// show cart

(function(){
    //target cart button
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");

    //this adds event listener to cart-info id
    cartInfo.addEventListener("click", function(){
        cart.classList.toggle("show-cart");
    })

})();

//add items to the cart

(function(){

    const cartBtn = document.querySelectorAll(".store-item-icon");

    cartBtn.forEach(function(btn){
        btn.addEventListener("click", function(event){
            //make sure event fires only if it has a parent of a certain class.
            if(event.target.parentElement.classList.contains("store-item-icon")){

                let fullPath = event.target.parentElement.previousElementSibling.src;

                let pos = fullPath.indexof("img") + 3; //use the 3 to get rid of the "img string"

                let partPath = fullPath.slice(pos);

                const item = {};

                item.img = 'img-cart${partPath}';

                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

                item.name = name;

                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

                let finalPrice = price.slice(1).trim();

                item.price = finalPrice;

                const cartItem = document.createElement("div");

                cartItem.classList.add("cart-item", "d-flix", "justify-content-between", "text-capitalize", "my-3");

                cartItem.innerHTML = "<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src ="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">"
                   <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p><span>$</span>
                     <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span></div><a href="#" id="cart-item-remove" class="cart-item-remove"
            }
        })
    })
})