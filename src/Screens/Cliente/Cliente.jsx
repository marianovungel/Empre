import React from 'react'
import   './Cliente.css'
import Tabela from '../../Components/Tabela/Tabela'
import Nav from '../../Components/Nav/Nav'

export default function Cliente() {
  return (
    <div className='ContentClientes'>
      <Nav />
      <div className="clenteTicle">
        <div className="centerTicleContent">
            DADOS DO CLIENTE 
        </div>
      </div>
      <div className="TabelaClient">
        <Tabela />
      </div>
    </div>
  )
}
