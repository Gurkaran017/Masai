const gallery = document.getElementById("gallery");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentPage = 1;

function fetchCharacters(page) {
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(data => {
      renderCharacters(data.results);
    });
}

function renderCharacters(characters) {
  gallery.innerHTML = "";
  characters.slice(0, 6).forEach(char => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${char.image}" />
      <h3>${char.name}</h3>
      <p>${char.species}</p>
      <p>Status: ${char.status}</p>
    `;
    card.addEventListener("click", () => {
      window.open(`detail.html?id=${char.id}`, "_blank");
    });
    gallery.appendChild(card);
  });
}

prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage);
  }
};
nextBtn.onclick = () => {
  currentPage++;
  fetchCharacters(currentPage);
};

function startClock() {
  const clock = document.getElementById("clock");
  setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    clock.textContent = `${time} ${date}`;
  }, 1000);
}

fetchCharacters(currentPage);
startClock();
