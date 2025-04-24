import axios from 'axios';

function PutMovie(movie) {
  return axios.put(`http://localhost:3000/api/movies/${movie._id}`, movie);
}

export default PutMovie;
