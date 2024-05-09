import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLoggedIn = useSelector(state => state.auth)

  return (
    <div className=' bg-[#121212] fixed top-0 left-0 right-0 h-20 border-gray-400 border-b-2 text-white flex justify-between items-center pr-8 pl-8 z-10'>
      <div>logo</div>
      <div>
        <input placeholder='Search' className='h-10 w-[300px] bg-inherit border-gray-400 border-2 pl-5'></input>
      </div>
      {userLoggedIn.status
      ? 
      <div className='flex gap-7'>
        <button className='border-2 border-black px-2 py-1 rounded bg-purple-600 text-black font-bold'>{userLoggedIn.data.userName}</button>
        <button onClick={() => dispatch(logout())}>Log out</button>
      </div>
      :
      <div className='flex gap-7'>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")} className='bg-purple-600 h-9 px-4 shadow shadow-gray-700 text-black font-bold'>Sign Up</button>
      </div>}
      
    </div>
  )
}

export default Header