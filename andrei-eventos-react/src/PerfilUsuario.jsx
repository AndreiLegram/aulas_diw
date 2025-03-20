import { useState } from "react";

function PerfilUsuario() {

    const [usuario, setUsuario] = useState({
        nome: "Andrei",
        cidade: "Bento Gonçalves",
        profissao: "Desenvolvedor web"
    })

    const mudarCidade = () => {
        setUsuario((prev) => ({...prev, cidade: "cu"}));
    }

    return (
        <div>
            <p>Nome: {usuario.nome}</p>
            <p>Cidade: {usuario.cidade}</p>
            <p>Profissão: {usuario.profissao}</p>
            <button onClick={mudarCidade}>Mudar cidade</button>
        </div>
    );
}

export default PerfilUsuario