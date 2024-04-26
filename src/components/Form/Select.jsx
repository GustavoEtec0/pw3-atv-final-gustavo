import React from 'react'
import './Select.css'

export default function Select({ text, name, option, handlerOnChange }) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}</label>
      <select onChange={handlerOnChange}>
        <option value={null}>Selecione uma turma...</option>
        {option.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.sigla}
          </option>
        ))}
      </select>
    </div>
  )
}
