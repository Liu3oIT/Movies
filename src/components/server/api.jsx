import axios from 'axios';
const BASE_URL_TREND = 'https://api.themoviedb.org/3/trending/movie/day';
const URL_SEARCH_MOVIES = 'https://api.themoviedb.org/3/search/movie';
const URL_GET_DETAILS_MOVIES = 'https://api.themoviedb.org/3/movie';

const KEY = 'f67e76050f18af747f45c959a8cec474';

export const axiosRequestTrendingMovie = async () => {

  const params = {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  };
  const respons = await axios.get(`${BASE_URL_TREND}`, params);
    
  return respons.data;
};
export const searchMovies = async searchQuery => {
  
  const params = {
    params: {
      query: searchQuery,
      api_key: KEY,
      language: 'en-US',
    },
  };
  const respons = await axios.get(`${URL_SEARCH_MOVIES}`, params);

  return respons.data;
};
export const axiosGetMovieDetails = async id => {
  const params = {
    params: {
      api_key: KEY,
    },
  };
  const respons = await axios.get(`${URL_GET_DETAILS_MOVIES}/${id}`, params);
  return respons.data;
};
export const axiosGetMovieCredits = async id => {
  const params = {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  };
  const respons = await axios.get(
    `${URL_GET_DETAILS_MOVIES}/${id}/credits`,
    params
  );
  return respons.data;
};
export const axiosGetMovieReviews = async id => {
  const params = {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  };
  const respons = await axios.get(
    `${URL_GET_DETAILS_MOVIES}/${id}/reviews`,
    params
  );
  return respons.data;
};