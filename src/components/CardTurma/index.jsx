import React from 'react'
import { Link } from 'react-router-dom'

export default function CardTurma({ id, turma, sigla, handlerRemove }) {
    const remove = (e) => {
        handlerRemove(id)
    }

    return (
        <div>
            <h4>{turma}</h4>
            <p>
                <span>sigla: </span> {sigla}
            </p>
            <div className="book_card_actions">
                <Link to={`/editar-turma/${id}`}>Editar</Link>
                <button onClick={remove}>Excluir</button>
            </div>
        </div>
    )
}
