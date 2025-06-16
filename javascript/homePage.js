
let cart = JSON.parse(localStorage.getItem('cart')) || [];
//! Increment the cart count
let cartCount = document.getElementById('cart-count')
function updateCartCount() {
    cartCount.textContent = cart.length;
    updateCartCount()
}

//! targeting all buttons
let button = document.querySelectorAll('button')
button.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        // ! targeting the closet product card
        
        let product = e.target.closest('.product');
        let name = product.querySelector('h3').textContent;
        let price = product.querySelector('p').textContent;
        let img = product.querySelector('img').src;

        let item = { name, price, img };

        console.log(item)

        //! items adding into cart
        cart.push(item);

        //! items saving into local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} added to cart`)

        updateCartCount()

    })
})
