import React from 'react'
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <h1>Página não encontrada!</h1>
            <p>Esta página está indisponível ou não existe.</p>
            <Link to='/home'>Voltar para o início</Link>
        </div>
    );
}
export default ErrorPage;