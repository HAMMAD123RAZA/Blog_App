import React, { useState } from 'react'

const Register = () => {
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')

  const register=async(e)=>{
    e.preventDefault()
  const res= await fetch('http://localhost:3000/register',{
    method: 'POST',
    body: JSON.stringify({ name, password }),
    headers: {
        'Content-Type': 'application/json'
    }
    })
    if(res.status===200){
      alert('register successfully')
    }
    else{
      alert("register failed")
    }
  }

  return (
    <>
    <form action="" className='register' onSubmit={register}>  
       <h1>register</h1>

        <input type="text" placeholder='Enter your name' value={name} onChange={e=>{
          setName(e.target.value)
        }} />
        <input type="text" placeholder='Enter your password' value={password} onChange={e=>{
          setPassword(e.target.value)
        }}/>
        <button type='submit'>Register</button>
    </form>
    </>
  )
}

export default Register