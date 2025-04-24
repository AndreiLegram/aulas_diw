import axios from 'axios';

function PostMovie(movie) {
  return axios.post(`http://localhost:3000/api/movies`, movie);
}

export default PostMovie;
