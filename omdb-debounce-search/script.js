const API_KEY = "YOUR_API_KEY"; // Replace with your OMDB API key
const searchBox = document.getElementById("searchBox");
const resultsDiv = document.getElementById("results");

let debounceTimeout;

searchBox.addEventListener("input", function () {
  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    const query = searchBox.value.trim();
    if (query.length > 0) {
      searchMovies(query);
    } else {
      resultsDiv.innerHTML = "";
    }
  }, 500);
});

function searchMovies(query) {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === "True") {
        displayMovies(data.Search);
      } else {
        resultsDiv.innerHTML = `<p>No results found.</p>`;
      }
    })
    .catch((err) => {
      resultsDiv.innerHTML = `<p>Error: ${err.message}</p>`;
    });
}

function displayMovies(movies) {
  resultsDiv.innerHTML = "";
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.textContent = movie.Title;
    resultsDiv.appendChild(div);
  });
}
