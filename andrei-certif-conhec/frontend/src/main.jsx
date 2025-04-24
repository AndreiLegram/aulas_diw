import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListMovies from './pages/ListMovies.jsx'
import GetMovie, {loader as movieLoader} from './pages/GetMovie.jsx'
import GetNewMovie from './pages/GetNewMovie.jsx'
import ErrorPage from "./pages/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from './pages/MoviePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MoviePage />,
      },
      {
        path: "/home",
        element: <MoviePage />,
      },
      {
        path: "/filmes",
        element: <ListMovies />,
      },
      {
        path: "/filmes/new",
        element: <GetNewMovie />,
      }, 
      {
        path: "/filmes/:id",
        element: <GetMovie />,
        loader: movieLoader,
      },        
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
