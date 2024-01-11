import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    const Data = [
        {
            id:"1",
            nome:"Cliente",
            url:"/"
        },
        {
            id:"2",
            nome:"A-concertar",
            url:"/equipamento"
        },
        {
            id:"3",
            nome:"Concertado",
            url:"/"
        },
    ]
  return (
    <div className='FullMenu'>
      <div className="itens">
        {Data.map((dt)=>(
            <Link to={dt.url} key={dt.id} className="item">{dt.nome}</Link>
        ))}
      </div>
    </div>
  )
}
