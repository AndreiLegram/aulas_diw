import axios from 'axios';

function DeleteMovie(movie) {
  return axios.delete(`http://localhost:3000/api/movies/${movie._id}`);
}

export default DeleteMovie;
