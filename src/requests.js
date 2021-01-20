const API_KEY = "c4d094c3dc5396e6bb25b59cb71dbf48";

export default {
  fetchTrending: `trending/all/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&region=IN&language=hi-IN`,

  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  FetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
