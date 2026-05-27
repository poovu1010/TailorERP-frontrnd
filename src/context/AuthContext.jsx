import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthDetails = createContext();

export function UserDetails({ children }) {
  const [token, managetoken] = useState(() => {});
  const [Customers,getCustomers]=useState([])

  const [isOpen,setopen] = useState(false)

  useEffect(()=>{

    async function getUserFunc(){
       const customer_data = await axios.get("http://localhost:5000/Owner/get-all-user",{ withCredentials: true })
       getCustomers(customer_data.data)
      
    }
    getUserFunc()
   
  },[])

  return <AuthDetails.Provider value={{Customers,getCustomers,isOpen,setopen}}>{children}</AuthDetails.Provider>;

  
}

export default AuthDetails;
