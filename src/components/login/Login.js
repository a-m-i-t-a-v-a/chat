import React, { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'

const Login = () => {

    const [avatar,setAvatar]=useState({
        file:null,
        url:""
    })

    const handleAvatar=(e)=>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin=(e)=>{
        e.preventDefault()
        toast.warn("Toast message")
    }

  return (
    <div className='login'>
      <div className='item'>
        <h2>Welocme back!</h2>
        <form onSubmit={handleLogin}>
            <input type='text' name='Email' placeholder='Email'/>
            <input type='password' name='Password' placeholder='Password'/>
            <button>Sign In</button>
        </form>
      </div>
      <div className='separator'></div>
      <div className='item'>
      <h2>Create an account</h2>
        <form>
            <input type='text' name='Email' placeholder='Email'/>
            <input type='text' name='Username' placeholder='Username'/>
            <input type='password' name='Password' placeholder='Password'/>
            <label htmlFor='file'>
                <img src={avatar.url || "/avatar.png"} alt=''/>
                Upload image
            </label>
            <input type='file' id='file' style={{display:'none'}} onChange={handleAvatar}/>
            <button>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Login
