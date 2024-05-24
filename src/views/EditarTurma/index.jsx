import React, { useEffect, useState } from 'react'
import './style.css'
import Input from '../../components/Form/Input.jsx'
import Select from '../../components/Form/Select.jsx'
import { useNavigate, useParams } from 'react-router-dom'

export default function Editarturma() {
    const navigate = useNavigate()
    const [siglas, setSiglas] = useState([])
    const [turmas, setTurmas] = useState({})

    const { id } = useParams()

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

    const fetchTurmas = async () => {
        await fetch(`http://localhost:5000/turmas/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setTurmas(data))
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
        fetchTurmas()
    }, [])

    const editTurma = (turma) => {
        fetch(`http://localhost:5000/turmas/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(turma),
        })
            .then((res) => res.json())
            .then((data) => {
                setTurmas(data)
                navigate('/turmas', { state: 'Turma editada com sucesso' })
            })
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

    function submit(e) {
        e.preventDefault()
        editTurma(turmas)
    }

    return (
        <section className="nova_turma_container">
            <h1>editar turma</h1>
            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="turma"
                    id="turma"
                    placeholder="digite o nome do turma"
                    text="digite o nome do turma"
                    handlerOnChange={handleChangeTurma}
                    value={turmas.turma}
                />
                <Select option={siglas} handlerOnChange={handleChangeSigla} />
                <input type="submit" value="editar turma" />
            </form>
        </section>
    )
}
