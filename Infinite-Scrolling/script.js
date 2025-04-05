const gallery = document.getElementById('gallery');
const loading = document.getElementById('loading');

let page = 1;
const limit = 10;
let isLoading = false;

// Fetch photos from API
async function fetchPhotos() {
  try {
    isLoading = true;
    loading.style.display = 'block';
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    const photos = await res.json();
    displayPhotos(photos);
    page++;
    isLoading = false;
    loading.style.display = 'none';
  } catch (err) {
    console.error('Error loading images:', err);
    loading.textContent = 'Failed to load images.';
  }
}

// Display photos in gallery
function displayPhotos(photos) {
  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.thumbnailUrl;
    img.alt = photo.title;
    gallery.appendChild(img);
  });
}

// Infinite scroll detection
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (!isLoading && scrollTop + clientHeight >= scrollHeight - 10) {
    fetchPhotos();
  }
});

// Initial load
fetchPhotos();
