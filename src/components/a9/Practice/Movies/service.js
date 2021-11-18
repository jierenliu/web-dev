const URL = 'https://tranquil-island-31288.herokuapp.com/rest/movies';

export const findAllMovies = () =>
    fetch(URL)
        .then(response => response.json());

export const deleteMovie = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

export const createMovie = (movie) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const findMovieById = (id) =>
    fetch(`${URL}/${id}`)
        .then(response => response.json());

export const updateMovie = (movie) =>
    fetch(`${URL}/${movie._id}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export default {
    findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie
};

