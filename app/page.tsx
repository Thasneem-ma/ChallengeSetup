import RegForm from '@/components/RegForm'
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white space-y-8">
      <div className="w-full">
        <Image
        src={'https://images.pexels.com/photos/2291592/pexels-photo-2291592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        width={0}
        height={0}
        alt="dates"
        sizes="100kv"
        className="w-full rounded-b-[25pt] " />
        <div className="ml-8 mt-8 ">
        <p>Date Challenge</p>

        <h1 className="font-semibold text-3xl leading-8">Registration <br /> Form</h1>
        </div>
      </div>

      <div>
        <RegForm/>
      </div>

    </div>
  );
}
