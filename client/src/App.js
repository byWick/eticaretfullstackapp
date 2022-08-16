import React,{useState,Component} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Home/Home';
import axios from 'axios';

function App() {
  const [menuler,setMenuler] = useState(false)
  axios.post('/getmenu')
  .then((response) => {
      setMenuler(response.data)
  })
  .catch(error => {
      console.error(error)
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/siparisim-nerede' element={<Home/>} />
          <Route path='/yardim' element={<Home/>} />
          <Route path='/iletisim' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
