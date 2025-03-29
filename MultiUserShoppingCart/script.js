let currentUser = null;

/**
 * Function to handle user login
 */
function loginUser() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter a username!");
        return;
    }

    currentUser = username;
    document.getElementById("loggedInUser").textContent = currentUser;
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("cartSection").style.display = "block";

    loadCart(); // Load user's cart
}

/**
 * Function to logout the user
 */
function logoutUser() {
    currentUser = null;
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("cartSection").style.display = "none";
}

/**
 * Function to load the user's cart from localStorage
 */
function loadCart() {
    const cartData = JSON.parse(localStorage.getItem("cart")) || {};
    const userCart = cartData[currentUser] || [];

    displayCart(userCart);
}

/**
 * Function to add an item to the cart
 */
function addItem() {
    if (!currentUser) {
        alert("Please log in first!");
        return;
    }

    const itemName = document.getElementById("itemName").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    if (!itemName || isNaN(price) || price <= 0 || isNaN(quantity) || quantity <= 0) {
        alert("Please enter valid item details.");
        return;
    }

    const cartData = JSON.parse(localStorage.getItem("cart")) || {};
    let userCart = cartData[currentUser] || [];

    // Check if item already exists
    let existingItem = userCart.find(item => item.itemName === itemName);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        userCart.push({ itemName, price, quantity });
    }

    cartData[currentUser] = userCart;
    localStorage.setItem("cart", JSON.stringify(cartData));

    displayCart(userCart);
}

/**
 * Function to display the cart items
 */
function displayCart(userCart) {
    const cartBody = document.getElementById("cartBody");
    cartBody.innerHTML = "";
    let totalCost = 0;

    userCart.forEach((item, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.itemName}</td>
            <td>$${item.price}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>$${item.price * item.quantity}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;

        cartBody.appendChild(row);
        totalCost += item.price * item.quantity;
    });

    document.getElementById("totalCost").textContent = totalCost.toFixed(2);
}

/**
 * Function to update item quantity
 */
function updateQuantity(index, newQuantity) {
    const cartData = JSON.parse(localStorage.getItem("cart")) || {};
    let userCart = cartData[currentUser];

    if (!userCart || index < 0 || index >= userCart.length) return;

    userCart[index].quantity = parseInt(newQuantity);
    cartData[currentUser] = userCart;
    localStorage.setItem("cart", JSON.stringify(cartData));

    displayCart(userCart);
}

/**
 * Function to remove an item from the cart
 */
function removeItem(index) {
    const cartData = JSON.parse(localStorage.getItem("cart")) || {};
    let userCart = cartData[currentUser];

    if (!userCart || index < 0 || index >= userCart.length) return;

    userCart.splice(index, 1);
    cartData[currentUser] = userCart;
    localStorage.setItem("cart", JSON.stringify(cartData));

    displayCart(userCart);
}
