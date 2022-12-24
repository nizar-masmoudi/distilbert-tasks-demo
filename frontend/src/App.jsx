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

  // const [flask, setFlask] = useState(false)
  // fetch(process.env.REACT_APP_API_URL)
  //   .then((response) => response.json())
  //   .then((data) => setFlask(data['flask-running']));

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
          {data && 
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
          <p>form here...</p>
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
