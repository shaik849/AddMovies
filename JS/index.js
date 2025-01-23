const form = document.getElementById("movieForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const movie = {
    title: document.getElementById("name").value,
    image: document.getElementById("image_url").value,
    releaseYear: parseInt(document.getElementById("release_year").value, 10),
    imdbRating: parseFloat(document.getElementById("imdb_rating").value),
  };

  await fetch("https://json-server-1fo4.onrender.com/movies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });

  form.reset();
  alert("Movie added successfully!");
});
