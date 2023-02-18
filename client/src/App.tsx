import { useState } from 'react'
import './App.css'

function App() {
  const [tema, setTema] = useState("")

  function handleCreateExam(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(JSON.stringify({ tema }))
    fetch("http://localhost:3000/criarProvaTeste", {
      method: "POST",
      body: JSON.stringify({ 
        tema,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleCreateExam}>
        <label htmlFor='Exam-title'>Titulo Prova</label>
        <input 
          id="Exam-title" 
          placeholder='titulo' 
          value={tema}
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setTema(e.target.value)}
          />
          <button>Criar Prova</button>
      </form>
      
    </div>
  )
}

export default App
