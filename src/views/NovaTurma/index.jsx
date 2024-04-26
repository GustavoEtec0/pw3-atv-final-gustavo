import React, { useEffect, useState } from 'react'
import './style.css'
import Input from '../../components/Form/Input.jsx'
import Select from '../../components/Form/Select.jsx'
import { useNavigate } from 'react-router-dom'

export default function Novaturma() {
  const navigate = useNavigate()
  const [siglas, setSiglas] = useState([])
  const [turmas, setTurmas] = useState({})

  useEffect(() => {
    fetchData()
  }, [siglas])

  const fetchData = async () => {
    await fetch('http://localhost:5000/siglas', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setSiglas(data))
      .catch((err) => {
        console.log(err)
      })
  }

  function handleChangeTurma(e) {
    setTurmas({ ...turmas, [e.target.name]: e.target.value })
  }

  function handleChangeSigla(e) {
    setTurmas({
      ...turmas,
      sigla: {
        id: e.target.value,
        sigla: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  function createTurma(turma) {
    fetch('http://localhost:5000/turmas', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(turma),
    })
      .then((res) => res.json())
      .then((data) => setTurmas(data), navigate('/turmas', { state: 'teste' }))
      .catch((err) => {
        console.log(err)
      })
  }

  function submit(e) {
    e.preventDefault()
    createTurma(turmas)
  }

  return (
    <section className="nova_turma_container">
      <h1>nova turma</h1>
      <form onSubmit={submit}>
        <Input
          type="text"
          name="turma"
          id="turma"
          placeholder="digite o nome do turma"
          text="digite o nome do turma"
          handlerOnChange={handleChangeTurma}
        />
        <Select option={siglas} handlerOnChange={handleChangeSigla} />
        <input type="submit" value="cadastra turma" />
      </form>
    </section>
  )
}
