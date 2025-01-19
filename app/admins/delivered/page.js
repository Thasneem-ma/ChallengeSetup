
'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {FaHome, FaSearch} from "react-icons/fa";

function Page() {

    const [deliveredChallengers, setDeliveredChallengers] = useState([])

    const getPaidChallenger = async ()=>{
        try {
            const res = await axios.get('/api/delivered')
            const data = res.data
            setDeliveredChallengers(data)

        } catch (error) {
            console.log('failed to fetch pending challengers data',error);

        }
    }

    useEffect(()=>{
        getPaidChallenger();
    },[])


  return (
    <div className='flex flex-col min-h-screen bg-white space-y-8 px-8 py-10'>
        <Link href={'/admins'} className='flex gap-1 items-baseline'>
            <FaHome/>
            <p className='text-sm'>Go Back</p>
        </Link>

    <div className=" ">
    <p>Date Challenge</p>
    <h1 className="font-semibold text-3xl leading-8">Delivery <br /> Pending</h1>
    </div>

    <div className='bg-gray-100 flex gap-2 w-full rounded-lg p-1.5 shadow-sm border items-center text-gray-600'>
        <FaSearch/>
        <input className='bg-transparent w-full outline-none border-none' placeholder='Search' type="text"/>
    </div>

    <table className=' space-y-2 table-auto w-full'>
        <thead className="text-[10pt] pb-2">
            <tr>
            <td className=''>No</td>
            <td >Name</td>
            <td className=''>Mobile</td>
            <td className=''>Kg</td>
            <td className=''>Address</td>
            </tr>
        </thead>
            <tbody className=''>

        {deliveredChallengers.length > 0 && deliveredChallengers.map((data,i) => (

            <tr className="h-12 text-[10pt] font-medium pb-1" key={i}>
            <td className='align-baseline'>{i+1}</td>
            <td className='align-baseline'>{data.name}</td>
            <td className='align-baseline'>{data.mobile}</td>
            <td className='align-baseline'>{data.kg}</td>
            <td className=' max-w-[89px] font-normal text-[10pt] align-baseline'>{data.address}</td>
        </tr>

        ))}
            </tbody>

    </table>

    </div>
  )
}

export default Page
