const novelList = document.getElementById('novelList');
const filterYear = document.getElementById('filterYear');
const sortPrice = document.getElementById('sortPrice');
const searchInput = document.getElementById('search');

const fetchNovels = async () => {
  let query = db.collection("novels");

  // Filter
  if (filterYear.value) {
    query = query.where("release_year", "==", Number(filterYear.value));
  }

  // Sort
  if (sortPrice.value === "asc") {
    query = query.orderBy("price", "asc");
  } else if (sortPrice.value === "desc") {
    query = query.orderBy("price", "desc");
  }

  const search = searchInput.value.toLowerCase();

  try {
    const snapshot = await query.get();
    novelList.innerHTML = "";

    snapshot.forEach(doc => {
      const novel = doc.data();
      if (
        novel.title.toLowerCase().includes(search) ||
        novel.author.toLowerCase().includes(search)
      ) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${novel.title}</td>
          <td>${novel.author}</td>
          <td>${novel.price.toFixed(2)}</td>
          <td>${novel.release_year}</td>
          <td>${novel.genre}</td>
        `;
        novelList.appendChild(row);
      }
    });

    if (!novelList.hasChildNodes()) {
      novelList.innerHTML = "<tr><td colspan='5'>No novels found.</td></tr>";
    }
  } catch (error) {
    novelList.innerHTML = `<tr><td colspan='5'>Error fetching data.</td></tr>`;
    console.error("Fetch error:", error);
  }
};

filterYear.addEventListener("change", fetchNovels);
sortPrice.addEventListener("change", fetchNovels);
searchInput.addEventListener("input", fetchNovels);

// Initial load
fetchNovels();
