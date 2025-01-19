'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaEdit , FaHome } from 'react-icons/fa';

function Page() {
  const [challengers, setChallengers] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedChallenger, setSelectedChallenger] = useState(null);

  // Fetch data from the server
  const getChallengersData = async () => {
    try {
      const res = await axios.get('/api/formsubmition');
      const data = res.data;
      console.log(data);
      setChallengers(data);
    } catch (error) {
      console.log('Failed to get Challengers Data', error);
    }
  };

  useEffect(() => {
    getChallengersData();
  }, []);

  // Open popup and set selected challenger
  const handleEdit = (challenger) => {
    setSelectedChallenger(challenger);
    setIsPopupOpen(true);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put('/api/formsubmition', {
        _id: selectedChallenger._id,
        paid: selectedChallenger.paid,
        Delivered: selectedChallenger.Delivered,
        kg: selectedChallenger.kg,
      });

      if (res.status === 200) {
        alert('Successfully updated');
        // Refresh the list or update state
        setIsPopupOpen(false); // Close the popup
        getChallengersData(); // Re-fetch the data
      }
    } catch (error) {
      console.error('Failed to update challenger', error);
    }
  };


  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setSelectedChallenger({ ...selectedChallenger, [name]: newValue });
  };

  return (
    <div className='flex flex-col min-h-screen bg-white space-y-8 px-8 py-10'>
        <Link href={'/admins'} className='flex gap-1 items-baseline'>
            <FaHome/>
            <p className='text-sm'>Go Back</p>
        </Link>
      <div className=''>
        <p>Date Challenge</p>
        <h1 className='font-semibold text-3xl leading-8'>
          Submition <br /> Summary
        </h1>
      </div>

      <div className='bg-gray-100 flex gap-2 w-full rounded-lg p-1.5 shadow-sm border items-center text-gray-600'>
        <FaSearch />
        <input className='bg-transparent w-full outline-none border-none' placeholder='Search' type='text' />
      </div>

      <table className='space-y-2 table-auto w-full'>
        <thead className='text-[10pt] pb-2'>
          <tr>
            <td>No</td>
            <td>Name</td>
            <td>Mobile</td>
            <td>Kg</td>
            <td>Paid</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {challengers &&
            challengers.map((data, i) => (
              <tr className='h-8 align text-[10pt] font-medium pb-1' key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.mobile}</td>
                <td>{data.kg}</td>
                <td>{data.paid ? 'yes' : 'no'}</td>
                <td>
                  <button
                    className='flex gap-0.5 items-center bg-black text-white p-0.5 px-1.5 rounded'
                    onClick={() => handleEdit(data)}
                  >
                    <FaEdit />
                    <p>Edit</p>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Popup Form */}
      {isPopupOpen && selectedChallenger && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded shadow-lg w-[300px]'>
            <h2 className='text-lg font-semibold mb-4'>Edit Challenger</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-sm'>Kg:</label>
                <input
                  type='number'
                  name='kg'
                  value={selectedChallenger.kg}
                  onChange={handleInputChange}
                  className='w-full border rounded p-1'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm'>Paid:</label>
                <input
                  type='checkbox'
                  name='paid'
                  checked={selectedChallenger.paid}
                  onChange={handleInputChange}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm'>Delivered:</label>
                <input
                  type='checkbox'
                  name='Delivered'
                  checked={selectedChallenger.Delivered}
                  onChange={handleInputChange}
                />
              </div>
              <button type='submit' className='bg-blue-500 text-white px-4 py-1 rounded'>
                Save
              </button>
              <button
                type='button'
                onClick={() => setIsPopupOpen(false)}
                className='bg-red-500 text-white px-4 py-1 rounded ml-2'
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
