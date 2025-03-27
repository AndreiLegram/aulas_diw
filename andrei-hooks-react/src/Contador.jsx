import { useReducer } from 'react'

function meuReducer(state, action) {
    switch (action.type) {
        case "inc":
            return { contador: state.contador + 1 }
        case "dec":
            return { contador: state.contador - 1 }
        case "mlt":
            return { contador: state.contador * 2 }
        case "div":
            return { contador: state.contador / 2 }
        case "zer":
            return { contador: 0 }
        default:
            return state
    }
}

function Contador() {
    const [state, dispatch] = useReducer(meuReducer, { contador: 0 })

    return (
        <div style={{"textAlign": "center"}}>
            <p>Contador: {state.contador}</p>
            <button onClick={() => dispatch({ type: "inc" })}>Aumentar</button>
            <button onClick={() => dispatch({ type: "dec" })}>Diminuir</button>
            <button onClick={() => dispatch({ type: "mlt" })}>Multiplicar por 2</button>
            <button onClick={() => dispatch({ type: "div" })}>Dividir por 2</button>
            <button onClick={() => dispatch({ type: "zer" })}>Zerar</button>
        </div>
    )
}

export default Contador
