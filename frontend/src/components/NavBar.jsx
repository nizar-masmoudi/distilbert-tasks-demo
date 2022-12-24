import React from 'react'
import { 
  ChevronLeftIcon, 
  FaceSmileIcon, 
  HomeIcon, 
  PuzzlePieceIcon, 
  QuestionMarkCircleIcon, 
  RectangleGroupIcon 
} from '@heroicons/react/24/outline'

export default function NavBar({ activeTab, setActiveTab }) {
  return (
    <div className='relative w-72 h-screen bg-white rounded-3xl'>
      <h1 className='text-center text-2xl text-[#8A87DE] font-semibold my-10'>DistilBERT</h1>
      <hr className='border-t-[3px] border-[#A9A7E2]/10' />
      <div className='p-4 text-[#6C6C6C]'>
        <span className={`flex items-center w-full p-3 rounded-md ${activeTab === 0 ? 'bg-[#A9A7E2]/10' : 'bg-transparent'} cursor-pointer`} onClick={() => setActiveTab(0)}>
          <HomeIcon className='w-6 mr-3' />
          <p>Home</p>
        </span>
      </div>
      <hr className='border-t-[3px] border-[#A9A7E2]/10' />
      <div className='p-4 space-y-4 text-[#6C6C6C]'>
        <span className={`flex items-center w-full p-3 rounded-md ${activeTab === 1 ? 'bg-[#A9A7E2]/10' : 'bg-transparent'} cursor-pointer duration-200`} onClick={() => setActiveTab(1)}>
          <FaceSmileIcon className='w-6 mr-3' />
          <p>Sentiment Analysis</p>
        </span>
        <span className={`flex items-center w-full p-3 rounded-md ${activeTab === 2 ? 'bg-[#A9A7E2]/10' : 'bg-transparent'} cursor-pointer duration-200`} onClick={() => setActiveTab(2)}>
          <RectangleGroupIcon className='w-6 mr-3' />
          <p>Token Classification</p>
        </span>
        <span className={`flex items-center w-full p-3 rounded-md ${activeTab === 3 ? 'bg-[#A9A7E2]/10' : 'bg-transparent'} cursor-pointer duration-200`} onClick={() => setActiveTab(3)}>
          <PuzzlePieceIcon className='w-6 mr-3' />
          <p>Fill-Mask</p>
        </span>
        <span className={`flex items-center w-full p-3 rounded-md ${activeTab === 4 ? 'bg-[#A9A7E2]/10' : 'bg-transparent'} cursor-pointer duration-200`} onClick={() => setActiveTab(4)}>
          <QuestionMarkCircleIcon className='w-6 mr-3' />
          <p>Question Answering</p>
        </span>
      </div>
      {/* Might delete later */}
      <div className='flex items-center justify-center w-7 aspect-square rounded-full absolute top-28 -translate-y-1/2 right-0 translate-x-1/2 bg-white border-[#A9A7E2]/10 border-[2px] cursor-pointer'>
        <ChevronLeftIcon className='w-4' />
      </div>
    </div>
  )
}