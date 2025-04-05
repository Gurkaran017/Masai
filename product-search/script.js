async function fetchProducts() {
    const category = document.getElementById("category").value;
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;
    const messageDiv = document.getElementById("message");
    const productList = document.getElementById("productList");
  
    // Clear previous data
    productList.innerHTML = "";
    messageDiv.style.color = "blue";
    messageDiv.innerText = "Loading...";
  
    try {
      const url = `https://mockapi.io/products?category=${category}&min_price=${minPrice}&max_price=${maxPrice}&sort=asc`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
  
      const data = await response.json();
  
      messageDiv.innerText = "";
  
      if (data.length === 0) {
        messageDiv.style.color = "orange";
        messageDiv.innerText = "No products found.";
        return;
      }
  
      data.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
        `;
        productList.appendChild(card);
      });
  
    } catch (err) {
      messageDiv.style.color = "red";
      messageDiv.innerText = "Error loading products. Please try again.";
      console.error(err);
    }
  }
  