import React, { useContext, useState } from 'react'
import AuthDetails from '../context/AuthContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function AddCustomer() {
  const { isOpen, setopen,Customers,getCustomers} = useContext(AuthDetails)
  console.log(Customers)

  const [input, setInput] = useState({
    customer_name: "",
    Phone: "",
    Address: ""
  })


  function openTogglefun() {
    setopen(!isOpen)
  }


  function setInputfun(e) {
    const input_name = e.target.name;
    const input_value = e.target.value;
    setInput(prevs => ({...prevs,[input_name]:input_value}))
  }

  async function submitform(e) {
    try {
      
    e.preventDefault()
    const sendData = await axios.post("http://localhost:5000/Owner/newCustomer",{
      customer_name:input.customer_name,
      Phone:input.Phone,
      Address:input.Address
    },{withCredentials:true})
     const data =sendData.data.data
console.log(sendData.data._id)

     const detail = {
    _id: data._id,
    Phone:data.Phone,
    customer_name: data.customer_name,
    Addres: data.Addres,
    createdAt: data.createdAt
  };

  const updatedCustomerList = [...Customers.data, detail];

  getCustomers({
    ...Customers,
    data: updatedCustomerList
  });

    } catch (error) {


      return  <Navigate to={"/auth/login"}/>
    }


  }
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center px-4">

          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">

            {/* Header */}
            <div className="relative  flex items-center gap-3 mb-6">
              <div className="bg-violet-100 p-3 rounded-xl">

              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Add Customer
                </h1>
                <p className="text-sm text-gray-500">
                  Enter customer details below
                </p>
              </div>
              <button onClick={openTogglefun} type='button' className='absolute right-2 cursor-pointer top-[-2px]'>X</button>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={submitform}>

              {/* Customer Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Customer Name
                </label>

                <input
                  value={input.customer_name}
                  onChange={setInputfun}
                  name='customer_name'
                  type="text"
                  placeholder="Enter customer name"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                onChange={setInputfun}
                  value={input.Phone}
                  name='Phone'
                  type="text"
                  placeholder="Enter phone number"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Address
                </label>

                <textarea
                onChange={setInputfun}
                  value={input.Address}
                  name='Address'
                  placeholder="Enter address"
                  rows={5}
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-md"
              >
                Add Customer
              </button>
            </form>
          </div>
        </div>
      )}
    </>

  );

}
