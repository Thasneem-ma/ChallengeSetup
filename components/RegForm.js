'use client'
import axios from 'axios';
import {  useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';


function RegForm() {
  const router = useRouter()
  const [challenger, setChallenger] = useState({
    name: '',
    mobile: '',
    whatsapp: '',
    address: '',
    kg: '',
  })


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(challenger);

    try {

      const res = await axios.post('/api/formsubmition',{
        name: challenger.name,
        mobile: challenger.mobile,
        whatsapp: challenger.whatsapp,
        address: challenger.address,
        kg: challenger.kg,
      })

      if (res.statusText === 'OK') {
        toast.success('Successfully Registered')
      }
      router.push('/success')

    } catch (error) {
      console.log('Failed to register',error)
      toast.error('Failed to Register')


    }finally{
      setChallenger({
        name: '',
        mobile: '',
        whatsapp: '',
        address: '',
        kg: '',
      })
    }
  }
  return (
    <form onSubmit={handleSubmit}
    className='flex flex-col px-8 space-y-4 pb-6'>

      <div className='flex flex-col border p-2 rounded-lg'>
        <label htmlFor="name" className=''>Name *</label>
        <input type="text" id="name" value={challenger.name} onChange={(e)=> setChallenger({...challenger, name: e.target.value})} className='bg-gray-100 outline-none p-1 py-2 font-medium' />
      </div>

      <div className='flex flex-col border p-2 rounded-lg'>
        <label htmlFor="name" className=''>Mobile Number *</label>
        <input type="number" required value={challenger.mobile} onChange={(e)=> setChallenger({...challenger, mobile: e.target.value})} id="name" className='bg-gray-100 outline-none p-1 py-2 font-medium' />
      </div>

      <div className='flex flex-col border p-2 rounded-lg'>
        <label htmlFor="name" className=''>Whatsapp Number</label>
        <input type="number" id="name" value={challenger.whatsapp} onChange={(e)=> setChallenger({...challenger, whatsapp:e.target.value})} className='bg-gray-100 outline-none p-1 py-2 font-medium' />
      </div>

      <div className='flex flex-col border p-2 rounded-lg'>
        <label htmlFor="name" className=''>Address *</label>
        <textarea required value={challenger.address} onChange={(e)=> setChallenger({...challenger, address:e.target.value})} type="" id="name" className='bg-gray-100 outline-none p-1 py-2' />
      </div>

    <div className='grid grid-cols-2 gap-4'>

      <div className='bg-black text-white p-1.5 rounded'>
        <h1>Price For Kg</h1>
        <p className='font-semibold text-lg'>500/-</p>
      </div>
      <div className='bg-black text-white p-1.5 rounded'>
        <h1>Price For 5 Kg</h1>
        <p className='font-semibold text-lg'>1000/-</p>
      </div>

    </div>

      <div className='flex flex-col border p-2 rounded-lg'>
        <label htmlFor="name" className=''>No of KG *</label>
        <input required value={challenger.kg} onChange={(e)=> setChallenger({...challenger, kg: e.target.value})} type="text" id="name" className='bg-gray-100 outline-none p-1 py-2 font-medium' />
      </div>


      <button type="submit" className='bg-black text-white font-semibold p-2 text-xl rounded-lg'>Submit</button>
    </form>
  )
}

export default RegForm
