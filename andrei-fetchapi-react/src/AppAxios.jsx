import { useState } from 'react'
import './App.css'
import logo from './assets/load.gif'
import axios from 'axios'

function App() {
  const [user, setUser] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const getRandomNumber = (min, max) => {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
  }

  const loading = (bool) => {
    setCarregando(bool)
    setDisabled(bool)
  }

  const testar = () => {
    loading(true)
    const url = `https://jsonplaceholder.typicode.com/users/`
    const rand = getRandomNumber(1, 10)
    axios.get(`${url}${rand}`)
      .then(reponse => {
        setUser(reponse.data)
        loading(false)
      })
      .catch(error => {
        console.log(error)
        loading(false)
      })
  }

  return (
    <>
      <h1>Exemplo de uso da Fetch API</h1>
      <button onClick={() => testar()} disabled={disabled}>Testar Fetch</button>
      { carregando && 
        <div className="loader">
          <img className="loader-spinner" src={logo} alt="Carregando..." />
        </div>
      }
      <div>
        <p id="name">Nome: {user?.name && user.name}</p>
        <p id="email">Email: {user?.email && user.email}</p>
        <p id="username">Username: {user?.username && user.username}</p>
      </div>
    </>
  )
}

export default App
