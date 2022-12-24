import React from 'react'
  
const Tab = ({ title, description, isActive, children }) => (
  <div className={`${isActive ? 'block' : 'hidden'} w-full h-full`}>
    <h1 className='font-semibold text-2xl'>{title}</h1>
    <p className='text-lg font-light mt-4'>{description}</p>
    <h1 className='font-semibold text-2xl my-12'>Test It Yourself!</h1>
    <div className='w-1/2 bg-white m-auto p-10 rounded-2xl drop-shadow-md'>
      {children}
    </div>
  </div>
)

function Tabs({ activeTab, setActiveTab, children }) {
  return (
    <div className='h-screen w-[calc(100%-288px)] px-24 py-28'>
      {children}
    </div>
  )
}

Tabs.Tab = Tab

export default Tabs