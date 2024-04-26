import React from 'react'

export default function CardTurma({ turma, sigla }) {
  return (
    <div>
      <h4>{turma}</h4>
      <p>
        <span>sigla: </span> {sigla}
      </p>
    </div>
  )
}
