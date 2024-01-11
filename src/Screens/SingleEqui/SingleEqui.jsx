import React from 'react'
import './SingleEqui.css'
import Nav from '../../Components/Nav/Nav'

export default function SingleEqui() {
  return (
    <div className='ContentSingleCli'>
        <Nav />
      <div className="clenteContent">
        <div className="TitleClient">Equipamento - Mesa</div>
        <div className="dataSection">
            <div className="nomeSec">
                <span>Nome:</span>
                <span className='DataStyle'>Mesa de Estudo</span>
            </div>
            <div className="nomeSec">
                <span>Modelo:</span>
                <span className='DataStyle'> Addidas</span>
            </div>
            <div className="nomeSec">
                <span>Fabricante:</span>
                <span className='DataStyle'> Addidas</span>
            </div>
            <div className="nomeSec">
                <span>Tipo:</span>
                <span className='DataStyle'> 3</span>
            </div>
            <div className="nomeSec">
                <span>Problema:</span>
                <span className='DataStyle'> Pé quebrado</span>
            </div>
            <div className="nomeSec">
                <span>Data-Entrada:</span>
                <span className='DataStyle'> 2023-12-31</span>
            </div>
            <div className="nomeSec">
                <span>Data-Saída:</span>
                <span className='DataStyle'> 2024-01-31</span>
            </div>
            <div className="nomeSec">
                <span>Desc. Reparo:</span>
                <span className='DataStyle'> sdkj wehj kwenkjj wkejbk jk wehb</span>
            </div>
            <div className="nomeSec">
                <span>Cliente:</span>
                <span className='DataStyle'> Mariano António</span>
            </div>
            <button className='EditButton'>Editar</button>
        </div>
      </div>
    </div>
  )
}
