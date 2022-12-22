import { useState } from 'react';

function App() {
  const [flask, setFlask] = useState(false)
  fetch(process.env.REACT_APP_API_URL)
    .then((response) => response.json())
    .then((data) => setFlask(data['flask-running']));
  return <h1 className='text-3xl text-center mt-24'>{flask ? 'Listening to API server...' : 'API server not responding'}</h1>;
}

export default App;
