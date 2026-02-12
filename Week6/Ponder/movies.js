const movies = [
  {
    title: "Spider-Man: Into the Spider-Verse",
    date: "Dec 14, 2018",
    description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
    ages: "10+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "The Other Side of Heaven",
    date: "December 14, 2001",
    description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt: "Poster for The Other Side of Heaven",
    ages: "10+",
    genre: "Drama/Religious",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Luca",
    date: "June 18, 2021",
    description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
    imgAlt: "Luca and Alberto on the beach",
    ages: "6+",
    genre: "Family/Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "17 Miracles",
    date: "June 3, 2011",
    description: "A depiction of the Willie Handcart Company's journey west.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    imgAlt: "Handcart pioneers in snow",
    ages: "12+",
    genre: "Historical/Religious",
    stars: "⭐⭐⭐⭐"
  }
];

const movieList = document.querySelector("#movie-list");
// Loop through movies and add them to HTML
movies.forEach(movie => {
  const article = document.createElement("article");

  article.innerHTML = `
    <h2>${movie.title}</h2>
    <p><strong>Release:</strong> ${movie.date}</p>
    <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
    <p>${movie.description}</p>
    <p><strong>Age:</strong> ${movie.ages}</p>
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p><strong>Rating:</strong> ${movie.stars}</p>
  `;

  movieList.appendChild(article);
});