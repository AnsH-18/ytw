import React, { useEffect } from 'react'
import {useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

function Protected({children}) {
    const naviagte = useNavigate()
    const status = useSelector((state) => state.auth)
   useEffect(() => {
        if(!status.status){
            naviagte("/register")
        }
   })

  return (
    children
  )
}

export default Protected