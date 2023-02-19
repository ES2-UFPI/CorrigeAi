import { useState, useRef, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import "./App.css";


function App() {

  return (
    <div className="App">
      <div>
        <Link to="/criarProvaOuTarefa">Criar Prova ou Tarefa</Link>
      </div>
    </div>
  );
}

export default App;
