import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import Tabs from './components/Tabs';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

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
          <p>form here...</p>
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
