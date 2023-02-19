import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

function CreateExamOrTask() {

  const [theme, setTheme] = useState("");
  const [inicialDate, setInicialDate] = useState("");
  const inicialDateRef = useRef(null);
  const [finalDate, setFinalDate] = useState("");
  const finalDateRef = useRef(null);
  const [provas, setProvas] = useState([]);

  useEffect(() => {
    async function fetchProvas () {
     fetch("http://localhost:3000/Provas")
       .then((response) => response.json())
       .then((res) => setProvas(res))
   }
     fetchProvas();
     console.log(provas);
   }, []);
 
   const handleDataInicialChange = ((e:any) => {
     setInicialDate(e.target.value);
   });
 
   const handleDataFinalChange = ((e:any) => {
     setFinalDate(e.target.value);
   });
 
   async function handleCreateExam(e: React.FormEvent<HTMLFormElement>) {
     e.preventDefault();
     console.log(JSON.stringify({ theme }));
     fetch("http://localhost:3000/criarProvaTeste", {
       method: "POST",
       body: JSON.stringify({
         tema: theme,
         dataInicio: inicialDate,
         dataFim: finalDate,
       }),
       headers: {
         "Content-Type": "application/json",
       },
     });
     setTheme("");
   }

  return (
    <div className="App">
      <form onSubmit={handleCreateExam}>
        <label htmlFor="Exam-title">Titulo Prova</label>
        <input
          id="Exam-title"
          placeholder="titulo"
          value={theme}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTheme(e.target.value)
          }
        />
        <div>
          <input type="date" value={inicialDate} onChange={handleDataInicialChange} ref={inicialDateRef} />
          <p>Selected Date: {inicialDate}</p>
        </div>
        <div>
          <input type="date" value={finalDate} onChange={handleDataFinalChange} ref={finalDateRef} />
          <p>Selected Date: {finalDate}</p>
        </div>
        
        <Link to="/adicionarQuestoes"><button>Criar Prova</button></Link>
      </form>
    </div>
  )
}

export default CreateExamOrTask