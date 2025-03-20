import { useState } from "react";

function Tarefas() {
    const [tarefas, setTarefas] = useState(['Estudar', 'Ler', 'Comer', 'Dormir'])
    
    const [novaTarefaInput, setNovaTarefaInput] = useState('')

    const adicionarTarefa = () => {
        if (novaTarefaInput.trim().length > 0) {
            setTarefas([...tarefas, novaTarefaInput]);
        }
    }

    const removerTarefa = (index) => {
        setTarefas(tarefas.filter((_, i) => i !== index))
    }

    return (
        <div>
            <ul>
                {tarefas.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => {removerTarefa(index)}}>X</button>
                    </li>
                ))}
            </ul>
            <input 
                type="text"
                value={novaTarefaInput}
                placeholder="Digite a tarefa"
                onChange={(e) => {setNovaTarefaInput(e.target.value)}}
            />
            <button onClick={() => {adicionarTarefa(novaTarefaInput)}}>Adicionar tarefa</button>
        </div>
    )
}

export default Tarefas