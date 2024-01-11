import React, { useContext, useRef } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {Context} from '../../Context/Context'
import api from "../../api"

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch } = useContext(Context)

  const Submit = async (e)=>{
      e.preventDefault();
      dispatch({ type: "LOGIN_START"})
      try{
          const res = await api.get("https://jsonplaceholder.typicode.com/posts/1")
          console.log(res)
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
          // window.location.replace("/");
      }catch(err){
          dispatch({ type: "LOGIN_FAILURE"})
      }
  }
  return (
    <div className='ContentLogin'>
      <form action="" className="formLogin" onSubmit={Submit}>
        <h1 className="titleLogin">LOGIN</h1>
        <input type="text" placeholder='Usuário' ref={userRef} className='InputLogin' />
        <input type="password" placeholder='Senha' ref={passwordRef} className='InputLogin' />
        <button className='ButtonLogin' type="submit">Login</button>
      </form>
      <Link className="create" to="/registrar">Criar conta</Link>
    </div>
  )
}
