import { useState } from 'react'
import './App.css'
import logo from './assets/load.gif'
import axios from 'axios'
import MealCard from './MealCard'

function App() {
  const [carregando, setCarregando] = useState(false);
  const [search, setSearch] = useState(null)
  const [mealList, setMealList] = useState(null);
  const [meal, setMeal] = useState(null);

  const loading = (bool) => {
    setCarregando(bool)
  }

  const searchMeals = (search) => {
    loading(true)
    setSearch(search)
    const url = `https://www.themealdb.com/api/json/v1/1/search.php`
    const queryParams = `?s=${search}`
    axios.get(`${url}${queryParams}`)
      .then(reponse => {
        const meals = reponse.data.meals
        setMealList(meals)
        loading(false)
      })
      .catch(error => {
        console.log(error)
        loading(false)
      })
  }

  const getMeal = (id) => {
    loading(true)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php`
    const queryParams = `?i=${id}`
    axios.get(`${url}${queryParams}`)
      .then(reponse => {
        const meal = reponse.data.meals[0]
        setMeal(meal)
        loading(false)
      })
      .catch(error => {
        console.log(error)
        loading(false)
      })
  }

  return (
    <>
      <h1>Refeições</h1>
      {carregando && (
        <div className="loader">
          <img className="loader-spinner" src={logo} alt="Carregando..." />
        </div>
      )}

      <div>
        <label>
          Pesquisar:&nbsp;
          <input
            type="text"
            value={search ? search : ""}
            onChange={(e) => searchMeals(e.target.value)}
            placeholder="Apple"
          />
        </label>
      </div>

      {mealList &&
        <div className="container">
          {mealList && (
            <div className="left-column">
              <ul className="meal-list">
                {mealList.map((refeicao, index) => (
                  <li key={index}>
                    <a href="#" onClick={() => getMeal(refeicao.idMeal)}>{refeicao.strMeal}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {meal && (
            <div className="right-column">
              <MealCard meal={meal} />
            </div>
          )}
        </div>
      }
    </>
  )
}

export default App
