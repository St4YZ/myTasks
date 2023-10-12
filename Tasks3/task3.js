const movie = {
    title: "The Big Short",
    releaseYear: 2015,
    genre: "bio-drama"
}

movie.genre = "bio-crime-comedy"
movie.title = "Wolf from Wall-street"
movie.actors = "Brad Pitt"
movie.director = "Adam McKay"
delete movie.title

console.log(movie)