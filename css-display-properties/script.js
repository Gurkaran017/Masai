document.getElementById("toggle-btn").addEventListener("click", function () {
    const hiddenElement = document.querySelector(".hidden-element");
    if (hiddenElement.style.display === "none") {
        hiddenElement.style.display = "block";
    } else {
        hiddenElement.style.display = "none";
    }
});
