import React from 'react'
import MovieForm from '../components/MovieForm'

function onSubmit(movie) {
  console.log(movie);
}

function onCancel() {
  console.log("cancelado");
}

function GetNewMovie() {
  return (
    <MovieForm props={{
      "movie": {
        "_id": '',
        "name": null,
        "synopsis": null,
        "year": null,
        "cover": null,
        "trailerLink": null
      },
      "onSubmit": onSubmit,
      "onCancel": onCancel
    }} />
  );
}

export default GetNewMovie