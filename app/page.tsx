'use client'
import CreateCard from '../components/CreateCard.js'
import CreateStack from '@/components/CreateStack.js';
import Link from 'next/link.js';
import Image from 'next/image'
import play from '../public/play.png'


export default function Home() {

  return (
    <main className=" flex flex-col min-h-screen items-center justify-start p-10">
      <div className='flex w-full items-center justify-center'>
        <span className='text-center self-center sm:text-[96px] text-[47px] font-bold bg-clip-text px-8 border-[2px] border-dashed border-gray-400 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent'>Memorize</span>
      </div>
      <div className="flex md:flex-row flex-col-reverse max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className='flex flex-col my-8'>
          <Link href="/country" className="flex w-full justify-center standart_style hover:scale-105">
            Have some fun
          </Link>
          <div className="flex w-full my-4 standart_style justify-center hover:scale-105">
            <div className='flex flex-row items-center'>
              <Image src={play} alt="play" className='w-[13px] h-[13px] self-center mr-2' />
              <Link href="/quiz" className=''>
                Play
              </Link>
            </div>
          </div>
        </div>
        <CreateCard />
        <CreateStack />
      </div>
    </main>
  )
}
