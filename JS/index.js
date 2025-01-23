const form = document.getElementById("movieForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const movie = {
    name: document.getElementById("title").value,
    image_url: document.getElementById("image").value,
    release_year: parseInt(document.getElementById("releaseYear").value, 10),
    imdb_rating: parseFloat(document.getElementById("imdbRating").value),
  };

  await fetch("https://json-server-1fo4.onrender.com/movies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });

  form.reset();
  alert("Movie added successfully!");
});
