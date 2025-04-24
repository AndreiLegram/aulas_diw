import React, { useState } from 'react';
import MovieForm from '../components/MovieForm';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (movie) => {
    if (editingMovie) {
      setMovies(movies.map(m => m.id === movie.id ? movie : m));
    } else {
      setMovies([...movies, movie]);
    }
    setShowForm(false);
    setEditingMovie(null);
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setShowForm(true);
  };

  return (
    <div>
      <h1>Gerenciamento de Filmes</h1>
      
      <button onClick={() => {
        setEditingMovie(null);
        setShowForm(true);
      }}>
        Adicionar Novo Filme
      </button>

      {showForm && (
        <MovieForm
          movieToEdit={editingMovie}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingMovie(null);
          }}
        />
      )}

      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.name} ({movie.year})</h3>
            <p>{movie.synopsis}</p>
            {movie.cover && <img src={movie.cover} alt={`Capa de ${movie.name}`} style={{ maxWidth: '100px' }} />}
            <button onClick={() => handleEdit(movie)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;