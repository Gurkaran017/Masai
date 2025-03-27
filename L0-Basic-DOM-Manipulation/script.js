// Select the <ul> and button
const ul = document.querySelector("#item-list");
const button = document.querySelector("#add-btn");

// Function to add a new <li> item
button.addEventListener("click", () => {
    const newItem = document.createElement("li");
    const totalItems = ul.children.length + 1;
    
    newItem.textContent = `Item ${totalItems}`;
    
    // Apply styles based on sequence number
    if (totalItems % 2 !== 0) {
        newItem.classList.add("bold-blue");
    } else {
        newItem.classList.add("italic-red");
    }

    ul.appendChild(newItem);
});
