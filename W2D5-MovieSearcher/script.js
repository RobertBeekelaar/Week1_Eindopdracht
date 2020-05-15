const posters = movies.map((movie) => {
  return movie.Poster
})
const ul = document.getElementById('movielist');
const posterList = movies.map((poster) => {
  return poster.Poster
})
const moviesID = movies.map((iD) => {
  return iD.imdbID
})

for (let i = 0; i < movies.length; i++) {
  let posterName = posterList[i];
  let getID = moviesID[i];
  let newList = document.createElement('li');
  let newLink = document.createElement('a');
  let newPoster = document.createElement('img');
  newPoster.setAttribute('src', posterName);
  newLink.setAttribute('href', "https://www.imdb.com/title/" + getID);
  ul.appendChild(newList);
  newList.appendChild(newLink);
  newLink.appendChild(newPoster);
}

const buttons = document.querySelectorAll('.allbuttons')
Array.from(buttons).forEach((button) => {
  button.addEventListener('change', () => {
    (console.log(event.target.value));

    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    switch (event.target.value) {

      case 'avengers':
        const findAvengers = movies.filter((movie) => {
          return movie.Title.includes('Avengers');
        }).map((movie) => {
          return movie.Poster
        })

        const findAvengersID = movies.filter((movie) => {
          return movie.Title.includes('Avengers');
        }).map((iD) => {
          return iD.imdbID
        })
        for (let i = 0; i < findAvengers.length; i++) {
          let posterName = findAvengers[i];
          let getID = findAvengersID[i];
          let newList = document.createElement('li');
          let newLink = document.createElement('a');
          let newPoster = document.createElement('img')
          newPoster.setAttribute('src', posterName);
          newLink.setAttribute('href', "https://www.imdb.com/title/" + getID);
          ul.appendChild(newList);
          newList.appendChild(newLink);
          newLink.appendChild(newPoster);
        }
        break


      case 'x-men':
        const findXmen = movies.filter((movie) => {
          return movie.Title.includes('X-Men');
        }).map((movie) => {
          return movie.Poster
        })

        const findXmenID = movies.filter((movie) => {
          return movie.Title.includes('X-Men');
        }).map((iD) => {
          return iD.imdbID
        })
        for (let i = 0; i < findXmen.length; i++) {
          let posterName = findXmen[i];
          let getID = findXmenID[i];
          let newList = document.createElement('li');
          let newLink = document.createElement('a');
          let newPoster = document.createElement('img')
          newPoster.setAttribute('src', posterName);
          newLink.setAttribute('href', "https://www.imdb.com/title/" + getID);
          ul.appendChild(newList);
          newList.appendChild(newLink);
          newLink.appendChild(newPoster);
        }
        break

      case 'princess':
        const findPrincess = movies.filter((movie) => {
          return movie.Title.includes('Princess');
        }).map((movie) => {
          return movie.Poster
        })

        const findPrincessID = movies.filter((movie) => {
          return movie.Title.includes('Princess');
        }).map((iD) => {
          return iD.imdbID
        })
        for (let i = 0; i < findPrincess.length; i++) {
          let posterName = findPrincess[i];
          let getID = findPrincessID[i];
          let newList = document.createElement('li');
          let newLink = document.createElement('a');
          let newPoster = document.createElement('img')
          newPoster.setAttribute('src', posterName);
          newLink.setAttribute('href', "https://www.imdb.com/title/" + getID);
          ul.appendChild(newList);
          newList.appendChild(newLink);
          newLink.appendChild(newPoster);
        }
        break

      case 'batman':
        const findBatman = movies.filter((movie) => {
          return movie.Title.includes('Batman');
        }).map((movie) => {
          return movie.Poster
        })

        const findBatmanID = movies.filter((movie) => {
          return movie.Title.includes('Batman');
        }).map((iD) => {
          return iD.imdbID
        })
        for (let i = 0; i < findBatman.length; i++) {
          let posterName = findBatman[i];
          let getID = findBatmanID[i];
          let newList = document.createElement('li');
          let newLink = document.createElement('a');
          let newPoster = document.createElement('img')
          newPoster.setAttribute('src', posterName);
          newLink.setAttribute('href', "https://www.imdb.com/title/" + getID);
          ul.appendChild(newList);
          newList.appendChild(newLink);
          newLink.appendChild(newPoster);
        }
        break

      case 'newest':
        const findYear = movies.filter((filterObject) => {
          return filterObject.Year > 2014
        }).map((poster) => {
          return poster.Poster
        })

        const findID = movies.filter((filterObject) => {
          return filterObject.Year > 2014;
        }).map((iD) => {
          return iD.imdbID
        })
        for (let i = 0; i < findYear.length; i++) {
          let posterName = findYear[i];
          let getID = findID[i];
          let newList = document.createElement('li');
          let newLink = document.createElement('a');
          let newPoster = document.createElement('img')
          newPoster.setAttribute('src', posterName);
          newLink.setAttribute('href', "https://www.imdb.com/title/" + getID);
          ul.appendChild(newList);
          newList.appendChild(newLink);
          newLink.appendChild(newPoster);
        }
        break
    }
  })
})