
'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHome, FaSearch } from 'react-icons/fa'
import { prices } from '../../../constants/dates'
import Link from 'next/link'


function Page () {

    const price = prices.challenge

    const [unPaidChallengers, setUnPaidChallengers] = useState([])
    const [originalPaidChallengers, setOriginalPaidChallengers] = useState([])
    const [search, setSearch] = useState('');

    const getPaidChallenger = async ()=>{
        try {
            const res = await axios.get('/api/UnpaidChallenger')
            const data = res.data
            setOriginalPaidChallengers(data)
            setUnPaidChallengers(data)

        } catch (error) {
            console.log('failed to fetch paid challengers data',error);

        }
    }

    useEffect(()=>{
        getPaidChallenger();
    },[]);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearch(term);

        if (term === '') {
          // Reset to the original data when the search term is empty
          setUnPaidChallengers(originalPaidChallengers);
        } else {
          const filtered = originalPaidChallengers.filter(
            (challenger) =>
              challenger.name.toLowerCase().includes(term) ||
              challenger.mobile.toString().includes(term) // Convert mobile to a string
          );
          setUnPaidChallengers(filtered);
        }
      };



  return (
    <div className='flex flex-col min-h-screen bg-white space-y-8 px-8 py-10'>
        <Link href={'/admins'} className='flex gap-1 items-baseline'>
            <FaHome/>
            <p className='text-sm'>Go Back</p>
        </Link>

    <div className=" ">
    <p>Date Challenge</p>
    <h1 className="font-semibold text-3xl leading-8">Payment <br /> Pending</h1>
    </div>

    <div className='bg-gray-100 flex gap-2 w-full rounded-lg p-1.5 shadow-sm border items-center text-gray-600'>
            <FaSearch/>
            <input
            value={search}
            onChange={handleSearch}
            className='bg-transparent w-full outline-none border-none' placeholder='Search' type="text"/>
        </div>

    <table className=' space-y-2 table-auto w-full'>
        <thead className="text-[10pt] pb-2">
            <tr>
            <td className=''>No</td>
            <td >Name</td>
            <td className=''>Mobile</td>
            <td className=''>Kg</td>
            <td className=''>Price</td>
            </tr>
        </thead>
            <tbody>

        {unPaidChallengers.length > 0 && unPaidChallengers.map((data,i) => (

            <tr className=" text-[10pt] font-medium pb-1" key={i}>
            <td className=''>{i+1}</td>
            <td >{data.name}</td>
            <td className=''>{data.mobile}</td>
            <td className=''>{data.kg}</td>
            <td className=''>₹  {data.kg * price}</td>

        </tr>

        ))}
            </tbody>

    </table>

    </div>
  )
}

export default Page
