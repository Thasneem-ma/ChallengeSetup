'use client'

import React, { useEffect, useState } from 'react'
import success from '../../components/finished.json'

function Page() {

    const [Lottie, setLottie] = useState(null);

  useEffect(() => {

    import("lottie-react").then((LottieModule) => {
      setLottie(() => LottieModule.default);
    });
  }, []);


  return (
    <div className='bg-white min-h-screen px-8 flex flex-col justify-center items-center'>
        <div>
        {Lottie && <Lottie animationData={success} loop={true} />}
        </div>
        <h1 className='text-3xl font-bold text-center'>Successfully Registered</h1>
    </div>
  )
}

export default Page
