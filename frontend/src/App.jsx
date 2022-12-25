import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import Tabs from './components/Tabs';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(loading);
  }, [loading])
  
  const entityToHTML = (word, entity) => {
    switch (entity) {
      case 'B-PER':
        return <span className='flex items-center bg-red-300 px-2 py-1 rounded-lg space-x-2.5'>
          <p>{word}</p>
          <p className='text-sm font-semibold'>{entity}</p>
        </span>
      case 'I-PER':
        return <span className='flex items-center bg-blue-300 px-2 py-1 rounded-lg space-x-2.5'>
          <p>{word}</p>
          <p className='text-sm font-semibold'>{entity}</p>
        </span>
      case 'B-ORG':
        return <span className='flex items-center bg-green-300 px-2 py-1 rounded-lg space-x-2.5'>
          <p>{word}</p>
          <p className='text-sm font-semibold'>{entity}</p>
        </span>
      case 'I-ORG':
        return <span className='flex items-center bg-yellow-300 px-2 py-1 rounded-lg space-x-2.5'>
          <p>{word}</p>
          <p className='text-sm font-semibold'>{entity}</p>
        </span>
      case 'B-LOC':
        return <span className='flex items-center bg-orange-300 px-2 py-1 rounded-lg space-x-2.5'>
          <p>{word}</p>
          <p className='text-sm font-semibold'>{entity}</p>
        </span>
      case 'I-LOC':
        return <span className='flex items-center bg-violet-300 px-2 py-1 rounded-lg space-x-2.5'>
          <p>{word}</p>
          <p className='text-sm font-semibold'>{entity}</p>
        </span>
      case 'B-MISC':
        return <span className='flex items-center bg-cyan-300 px-2 py-1 rounded-lg space-x-2.5'>
          <p>{word}</p>
          <p className='text-sm font-semibold'>{entity}</p>
        </span>
      case 'I-MISC':
        return <span className='bg-gray-300 px-2 py-1 rounded-lg space-x-2.5'>
          <p>{word}</p>
          <p>{entity}</p>
        </span>
      default:
        return <span className='py-1'>{word}</span>
    }
  }

  const analyseSent = (e) => {
    e.preventDefault()
    const url = new URL('sent-anal', process.env.REACT_APP_API_URL).toString()
    setLoading(true)
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: document.getElementById('sent-text').value })
    })
      .then((response) => response.json())
      .then((results) => setData(results))
      .then(() => setLoading(false))
  }

  const classToken = (e) => {
    e.preventDefault()
    const url = new URL('token-class', process.env.REACT_APP_API_URL).toString()
    setLoading(true)
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: document.getElementById('token-class').value })
    })
      .then((response) => response.json())
      .then((results) => setData(results))
      .then(() => setLoading(false))
  }

  return (
    <div className='flex w-screen h-screen bg-[#A9A7E2]/10 font-poppins'>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tabs>
        <Tabs.Tab
          isActive={activeTab === 1}
          title='Sentiment Analysis Task'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mollis dolor, vitae hendrerit libero. Morbi leo metus, finibus vel convallis eu, faucibus ut ante. Aenean eu posuere orci. Phasellus viverra auctor enim, laoreet consequat ex ullamcorper non. Pellentesque pellentesque mi a enim euismod vulputate.'
        >
          <form className='flex flex-col space-y-3' onSubmit={(e) => analyseSent(e)}>
            <label htmlFor='sent-text' className='ml-6'>Text</label>
            <input id='sent-text' type='text' placeholder='I feel happy today!' required className='font-light border-[1px] rounded-full border-[#7370DA]/10 px-6 py-4 focus:outline-none focus-within:outline-none' />
            <button type='submit' className='block w-28 h-10 bg-[#A9A7E2] text-white rounded-lg ml-auto mr-0'>
              {loading ? 
                <ArrowPathIcon className='m-auto w-5 stroke-white animate-spin' /> 
              : 
                'Compute'
              }
            </button>
          </form>
          {(data && activeTab === 1) && 
            <span className='mt-6'>
              <p className='ml-6'>Results</p>
              <hr className='border-t-2 border-[#7370DA]/10 my-3' />
              <span className='flex items-center justify-between w-full font-light mb-4 pl-6'>
                <p>Positive</p>
                <p>{data.predictions[0][1].toFixed(4)}</p>
              </span>
              <span className='flex items-center justify-between w-full font-light pl-6'>
                <p>Negative</p>
                <p>{data.predictions[0][0].toFixed(4)}</p>
              </span>
            </span>
          }
        </Tabs.Tab>
        <Tabs.Tab
          isActive={activeTab === 2}
          title='Token Classification'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mollis dolor, vitae hendrerit libero. Morbi leo metus, finibus vel convallis eu, faucibus ut ante. Aenean eu posuere orci. Phasellus viverra auctor enim, laoreet consequat ex ullamcorper non. Pellentesque pellentesque mi a enim euismod vulputate.'
        >
          <form className='flex flex-col space-y-3' onSubmit={(e) => classToken(e)}>
            <label htmlFor='token-class' className='ml-6'>Text</label>
            <input id='token-class' type='text' placeholder='I feel happy today!' required className='font-light border-[1px] rounded-full border-[#7370DA]/10 px-6 py-4 focus:outline-none focus-within:outline-none' />
            <button type='submit' className='block w-28 h-10 bg-[#A9A7E2] text-white rounded-lg ml-auto mr-0'>
              {loading ? 
                <ArrowPathIcon className='m-auto w-5 stroke-white animate-spin' /> 
              : 
                'Compute'
              }
            </button>
          </form>
          {(data && activeTab === 2) &&
            <span className='mt-6'>
              <p className='ml-6'>Results</p>
              <hr className='border-t-2 border-[#7370DA]/10 my-3' />
              <span className='flex flex-wrap w-full space-x-1.5 ml-6 font-light'>
                {document.getElementById('token-class').value.split(' ').map((word, idx) => (
                  entityToHTML(word, data.predictions[idx].entity)
                ))}
              </span>
            </span>
          }
        </Tabs.Tab>
        <Tabs.Tab
          isActive={activeTab === 3}
          title='Fill-Mask'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mollis dolor, vitae hendrerit libero. Morbi leo metus, finibus vel convallis eu, faucibus ut ante. Aenean eu posuere orci. Phasellus viverra auctor enim, laoreet consequat ex ullamcorper non. Pellentesque pellentesque mi a enim euismod vulputate.'
        >
          <p>form here...</p>
        </Tabs.Tab>
        <Tabs.Tab
          isActive={activeTab === 4}
          title='Question Answering'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mollis dolor, vitae hendrerit libero. Morbi leo metus, finibus vel convallis eu, faucibus ut ante. Aenean eu posuere orci. Phasellus viverra auctor enim, laoreet consequat ex ullamcorper non. Pellentesque pellentesque mi a enim euismod vulputate.'
        >
          <p>form here...</p>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default App;
