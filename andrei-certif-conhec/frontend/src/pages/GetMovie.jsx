import React from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import MovieForm from '../components/MovieForm'

export function loader({ params }) {
  return axios.get(`http://localhost:3000/api/movies/${params.id}`)
    .then(res => res)
    .catch(err => console.log(err));
}

function onSubmit(movie) {
  console.log(movie);
}

function onCancel() {
  console.log("cancelado");
}

function GetMovie() {
  const movie = useLoaderData();
  return (
    <MovieForm props={{
      "movieToEdit": movie.data,
      "onSubmit": onSubmit,
      "onCancel": onCancel
    }} />
  );
}

export default GetMovie