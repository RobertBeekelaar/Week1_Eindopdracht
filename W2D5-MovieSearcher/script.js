const movieLocation = document.getElementById('mainlist');
const listLocation = movieLocation.getElementsByClassName('movielist')[0];
const buttons = document.getElementsByClassName('allbuttons')[0];

movies.forEach((movie) => {
  newLi = document.createElement('li');
  newA = document.createElement('a');
  newA.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
  newImg = document.createElement('img');
  newImg.setAttribute('src', movie.Poster);
  newLi.appendChild(newA);
  newA.appendChild(newImg);
  listLocation.appendChild(newLi);
})

buttonList = Array.from(buttons.getElementsByClassName('radiobutton'));

buttonList.forEach((button) => {
  button.addEventListener("change", () => {
    console.log(button.value)

    if (button.value !== "newest") {

      const filteredMovies = movies.filter((movie) => movie.Title.includes(button.value));
      listLocation.innerHTML = " ";
      filteredMovies.forEach(movie => {
        newLi = document.createElement('li');
        newA = document.createElement('a');
        newA.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
        newImg = document.createElement('img');
        newImg.setAttribute('src', movie.Poster);
        newLi.appendChild(newA);
        newA.appendChild(newImg);
        listLocation.appendChild(newLi);
      })
    } else {
      const filteredMoviesDate = movies.filter((movie) => Number(movie.Year) >= 2014);
      listLocation.innerHTML = " ";
      filteredMoviesDate.forEach(movie => {
        newLi = document.createElement('li');
        newA = document.createElement('a');
        newA.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
        newImg = document.createElement('img');
        newImg.setAttribute('src', movie.Poster);
        newLi.appendChild(newA);
        newA.appendChild(newImg);
        listLocation.appendChild(newLi);
      })
    }
  })
})


