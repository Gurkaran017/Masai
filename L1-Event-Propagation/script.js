// Selecting elements
const outerDiv = document.getElementById("outer");
const middleDiv = document.getElementById("middle");
const innerDiv = document.getElementById("inner");
const innerButton = document.getElementById("innerButton");

// Event propagation in bubbling phase (default behavior)
outerDiv.addEventListener("click", () => alert("Outer Div Clicked!"), false);
middleDiv.addEventListener("click", () => alert("Middle Div Clicked!"), false);
innerDiv.addEventListener("click", () => alert("Inner Div Clicked!"), false);
innerButton.addEventListener("click", (event) => {
    alert("Inner Button Clicked!");
    event.stopPropagation(); // Stops event propagation
}, false);

// Event propagation in capturing phase
outerDiv.addEventListener("click", () => alert("Outer Div Capturing!"), true);
middleDiv.addEventListener("click", () => alert("Middle Div Capturing!"), true);
innerDiv.addEventListener("click", () => alert("Inner Div Capturing!"), true);

/* 
✅ Event Propagation Explanation:
1. **Bubbling Phase** (default `false`): Events start from the target element and bubble up to the ancestors.
2. **Capturing Phase** (`true` flag): Events start from the root ancestor and travel down to the target.
3. **Stopping Propagation**: `event.stopPropagation()` prevents further event propagation in both phases.
*/
