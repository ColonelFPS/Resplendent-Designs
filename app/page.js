'use client';
import Image from "next/image";
import Logo from '../public/Logo.png'
import MeetHer from '../public/meether.png'
import { Button } from '@material-tailwind/react'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  return (
    <main className="custom-img flex min-h-screen flex-col items-center">

      <div className="w-auto mx-4 mt-4 sm:mx-0">
        <Image
          src={Logo}
          priority
          height={400}
          quality={100}
          alt="carolyns logo"
        />
      </div>
      <div className="font-primary items-center text-center text-xl font-semibold text-purple-600">
        <Image
          src={MeetHer}
          alt="meet carolyn"
          width={220}
        />

       <Button
        onClick={() => router.push('/about')} className="hover-effect w-auto h-auto p-2 mt-4 bg-[#68538f] border text-white rounded-md hover:font-bold duration-200">About</Button>
      </div>
    </main>
  )
}
