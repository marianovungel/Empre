import React from 'react'
import './Registrar.css'
import { Link } from 'react-router-dom'

export default function Registrar() {
  return (
    <div className='ContentLogin'>
      <form action="" className="formLogin">
        <h1 className="titleLogin">Criar Conta</h1>
        <input type="text" placeholder='Usuário' className='InputLogin' />
        <input type="password" placeholder='Senha' className='InputLogin' />
        <button className='ButtonLogin'>Criar</button>
      </form>
      <Link className="create" to="/login">Login</Link>
    </div>
  )
}
