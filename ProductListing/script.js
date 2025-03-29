const productContainer = document.getElementById("product-container");
const errorMessage = document.getElementById("error-message");

// Function to fetch products
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products"); // Fetch API data
        if (!response.ok) throw new Error("Network response was not OK"); // Handle bad responses
        
        const products = await response.json(); // Convert response to JSON
        displayProducts(products); // Call function to display products
    } catch (error) {
        console.error("Error fetching products:", error);
        errorMessage.textContent = "Failed to fetch products. Please try again later.";
    }
}

// Function to display products in the grid
function displayProducts(products) {
    productContainer.innerHTML = ""; // Clear previous data

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="viewDetails('${product.title}', '${product.price}')">View Details</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Function to handle "View Details" button click
function viewDetails(title, price) {
    alert(`Product: ${title}\nPrice: $${price}`);
}

// Fetch products when the page loads
fetchProducts();
