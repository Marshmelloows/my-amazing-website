// --- PRODUCT DATA ---
const products = [
    { id: 1, name: "Gaming Headset", price: 37.79, image: "Images/Gaming Headphones.jpg", keywords: "headphones" },
    { id: 2, name: "PS4 Gaming Headset", price: 24.99, image: "Images/ps4 Gaming headset.jpg", keywords: "headphones" },
    { id: 3, name: "Beats Studio Pro Wireless Headphones - Navy", price: 409, image: "Images/Beats Studio Pro Wireless.jpg", keywords: "headphones" },
    { id: 4, name: "Razer Naga V2 HyperSpeed Wireless MMO Gaming Mouse", price: 189, image: "Images/Mouse Naga2.jpg", keywords: "mouse" },
    { id: 5, name: "Akko Calico Cat Theme Wireless Mouse", price: 35, image: "Images/Cat mouse.jpg", keywords: "mouse" },
    { id: 6, name: "Corsair Katar PRO Wireless Gaming Mouse", price: 86, image: "Images/Corsair Katar PRO Wireless Gaming Mouse.jpg", keywords: "mouse" },
    { id: 7, name: "Gaming Keyboard Mouse", price: 29.99, image: "Images/Gaming Keyboard Mouse.jpg", keywords: "keybord" },
    { id: 8, name: "Akko x MonsGeek FUN60 Pro Magnetic Glare Black Wired Mechanical Keyboard", price: 75, image: "Images/Akko x MonsGeek FUN60 Pro Magnetic Glare Black Wired Mechanical Keyboard.jpg", keywords: "keybord" },
    { id: 9, name: "Akko Kuromi 5108B Plus 100% V3 Piano Pro Hot-Swappable Wireless Mechanical Keyboard", price: 37.79, image: "Images/Akko Kuromi 5108B Plus 100% V3 Piano Pro Hot-Swappable Wireless Mechanical Keyboard.jpg", keywords: "keybord" },
    { id: 10, name: "Akko x Hatsune Miku Limited Edition Mousepad", price: 55, image: "Images/Akko x Hatsune Miku Limited Edition Mousepad.jpg", keywords: "Mousepad" },
    { id: 11, name: "Sony INZONE Mat-D Gaming Mousepad", price: 75, image: "Images/Sony INZONE Mat-D Gaming Mousepad.jpg", keywords: "Mousepad" },
    { id: 12, name: "Gorilla Gaming Extended Mouse Pad - Neon Red", price: 15, image: "Images/Gorilla Gaming Extended Mouse Pad - Neon Red.jpg", keywords: "Mousepad" },
];

// --- DISPLAY ITEMS ---
function displayItems(items = products) {
    const container = document.getElementById("itemList");
    if (!container) return;

    container.innerHTML = "";
    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("item-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
        `;

        // Click adds to cart
        card.addEventListener("click", () => addToCart(item));
        container.appendChild(card);
    });
}

// --- SEARCH FUNCTION ---
function displayFilteredItems() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    const searchValue = searchInput.value.toLowerCase();
    const filtered = products.filter(item =>
        item.name.toLowerCase().includes(searchValue) ||
        item.keywords.toLowerCase().includes(searchValue)
    );

    displayItems(filtered);
}

// --- ADD TO CART ---
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(cartItem => cartItem.id === item.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} has been added to your cart.`);
}

// --- LOAD CART ---
function loadCart() {
    const cartContainer = document.getElementById("cartItems");
    if (!cartContainer) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:80px;height:auto;">
            <h4>${item.name}</h4>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(div);
    });

    const totalDiv = document.createElement("div");
    totalDiv.classList.add("cart-total");
    totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    cartContainer.appendChild(totalDiv);
}

// --- REMOVE FROM CART ---
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// --- INITIAL LOAD ---
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("itemList")) displayItems();
    if (document.getElementById("cartItems")) loadCart();
});