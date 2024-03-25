const fetch = require("node-fetch");

const back_part = "https://api.themoviedb.org/3/";
const url = (movie) => {
  return back_part + movie + "?language=ko-KR";
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTBhNmQ4ZWUzNmEwMWE1OGNkOTg3Zjg1YzM1OWI5MCIsInN1YiI6IjY1ZWZmZmQ1ZmNlYzJlMDE3YTgyN2U4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A9uZhphMhaXEiH0HzpOcovZuAhWlWal6HwkVAAlW5-A",
  },
};

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());
