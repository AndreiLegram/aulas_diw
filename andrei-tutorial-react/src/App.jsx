import './App.css'
import Caixa from './Caixa'
import img1 from './assets/bola-panico.jpg'
import img2 from './assets/bola-panico.jpg'
import img3 from './assets/bola-panico.jpg'

function App() {
  return (
    <>
      <Caixa img={img1} texto="Natureza">
        <p>Conteúdo de dentro da caixa</p>
      </Caixa>
      <Caixa img={img2} texto="Natureza" />
      <Caixa img={img3} texto="Natureza" />
    </>
  )
}

export default App
