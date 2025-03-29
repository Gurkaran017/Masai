document.getElementById("postForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const title = document.getElementById("title").value.trim();
    const body = document.getElementById("body").value.trim();
    const responseDiv = document.getElementById("response");

    // Validate inputs
    if (!title || !body) {
        responseDiv.innerHTML = "<p style='color:red;'>Both fields are required!</p>";
        return;
    }

    const postData = { title, body, userId: 1 }; // Simulating a user ID

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });

        const data = await response.json();

        // Display the response from the server
        responseDiv.innerHTML = `
            <p><strong>Post ID:</strong> ${data.id}</p>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Body:</strong> ${data.body}</p>
        `;

    } catch (error) {
        console.error("Error:", error);
        responseDiv.innerHTML = "<p style='color:red;'>Error submitting post!</p>";
    }
});
