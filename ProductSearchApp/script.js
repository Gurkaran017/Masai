const API_URL = "https://fakestoreapi.com/products";
const CATEGORY_URL = "https://fakestoreapi.com/products/categories";

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortPrice = document.getElementById('sortPrice');
const productContainer = document.getElementById('productContainer');
const productCount = document.getElementById('productCount');
const errorMessage = document.getElementById('error-message');

let products = [];

// Fetch products on page load
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch products.");
        products = await response.json();
        displayProducts(products);
    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

// Fetch categories dynamically
async function fetchCategories() {
    try {
        const response = await fetch(CATEGORY_URL);
        if (!response.ok) throw new Error("Failed to fetch categories.");
        const categories = await response.json();
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categoryFilter.appendChild(option);
        });
    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

// Display products
function displayProducts(filteredProducts) {
    productContainer.innerHTML = "";
    productCount.textContent = `Showing ${filteredProducts.length} products`;

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>$${product.price}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Filter & Search logic
function filterProducts() {
    let filteredProducts = products;

    // Search filter
    const searchQuery = searchInput.value.toLowerCase();
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(searchQuery)
        );
    }

    // Category filter
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== "all") {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Sorting
    if (sortPrice.value === "asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortPrice.value === "desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
}

// Event Listeners
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
sortPrice.addEventListener('change', filterProducts);

// Initialize
fetchProducts();
fetchCategories();
