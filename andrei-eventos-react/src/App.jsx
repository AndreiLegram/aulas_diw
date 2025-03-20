import './App.css'
import { useState } from 'react'
import BotaoLogin from './BotaoLogin'
import PerfilUsuario from './PerfilUsuario'
import Tarefas from './Tarefas'

function App() {
    const [estaLogado, setEstaLogado] = useState(false)

    const galerinha = [
        { 'id': 1, nome: 'Huguinho', ativo: true },
        { 'id': 2, nome: 'Zezinho', ativo: true },
        { 'id': 3, nome: 'Luizinho', ativo: false },
        { 'id': 4, nome: 'Mariazinha', ativo: true },
        { 'id': 5, nome: 'Joaquina', ativo: true },
        { 'id': 6, nome: 'Ludwig', ativo: false }
    ]

    return (
        <>
            <Tarefas />
            <PerfilUsuario />
            <BotaoLogin estaLogado={estaLogado} setEstaLogado={setEstaLogado} />
            <ul>
                {galerinha.filter((pessoa) => pessoa.ativo).map((pessoa) => (<li key={pessoa.id}>{pessoa.nome}</li>))}
            </ul>
        </>
    )
}

export default App
