import axios from 'axios';

const API_KEY = '80dd5d087ca76f72d259ad6d0e54d71f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  return (await axios.get(`/trending/all/day?api_key=${API_KEY}`)).data.results;
};

export const getMovieById = async id => {
  return (await axios.get(`/movie/${id}?api_key=${API_KEY}`)).data;
};

export const getReviewsById = async id => {
  return (await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`)).data
    .results;
};

export const getCastById = async id => {
  return (await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`)).data.cast;
};

export const searchMovies = async query => {
  return (await axios.get(`/search/movie?query=${query}&api_key=${API_KEY}`))
    .data.results;
};
