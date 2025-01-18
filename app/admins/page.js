import React from 'react'
import Link from 'next/link'
import { FaRegEye } from "react-icons/fa";

function page() {
  return (
    <div className='flex flex-col min-h-screen bg-white space-y-8 px-8 py-10'>


        <div className=" ">
        <p>Date Challenge</p>
        <h1 className="font-semibold text-3xl leading-8">Admins <br /> Panel</h1>
        </div>


        <div class="grid grid-cols-2 gap-2">
            <div className='bg-black text-white rounded-lg p-2 pl-3'>
                <p className='text-lg leading-5'>Submition Count</p>
                <p className='font-semibold text-4xl'>15</p>
                <Link href={'/admins/submition'} className='flex gap-1 text-sm items-center mt-2'>
                <FaRegEye/>
                <p>View</p>
                </Link>
            </div>
            <div className='bg-black text-white rounded-lg p-2 pl-3'>
                <p className='text-lg leading-5'>Paid Submitions</p>
                <p className='font-semibold text-4xl'>15</p>
                <Link href={'/admins/paid'} className='flex gap-1 text-sm items-center mt-2'>
                <FaRegEye/>
                <p>View</p>
                </Link>
            </div>

            <div className='bg-black text-white rounded-lg p-2 pl-3'>
                <p className='text-lg leading-5'>Delivered Count</p>
                <p className='font-semibold text-4xl'>15</p>
                <Link href={'/admins/delivered'} className='flex gap-1 text-sm items-center mt-2'>
                <FaRegEye/>
                <p>View</p>
                </Link>
            </div>
            <div className='bg-black text-white rounded-lg p-2 pl-3'>
                <p className='text-lg leading-5'>Delivery Pending</p>
                <p className='font-semibold text-4xl'>15</p>
                <Link href={'/admins/pending'} className='flex gap-1 text-sm items-center mt-2'>
                <FaRegEye/>
                <p>View</p>
                </Link>
            </div>
        </div>


        {/*  */}
        <div class="flex flex-col space-y-4">
            <p className='font-semibold text-3xl'>Analytics</p>

            <div class="flex flex-col gap-2">
                <div class="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                    <p className='text-lg'>Revenue</p>
                    <p className='text-2xl font-semibold'>₹ 500</p>
                </div>
                <div class="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                    <p className='text-lg'>Total Cash Recieved</p>
                    <p className='text-2xl font-semibold'>₹ 500</p>
                </div>
                <div class="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                    <p className='text-lg'>Retail Price Per Kg</p>
                    <p className='text-2xl font-semibold'>₹ 500</p>
                </div>
                <div class="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                    <p className='text-lg'>Wholesale Price Per Kg</p>
                    <p className='text-2xl font-semibold'>₹ 500</p>
                </div>
                <div class="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                    <p className='text-lg'>Challenge Price Per Kg</p>
                    <p className='text-2xl font-semibold'>₹ 500</p>
                </div>
                <div class="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                    <p className='text-lg'>Total Ordered</p>
                    <p className='text-2xl font-semibold'>50 kg</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default page
