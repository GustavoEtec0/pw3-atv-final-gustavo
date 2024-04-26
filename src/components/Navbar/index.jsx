import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'
import Container from '../Container'

export default function Navbar() {
  return (
    <div>
      <Container>
        <ul className="list">
          <li className="item">
            <Link to="/"> home</Link>
          </li>
          <li className="item">
            <Link to="/turmas"> turma</Link>
          </li>
          <li className="item">
            <Link to="/nova-turma"> Cadastra turma</Link>
          </li>
        </ul>
      </Container>
      <Outlet />
    </div>
  )
}
