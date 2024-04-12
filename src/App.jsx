import { useEffect, useState } from "react";
import "./App.css";
import Select from "./components/Form/Select";
import Input from "./components/Form/Input";

function App() {
  const [sigla, setSigla] = useState([]);
  const [turma, setTurma] = useState({});

  useEffect(() => {
    fetchData();
  }, [sigla]);

  const fetchData = async () => {
    await fetch("http://localhost:5000/siglas", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSigla(data))
      .catch((err) => {
        console.log(err);
      });
  };

  function handleChangeTurma(e) {
    setTurma({ ...turma, [e.target.name]: e.target.value });
  }

  function handleChangeSigla(e) {
    setTurma({
      ...turma,
      sigla: {
        id: e.target.value,
        sigla: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function createTurma(book) {
    fetch("http://localhost:5000/turmas", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => setTurma(data))
      .catch((err) => {
        console.log(err);
      });
  }

  function submit(e) {
    // e.preventDefault();
    alert("turma cadastrada!");
    createTurma(turma);
  }

  return (
    <div className="App container">
      <h1>cadastro de turma </h1>
      <form onSubmit={submit}>
        <Input
          type="text"
          name="turma"
          id="turma"
          placeholder="digite o nome da turma"
          text="digite o nome da turma"
          handlerOnChange={handleChangeTurma}
        />
        <Select option={sigla} handlerOnChange={handleChangeSigla} />
        <input type="submit" value="cadastra turma" />
      </form>
    </div>
  );
}

export default App;
