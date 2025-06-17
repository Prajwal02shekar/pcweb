let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartItemsContainer = document.getElementById('cartItems');
        let totalPrice = document.getElementById('totalPrice');

        function display() {
            cartItemsContainer.innerHTML = "";
            let total = 0;

            cart.forEach((item, index) => {
                console.log(item, index)

                let cartItem = document.createElement('div');
                cartItem.className = "cart-item";
                cartItem.innerHTML = `
                 <img src="${item.img}" alt="${item.name}">
                     <div>
                        <h3>${item.name}</h3>
                         <p>${item.price}</p>
                         <button onclick="removeItem(${index})">Remove</button>
                     </div>
                `
                let itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
                total = total + itemPrice;
                console.log(total)
                cartItemsContainer.appendChild(cartItem)
            })
            totalPrice.textContent = total;

            let checkout = document.getElementById('checkout')
            checkout.addEventListener('click', () => {
                alert(`Thank you for shopping with us! Your Total bill is ₹${total} `);
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                display()
            })

        }

        function removeItem(index) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            display();
        }
        display()

        let clearBtn = document.getElementById('clear')
        clearBtn.addEventListener('click', () => {
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            display()
        })


