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

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const details = (id) => {
  const detailUrl = back_part + `movie/${id}?language=ko-kr`;
  return fetch(detailUrl, options).then((res) => res.json());
};

export const searchMoive = (keyword) => {
  const searchUrl = back_part + `search/movie?query=${keyword}&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};

export const videos = (vidid) => {
  const videoUrl = back_part + `movie/${vidid}/videos?language=ko-kr`;
  return fetch(videoUrl, options).then((res) => res.json());
};

// export const lists = (id) => {
//   const movieList = back_part + `movie/${id}/lists?language=ko-kr`;
//   return fetch(movieList, options).then((res) => res.json());
// };

// export const list = () =>
//   fetch(url("genre/movie/list"), options).then((res) => res.json());
// export const list = () =>
//   fetch(url("certification/movie/list"), options).then((res) => res.json());
export const list02 = () =>
  fetch(url("genre/movie/list?language=ko-KR"), options).then((res) =>
    res.json()
  );
export const discover = (id) => {
  const disUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-kr&page=1&sort_by=popularity..desc&with_genres=${id}`;
  return fetch(disUrl, options).then((res) => res.json());
};

//api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' \
// discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' \with_release_type

// discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=vote_count.desc&with_genres=${id}`
