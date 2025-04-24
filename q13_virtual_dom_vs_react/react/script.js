let vanillaUpdates = 0;

function changeTitle() {
  const title = document.getElementById("title");
  title.textContent = "Title Changed by Vanilla JS";
  vanillaUpdates++;
  document.getElementById("vanillaCount").textContent = vanillaUpdates;
}
