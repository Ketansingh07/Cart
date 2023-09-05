document.addEventListener("DOMContentLoaded", function() {
    renderCart();
});

function renderCart() {
    // Retrieve cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart'));

    const cartList = document.getElementById("cart-items");
    const totalAmount = document.getElementById("total-amount");

    cartList.innerHTML = "";

    let total = 0;

    if (storedCart) {
        cart = storedCart; // Update the cart in cart.js with the stored data
        cart.forEach((item, index) => {
            const listItem = document.createElement("div");
            listItem.className = "card mb-3";
            listItem.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Description: ${item.description}</p>
                    <p class="card-text">Price: Rs ${item.price}</p>
                    <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            cartList.appendChild(listItem);

            total += item.price;
        });
    }

    totalAmount.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function checkout() {
    // You can customize this function to handle the actual payment process.
    // For now, we'll just clear the cart.
    cart = [];
    // Clear the cart data from localStorage
    localStorage.removeItem('cart');
    renderCart();
}
