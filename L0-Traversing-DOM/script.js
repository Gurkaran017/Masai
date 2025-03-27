// Selecting "Item 2"
const item2 = document.getElementById("item2");

// Adding click event
item2.addEventListener("click", () => {
    // Alert the parent node's text content (ul)
    alert("Parent Node Content: " + item2.parentNode.textContent.trim());

    // Log the previous sibling's text content
    if (item2.previousElementSibling) {
        console.log("Previous Sibling: " + item2.previousElementSibling.textContent);
    }

    // Log the next sibling's text content
    if (item2.nextElementSibling) {
        console.log("Next Sibling: " + item2.nextElementSibling.textContent);
    }
});
