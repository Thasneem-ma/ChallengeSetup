
'use client'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

function page() {

    const userData =[
        {
            name: 'Musthafa',
            number: '6465165465',
            kg: '3',
            payment: true,
        },
        {
            name: 'Musthafa',
            number: '6465165465',
            kg: '3',
            payment: true,
        },
        {
            name: 'Musthafa',
            number: '6465165465',
            kg: '3',
            payment: true,
        },
        {
            name: 'Musthafa',
            number: '6465165465',
            kg: '3',
            payment: false,
        },
    ]

  return (
    <div className='flex flex-col min-h-screen bg-white space-y-8 px-8 py-10'>


    <div className=" ">
    <p>Date Challenge</p>
    <h1 className="font-semibold text-3xl leading-8">Submition <br /> Summary</h1>
    </div>

    <div className='bg-gray-100 flex gap-2 w-full rounded-lg p-1.5 shadow-sm border items-center text-gray-600'>
            <FaSearch/>
            <input className='bg-transparent w-full outline-none border-none' placeholder='Search' type="text"/>
        </div>

    <table className=' space-y-2 table-auto w-full'>
        <thead class="text-[10pt] pb-2">
            <tr>
            <td className=''>No</td>
            <td >Name</td>
            <td className=''>Mobile</td>
            <td className=''>Kg</td>
            </tr>
        </thead>
            <tbody>

        {userData.map((data,i) => (

            <tr class=" text-[10pt] font-medium pb-1" key={i}>
            <td className=''>{i+1}</td>
            <td >{data.name}</td>
            <td className=''>{data.number}</td>
            <td className=''>{data.kg}</td>

        </tr>

        ))}
            </tbody>

    </table>

    </div>
  )
}

export default page
