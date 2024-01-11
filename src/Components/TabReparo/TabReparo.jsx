import React from 'react'
import './TabReparo.css'
import { Link } from 'react-router-dom'

export default function TabReparo() {
  return (
    <div className='TabelaCont'>
      <div className="CabecarioTabelaEqui">
        <Link to="/cliente/1"  className="NomeTabela">Equipamento</Link>
        <Link to="/cliente/1" className="NomeTabela">Nome</Link>
        <Link to="/cliente/1" className="NomeTabela">Telefone</Link>
      </div>
      <div className="CabecarioTabelaEqui">
        <div className="NomeTabelaData">Geladeira</div>
        <div className="NomeTabelaData">Mariano António Vunge</div>
        <div className="NomeTabelaData">85 99139 2625</div>
      </div>
      <div className="CabecarioTabelaEqui">
        <div className="NomeTabelaData">Ventilador</div>
        <div className="NomeTabelaData">Mariano António Vunge</div>
        <div className="NomeTabelaData">85 99139 2625</div>
      </div>
      <div className="CabecarioTabelaEqui">
        <div className="NomeTabelaData">Liquidificador</div>
        <div className="NomeTabelaData">Mariano António Vunge</div>
        <div className="NomeTabelaData">85 99139 2625</div>
      </div>
    </div>
  )
}
