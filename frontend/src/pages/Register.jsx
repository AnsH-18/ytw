import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    avatar: "",
    coverImage: ""
  })
  const [error, setError] = useState("")
  const [status, setStatus] = useState(false)


  const handleInput = (e) => {
      const {name, value, type} = e.target
      setInput(input => {
         if(type != 'file') return {
            ...input,
            [name]: value
          }
          else{
            return{
              ...input,
              [name]: e.target.files[0]
            }
          }
      })
  }

  const handleSubmit = () => {
    //don't set auth state 
    try {
      if(!input.userName || !input.fullName || !input.email || !input.password || !input.avatar || !input.coverImage){
        setError("All fields are required")
        setStatus(false)
        return
      }
      
        const url = "http://localhost:8001/api/v1/users/register"

        const formData = new FormData()
        
        formData.append('userName', input.userName)
        formData.append('fullName', input.fullName),
        formData.append('email', input.email)
        formData.append('password', input.password)
        formData.append('avatar', input.avatar)
        formData.append('coverImage', input.coverImage)


        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err)) 
        
        setStatus(true)
        setError("")

    
    } catch (error) {
      console.log(error)
      setError("")
    }

    status && navigate("/login")


  }


  return (
    <div className=' h-screen flex  justify-center pt-[40px] ]'>
      <div className=' w-3/4 sm:w-2/3 lg:w-1/4 flex flex-col gap-3 '>
        <div className='flex justify-center'><p className='text-white font-bold text-[30px] mb-[20px]'>Sign Up</p></div>
        <div className='flex flex-col'>
          <label className='text-white' htmlFor='userName'>UserName</label>
          <input onChange={handleInput} placeholder='username' className='rounded h-10 p-2 text-white bg-inherit border border-solid border-1 ' name='userName'></input>
        </div>

        <div className='flex flex-col gap-1'>      
          <label className='text-white' htmlFor='fullName'>Full Name</label>
          <input onChange={handleInput} placeholder='fullname' className='rounded h-10 p-2 bg-inherit text-white border border-solid border-1 ' name='fullName'></input>
        </div>

        <div className='flex flex-col'>
          <label className='text-white' htmlFor='email'>Email</label>
          <input onChange={handleInput} placeholder='email' className='rounded h-10 p-2 text-white bg-inherit border border-solid border-1 ' name='email'></input>
        </div>

        <div className='flex flex-col'>
          <label className='text-white' htmlFor='password'>Password</label>
          <input onChange={handleInput} placeholder='password' type='password' className='rounded h-10 p-2 text-white bg-inherit border border-solid border-1 ' name='password'></input>
        </div>

        <div className='flex flex-col'>
          <label className='text-white' htmlFor='avatar'>Avatar</label>
          <input onChange={handleInput} name='avatar' type='file' className='text-white'></input>
        </div>

        <div className='flex flex-col'>
          <label className='text-white' htmlFor='coverImage'>Cover Image</label>
          <input onChange={handleInput} name='coverImage' type='file' className='text-white '></input>
        </div>
        <div><p className='text-red-400 '>{error && error}</p></div>
        <div className='flex justify-center'>
          <button onClick={handleSubmit} className='h-10 w-full bg-purple-600 text-white font-semibold '>Register</button>
        </div>
        <div><p className='text-white '>Already have an Account <span onClick={()=> navigate("/login")} className='text-purple-600 underline hover:cursor-pointer'>Login</span></p></div>
      </div>
      
      
      
    </div>
  )
}

export default Register