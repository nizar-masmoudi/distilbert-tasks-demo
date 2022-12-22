// import { useState } from 'react';

import NavBar from './components/NavBar';

function App() {
  // const [flask, setFlask] = useState(false)
  // fetch(process.env.REACT_APP_API_URL)
  //   .then((response) => response.json())
  //   .then((data) => setFlask(data['flask-running']));
  return <div className='flex w-screen h-screen bg-[#A9A7E2]/10 font-poppins'>
    <NavBar />
  </div>
}

export default App;