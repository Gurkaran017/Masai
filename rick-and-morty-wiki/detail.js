const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const container = document.getElementById("detail");

function fetchCharacter(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => {
      container.innerHTML = `
        <img src="${data.image}" />
        <h2>${data.name}</h2>
        <p>Status: ${data.status}</p>
        <p>Species: ${data.species}</p>
        <p>Type: ${data.type || "N/A"}</p>
        <p>Gender: ${data.gender}</p>
        <p>Origin: ${data.origin.name}</p>
        <p>Location: ${data.location.name}</p>
        <p>Episodes: ${data.episode.length}</p>
      `;
    });
}

function startClock() {
  const clock = document.getElementById("clock");
  setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    clock.textContent = `${time} ${date}`;
  }, 1000);
}

fetchCharacter(id);
startClock();
