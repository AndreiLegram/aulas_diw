import React, { useState } from 'react'
import { useFindMoviesReducer } from '../hooks/useFindMoviesReducer.jsx';

function ListMovies() {
  const [search, setSearch] = useState('');
  const { state } = useFindMoviesReducer(search);
  const { data, loading, error } = state;
  return (
    <div>
      <h1>Listagem de Filmes</h1>
      <div itemsPerRow={2}>
            {loading ?
                <div>Carregando</div>
            :
                <>{
                    data && data.docs.length > 0
                    ?
                      data.docs.map(item => 
                      <div key={movie.id} className="movie-card">
                        <h3>{movie.name} ({movie.year})</h3>
                        <p>{movie.synopsis}</p>
                        {movie.cover && <img src={movie.cover} alt={`Capa de ${movie.name}`} style={{ maxWidth: '100px' }} />}
                        <button onClick={() => setSearch(movie)}>Editar</button>
                      </div>)
                    :
                      <h3>Nenhum filme encontrado...</h3>
                }</>
            }
            {error ? <p>{error}</p> : null}
        </div>
    </div>
  );
}

export default ListMovies