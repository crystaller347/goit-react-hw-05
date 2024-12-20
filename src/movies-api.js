import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmQ5YzRhZWU4NGY2MDU1MTc0MjU3MGY2NzYzZDEwOSIsIm5iZiI6MTczMjUzODExMS45MjUxNTY0LCJzdWIiOiI2NzQ0NmQ2YWYzZjI5MTkxMmU5NTcyM2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qf_HVNgZ1klB1MLEE2WIgfBLTmMhVoRuDPLm9vUoXmY'
    }
}

export const fetchTrendingMovies = async () => {
    const response = await axios.get('3/trending/movie/day', options);
    return response.data;
}

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`3/movie/${movieId}`, options);
    return response.data;
}

export const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`3/movie/${movieId}/credits`, options);
    return response.data.cast;
}

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`3/movie/${movieId}/reviews`, options);
    return response.data.results;
}

export const fetchSearchResults = async (query) => {
    const response = await axios.get(`3/search/movie?query=${query}`, options);
    return response.data.results;
}