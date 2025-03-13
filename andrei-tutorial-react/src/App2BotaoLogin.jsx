function BotaoLogin({ estaLogado, setEstaLogado }) {
    const msg = estaLogado ? 'Você está autenticado. Clique para sair' : 'Clique para fazer login.'
    return <button onClick={() => setEstaLogado(!estaLogado)}>{msg}</button>
}

export default BotaoLogin