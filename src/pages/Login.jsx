// import { set } from 'mongoose'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'


const Login = () => {
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [redirect,setRedirect]=useState(false)

  const  login= async (e)=>{
    e.preventDefault();
  const res= await  fetch('http://localhost:3000/login',{
      method:'POST',
      body:JSON.stringify({name,password}),
      headers:{
        'Content-Type':'application/json'
      },
      credentials:'include'
    })
    if (res.status === 200) {
      setRedirect(true);
      alert('Login successfully');
    } else {
      alert('Wrong credentials');
    }
      }
  if(redirect){
    return <Navigate to={'/'} />
  }
  return (
    <>
<form action="" className='login' onSubmit={login}>
       <h1>login</h1>

    <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}  />
    <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
    <button>Login</button>

</form>
    </>
  )
}

export default Login