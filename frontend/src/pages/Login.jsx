import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { login } from '../features/auth/authSlice.js'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [input, setInput] = useState({userName: "", password: ""})
  const [error, setError] = useState("")

  const handleInput = (e) => {
    const {name, value} = e.target

    setInput(prev => {
      return {
        ... prev,
        [name]: value
      }
    })
  }

  const handleSubmit = () => {
    
    if(!input.userName || !input.password){
      setError("All Fields are required")
      return
    }
    
    try {
      const url = "http://localhost:8001/api/v1/users/login"

      fetch(url, {
        method: 'POST',
        body: JSON.stringify({userName: input.userName, password: input.password}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(res => res.json())
      .then(data => {
        
        if(!data.data){
          setError(data.message)
          return
        }
        const info = {
          userName: data.data.userName,
          fullName: data.data.fullName,
          avatar: data.data.avatar,
          coverImage: data.data.coverImage,
          email: data.data.email,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken
        }
        dispatch(login(info))
        navigate("/")
        setError("")
      })

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='w-screen h-screen flex  justify-center items-center'>
      <div className=' w-3/4 sm:w-1/4 flex flex-col gap-5'>
        <div className='flex justify-center'><p className='text-white font-bold text-2xl'>Log In</p></div>
        <div className='flex flex-col'>
          <label className='text-white' htmlFor='userName'>UserName</label>
          <input onChange={handleInput} placeholder='UserName' className='rounded h-[40px] p-[10px] text-white bg-inherit border border-solid border-1 ' name='userName'></input>
        </div>

        <div className='flex flex-col'>
          <label className='text-white' htmlFor='password'>Password</label>
          <input onChange={handleInput} placeholder='password' type='password' className='rounded h-[40px] p-[10px] text-white bg-inherit border border-solid border-1 ' name='password'></input>
        </div>

        <div><p className='text-red-300'>{error && `*${error}`}</p></div>
        <div className='flex justify-center'>
          <button onClick={handleSubmit} className='h-[40px] w-full bg-purple-600 text-white font-semibold '>Log in</button>
        </div>
        <div><p className='text-white '>Don't have an Account <span onClick={()=> navigate("/register")} className='text-purple-600 underline hover:cursor-pointer'>Regitser</span></p></div>
     
      </div>
      
      
      
    </div>
  )

        
        
        
}

export default Login