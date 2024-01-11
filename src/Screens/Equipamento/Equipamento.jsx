import React from 'react'
import TabReparo from '../../Components/TabReparo/TabReparo'
import Nav from '../../Components/Nav/Nav'

export default function Equipamento() {
  return (
    <div className='ContentClientes'>
      <Nav />
      <div className="clenteTicle">
        <div className="centerTicleContent">
            Equipamentos em Reparo 
        </div>
      </div>
      <div className="TabelaClient">
        <TabReparo />
      </div>
    </div>
  )
}
