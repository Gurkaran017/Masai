// Select <h1> by id and change text content
document.getElementById("main-heading").textContent = "Welcome to the DOM World!";

// Select all <p> elements and change their text color to blue
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

// Select first <div> with class "container" and change background color
document.querySelector(".container").style.backgroundColor = "yellow";
