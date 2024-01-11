import React from 'react'
import './SingleClient.css'
import Nav from '../../Components/Nav/Nav'

export default function SingleClient() {
  return (
    <div className='ContentSingleCli'>
      <Nav />
      <div className="clenteContent">
        <div className="TitleClient">Cliente - Mariano António</div>
        <div className="dataSection">
            <div className="nomeSec">
                <span>Nome:</span>
                <span className='DataStyle'>Mariano António</span>
            </div>
            <div className="nomeSec">
                <span>Telefone:</span>
                <span className='DataStyle'> 85 99139 2625</span>
            </div>
            <div className="nomeSec">
                <span>Rua:</span>
                <span className='DataStyle'> Av. Abolição</span>
            </div>
            <div className="nomeSec">
                <span>Rua:</span>
                <span className='DataStyle'> Av. Abolição</span>
            </div>
            <div className="nomeSec">
                <span>Cidade:</span>
                <span className='DataStyle'> Redenção</span>
            </div>
            <div className="nomeSec">
                <span>Estado:</span>
                <span className='DataStyle'> Ceará</span>
            </div>
            <button className='EditButton'>Editar</button>
        </div>
      </div>
    </div>
  )
}
