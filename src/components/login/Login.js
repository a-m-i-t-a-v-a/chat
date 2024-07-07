import React, { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import upload from '../../lib/uploads'

const Login = () => {

    const [avatar,setAvatar]=useState({
        file:null,
        url:""
    })

    const [loading,setLoading]=useState(false)

    const handleAvatar=(e)=>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin=async(e)=>{
        e.preventDefault()
        setLoading(true)
        const formData=new FormData(e.target)
        const data={
            email:formData.get('email'),
            password:formData.get('password')
        }
        try{
            await signInWithEmailAndPassword(auth,data.email,data.password)
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    }

    const handleRegister=async(e)=>{
        e.preventDefault()
        setLoading(true)
        const formData=new FormData(e.target)
        const data={
            username:formData.get('username'),
            email:formData.get('email'),
            password:formData.get('password')
        }
        try{
            const res=await createUserWithEmailAndPassword(auth,data.email,data.password)
            const imgUrl=await upload(avatar.url)
            await setDoc(doc(db,'users',res.user.uid),{
                username:data.username,
                email:data.email,
                avatar:imgUrl,
                id:res.user.uid,
                blocked:[]
            });
            await setDoc(doc(db,"userchats",res.user.uid),{
                chats:[]
            })
            toast.success('Account created successfully')
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    }

  return (
    <div className='login'>
      <div className='item'>
        <h2>Welocme back!</h2>
        <form onSubmit={handleLogin}>
            <input type='text' name='email' placeholder='Email'/>
            <input type='password' name='password' placeholder='Password'/>
            <button disabled={loading}>{loading ? 'Loading':'Sign In'}</button>
        </form>
      </div>
      <div className='separator'></div>
      <div className='item'>
      <h2>Create an account</h2>
        <form onSubmit={handleRegister}>
            <input type='text' placeholder='Username' name='username'/>
            <input type='text' placeholder='Email' name='email'/>
            <input type='password' placeholder='Password' name='password'/>
            <label htmlFor='file'>
                <img src={avatar.url || "/avatar.png"} alt=''/>
                Upload image
            </label>
            <input type='file' id='file' style={{display:'none'}} onChange={handleAvatar}/>
            <button disabled={loading}>{loading ? 'Loading':'Register'}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
