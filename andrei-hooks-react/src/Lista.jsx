import { useMemo, useState } from "react"

const produtos = ["Notebook", "Celular", "Tablet", 
        "Teclado", "Mouse", "Monitor", "Impressora"]

function Lista() {
    const [busca, setBusca] = useState("")

    const produtosFiltrados = useMemo(() => {
        console.log("Filtrando produtos...")
        return produtos.filter((produto) => 
            produto.toLowerCase().includes(busca.toLowerCase()))
    }, [busca])

    return (
        <div>
            <input 
                type="text"
                placeholder="Busque seu produto"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />
            <ul>
                {produtosFiltrados.map((produto, index) => (
                    <li key={index}>{produto}</li>
                ))}
            </ul>
        </div>
    )
}

export default Lista
