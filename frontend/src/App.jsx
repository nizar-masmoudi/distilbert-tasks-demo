import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';

function App() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab])
  
  // const [flask, setFlask] = useState(false)
  // fetch(process.env.REACT_APP_API_URL)
  //   .then((response) => response.json())
  //   .then((data) => setFlask(data['flask-running']));
  return <div className='flex w-screen h-screen bg-[#A9A7E2]/10 font-poppins'>
    <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
  </div>
}

export default App;