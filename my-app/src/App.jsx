import { useEffect, useState } from 'react';
import Tarefa from './components/tarefa.jsx';

const API_URL = 'https://crudcrud.com/api/89f2c99ff5e54cd498d6de5d37cd34e1/tarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa._id !== id));
  };

  useEffect(()=>{
    fetch(API_URL)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error(" Erro ao buscar tarefas :",error))
  }, [])

const handleSubmit = (e) => {
  e.preventDefault();

  if(novaTarefa.trim() === '') return;
  
 const nova = { texto: novaTarefa.trim()}
 fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type' : 'application/json'},
  body: JSON.stringify(nova)
  })
    .then(res => res.json())
    .then(tarefaCriada => {
      setTarefas([...tarefas,nova]);
      setNovaTarefa('');
 })
    .catch(error => console.error(" Erro ao buscar tarefas :",error))

  
}
  return (
    <main>
      <h1>Lista de Tarefas semanais.</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite uma nova tarefa" 
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        />
      <button type="submit">Adicionar</button>
      </form>
      <ul>
          {tarefas.map(tarefa => (
            <Tarefa 
              key={tarefa._id}
              texto={tarefa.texto}
              onRemove={() => removerTarefa(tarefa._id)}
            />
          ))}
      </ul>

      </main>

  )
}

export default App
