// 'use client'
// import React, { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { FaRegEye } from "react-icons/fa";
// import { prices } from '../../constants/dates'
// import axios from 'axios'


// function Page() {
//     const dates = {
//         price: prices.challenge,
//         retail: prices.retail,
//         wholesale: prices.wholesale,
//     };
//     const [challengers, setChallengers] = useState([]);
//     const [paid, setPaid] = useState();
//     const [delivered, setDelivered] = useState();
//     const [notDelivered, setNotDelivered] = useState();
//     const [total, setTotal] = useState({
//         revenue: 0,
//         cash: 0,
//         ordered: 0
//     });

//     const getChallengersData = async() => {
//         try {

//             const res = await axios.get('/api/formsubmission')
//             const data = res.data;
//             setChallengers(data);

//             const countOfPaid =  data.filter((item)=> item.paid === true).length;
//             setPaid(countOfPaid);


//             const countOfDelivered = data.filter((item)=> item.Delivered === true).length;
//             setDelivered(countOfDelivered);

//             const countOfDeliveryPending =  data.filter((item) => item.Delivered === false).length;
//             setNotDelivered(countOfDeliveryPending);


//             const totalKg = data.reduce((acc, item) => acc + parseInt(item.kg), 0);

//             setTotal((prev)=> ({...prev, ordered: totalKg}));

//             const income = totalKg * dates.price;
//             setTotal((prev)=> ({...prev, cash: income}));

//             const revenue = income - (totalKg * dates.wholesale);
//             setTotal((prev)=> ({...prev, revenue: revenue}));






//         } catch (error) {
//             console.log('Failed to get Challengers Data',error)
//         }
//     }

//     useEffect(()=>{
//         getChallengersData();

//     },[])



//   return (
//     <div className='flex flex-col min-h-screen bg-white space-y-8 px-8 py-10'>


//         <div className=" ">
//         <p>Date Challenge</p>
//         <h1 className="font-semibold text-3xl leading-8">Admins <br /> Panel</h1>
//         </div>


//         <div className="grid grid-cols-2 gap-2">
//             <div className='bg-black text-white rounded-lg p-2 pl-3'>
//                 <p className='text-lg leading-5'>Submission Count</p>
//                 <p className='font-semibold text-4xl'>{challengers.length}</p>
//                 <Link href={'/admins/submission'} className='flex gap-1 text-sm items-center mt-2'>
//                 <FaRegEye/>
//                 <p>View</p>
//                 </Link>
//             </div>
//             <div className='bg-black text-white rounded-lg p-2 pl-3'>
//                 <p className='text-lg leading-5'>Paid Submissions</p>
//                 <p className='font-semibold text-4xl'>{paid}</p>
//                 <Link href={'/admins/paid'} className='flex gap-1 text-sm items-center mt-2'>
//                 <FaRegEye/>
//                 <p>View</p>
//                 </Link>
//             </div>

//             <div className='bg-black text-white rounded-lg p-2 pl-3'>
//                 <p className='text-lg leading-5'>Delivered Count</p>
//                 <p className='font-semibold text-4xl'>{delivered}</p>
//                 <Link href={'/admins/delivered'} className='flex gap-1 text-sm items-center mt-2'>
//                 <FaRegEye/>
//                 <p>View</p>
//                 </Link>
//             </div>
//             <div className='bg-black text-white rounded-lg p-2 pl-3'>
//                 <p className='text-lg leading-5'>Delivery Pending</p>
//                 <p className='font-semibold text-4xl'>{notDelivered}</p>
//                 <Link href={'/admins/pending'} className='flex gap-1 text-sm items-center mt-2'>
//                 <FaRegEye/>
//                 <p>View</p>
//                 </Link>
//             </div>
//         </div>


//         {/*  */}
//         <div className="flex flex-col space-y-4">
//             <p className='font-semibold text-3xl'>Analytics</p>

//             <div className="flex flex-col gap-2">
//                 <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
//                     <p className='text-lg'>Total Ordered</p>
//                     <p className='text-2xl font-semibold'>{total.ordered} kg</p>
//                 </div>
//                 <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
//                     <p className='text-lg'>Revenue</p>
//                     <p className='text-2xl font-semibold'>₹ {total.revenue}</p>
//                 </div>
//                 <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
//                     <p className='text-lg'>Total Cash Recieved</p>
//                     <p className='text-2xl font-semibold'>₹ {total.cash}</p>
//                 </div>
//                 <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
//                     <p className='text-lg'>Retail Price Per Kg</p>
//                     <p className='text-2xl font-semibold'>₹ {dates.retail}</p>
//                 </div>
//                 <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
//                     <p className='text-lg'>Wholesale Price Per Kg</p>
//                     <p className='text-2xl font-semibold'>₹ {dates.wholesale}</p>
//                 </div>
//                 <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
//                     <p className='text-lg'>Challenge Price Per Kg</p>
//                     <p className='text-2xl font-semibold'>₹ {dates.price}</p>
//                 </div>
//             </div>
//         </div>


//     </div>
//   )
// }

// export default Page


'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaRegEye } from "react-icons/fa";
import { prices } from '../../constants/dates'
import axios from 'axios'

function Page() {
    const dates = {
        price: prices.challenge,  // ₹400 for 1 kg
        retail: prices.retail,
        wholesale: prices.wholesale,
    };

    const [challengers, setChallengers] = useState([]);
    const [paid, setPaid] = useState();
    const [delivered, setDelivered] = useState();
    const [notDelivered, setNotDelivered] = useState();
    const [total, setTotal] = useState({
        revenue: 0,
        cash: 0,
        ordered: 0
    });

    const getChallengersData = async () => {
        try {
            const res = await axios.get('/api/formsubmission');
            const data = res.data;
            setChallengers(data);

            const countOfPaid = data.filter((item) => item.paid === true).length;
            setPaid(countOfPaid);

            const countOfDelivered = data.filter((item) => item.Delivered === true).length;
            setDelivered(countOfDelivered);

            const countOfDeliveryPending = data.filter((item) => item.Delivered === false).length;
            setNotDelivered(countOfDeliveryPending);

            // Calculate total ordered kg
            const totalKg = data.reduce((acc, item) => acc + parseInt(item.kg), 0);
            setTotal((prev) => ({ ...prev, ordered: totalKg }));

            // Calculate the income (total cash received)
            let income = 0;
            let revenue = 0;

            // Go through each order and apply the correct pricing
            data.forEach((order) => {
                const orderKg = parseInt(order.kg);

                let orderIncome = 0;
                let orderCost = 0;

                // Apply correct pricing
                if (orderKg === 3) {
                    orderIncome = 1100; // Fixed price for 3kg orders
                } else {
                    orderIncome = orderKg * dates.price; // Default ₹400 per kg
                }

                // Calculate the wholesale cost based on kg
                orderCost = orderKg * dates.wholesale;

                // Accumulate total income
                income += orderIncome;

                // Correct revenue calculation
                revenue += orderIncome - orderCost;
            });

            // Set the total cash received and revenue
            setTotal((prev) => ({ ...prev, cash: income, revenue: revenue }));

        } catch (error) {
            console.log('Failed to get Challengers Data', error);
        }
    };

    useEffect(() => {
        getChallengersData();
    }, []);

    return (
        <div className='flex flex-col min-h-screen bg-white space-y-8 px-8 py-10'>
            <div className=" ">
                <p>Date Challenge</p>
                <h1 className="font-semibold text-3xl leading-8">Admins <br /> Panel</h1>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className='bg-black text-white rounded-lg p-2 pl-3'>
                    <p className='text-lg leading-5'>Submission Count</p>
                    <p className='font-semibold text-4xl'>{challengers.length}</p>
                    <Link href={'/admins/submission'} className='flex gap-1 text-sm items-center mt-2'>
                        <FaRegEye />
                        <p>View</p>
                    </Link>
                </div>
                <div className='bg-black text-white rounded-lg p-2 pl-3'>
                    <p className='text-lg leading-5'>Paid Submissions</p>
                    <p className='font-semibold text-4xl'>{paid}</p>
                    <Link href={'/admins/paid'} className='flex gap-1 text-sm items-center mt-2'>
                        <FaRegEye />
                        <p>View</p>
                    </Link>
                </div>

                <div className='bg-black text-white rounded-lg p-2 pl-3'>
                    <p className='text-lg leading-5'>Delivered Count</p>
                    <p className='font-semibold text-4xl'>{delivered}</p>
                    <Link href={'/admins/delivered'} className='flex gap-1 text-sm items-center mt-2'>
                        <FaRegEye />
                        <p>View</p>
                    </Link>
                </div>
                <div className='bg-black text-white rounded-lg p-2 pl-3'>
                    <p className='text-lg leading-5'>Delivery Pending</p>
                    <p className='font-semibold text-4xl'>{notDelivered}</p>
                    <Link href={'/admins/pending'} className='flex gap-1 text-sm items-center mt-2'>
                        <FaRegEye />
                        <p>View</p>
                    </Link>
                </div>
            </div>

            {/*  */}
            <div className="flex flex-col space-y-4">
                <p className='font-semibold text-3xl'>Analytics</p>

                <div className="flex flex-col gap-2">
                    <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                        <p className='text-lg'>Total Ordered</p>
                        <p className='text-2xl font-semibold'>{total.ordered} kg</p>
                    </div>
                    <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                        <p className='text-lg'>Revenue</p>
                        <p className='text-2xl font-semibold'>₹ {total.revenue}</p>
                    </div>
                    <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                        <p className='text-lg'>Total Cash Recieved</p>
                        <p className='text-2xl font-semibold'>₹ {total.cash}</p>
                    </div>
                    <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                        <p className='text-lg'>Retail Price Per Kg</p>
                        <p className='text-2xl font-semibold'>₹ {dates.retail}</p>
                    </div>
                    <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                        <p className='text-lg'>Wholesale Price Per Kg</p>
                        <p className='text-2xl font-semibold'>₹ {dates.wholesale}</p>
                    </div>
                    <div className="bg-green-800 text-white rounded-lg p-2 -space-y-1">
                        <p className='text-lg'>Challenge Price Per Kg</p>
                        <p className='text-2xl font-semibold'>₹ {dates.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
