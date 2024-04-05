import React from 'react'
import './Input.css'

export default function Input({
    type,
    text,
    name,
    placeholder,
    handlerOnChange,
    value,
}) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handlerOnChange}
                value={value}
            />
        </div>
    )
}
