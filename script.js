// Initialize cart as an empty array
let cart = [];

// Function to add items to the cart
function addToCart(offerName, price, description) {
    // Add the item to the cart with name, price, and description
    cart.push({ name: offerName, price: price, description: description });

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show the prompt
    const prompt = document.createElement('div');
    prompt.classList.add('custom-prompt');
    prompt.textContent = `Offer "${offerName}" added to cart - Price: ${price} Rs`;
    document.body.appendChild(prompt);

    // Fade out and remove the prompt after a delay
    setTimeout(() => {
        prompt.style.opacity = '1';
        setTimeout(() => {
            prompt.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(prompt);
            }, 300);
        }, 2000); // Adjust the delay (2 seconds) as needed
    }, 10); // Delay before fading in (10ms)
}

// Function to add all items to the cart
function addAllToCart() {
    // Define an array with all your offers
    const allOffers = [
        { name: 'Offer 1', price: 100, description: '9k Gems + 1 Million Coins + 50 Tokens' },
        { name: 'Offer 2', price: 50, description: '4k Gems + 500k Coins + 20 Tokens' },
        { name: 'Offer 3', price: 100, description: '500 Tokens + 1 Million Coins + 1k Gems' },
        // Add more offers here as needed
    ];

    // Add all offers to the cart
    cart.push(...allOffers);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display a message or perform any other action as needed
    alert('All offers added to cart.');

    // You can also update the cart view after adding all items
    renderCart();
    displayCartTotal();
}

// Function to calculate and display the cart total
function displayCartTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    document.getElementById('total-amount').textContent = total;
}

// Function to render cart items
function renderCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${item.name} - Rs ${item.price}`;
        cartItemsList.appendChild(li);
    });
}

// Function to handle the checkout process
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add items to the cart before checking out.');
    } else {
        // Redirect to cart.html
        window.location.href = 'cart.html';
    }
}

// Check if the current page is cart.html and render the cart if needed
if (window.location.pathname.includes('cart.html')) {
    renderCart();
    displayCartTotal();
} else {
    // Retrieve cart data from localStorage on the offers page (index.html)
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart = storedCart;
        displayCartTotal();
    }
}
