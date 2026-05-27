import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {

  const [isAuth,setAuth] = useState(null)

  useEffect(()=>{
    async function isVerified() {
      try {

        const res = await axios.get("http://3.220.158.94:5000/Owner/Verify",{withCredentials:true})
      

      setAuth(true)
        
      } catch (error) {
        // console.log(error.response)
        setAuth(false)
         
       
      }
      
    }
    isVerified()
  },[])



   if (isAuth === false) {
          return <Navigate to={"/auth/login"}/>
          
        }

return children

  return (
    <></>
  )
}
