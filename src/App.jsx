import { useEffect, useState } from 'react'
import './App.css'
import Select from './components/Form/Select'
import Input from './components/Form/Input'

function App() {
  const [turma, setTurma] = useState([])

  useEffect(() => {
    fetchData()
  }, [turma])

  const fetchData = async () => {
    await fetch('http://localhost:5000/turmas', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setTurma(data))
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="App container">
      <h1>cadastro de turma </h1>
      <form>
        <Input
          type="text"
          name="turma"
          id="turma"
          placeholder="digite o nome da turma"
          text="digite o nome da turma"
        />
        <Select option={turma} />
      </form>
    </div>
  )
}

export default App
