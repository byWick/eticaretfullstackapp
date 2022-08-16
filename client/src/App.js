import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {
    const [veriler,verileriGetir] = useState(false)
    axios.post('/get-products/', {
      name: 'hakan',
    })
        .then(function (response) {
          verileriGetir(response.data)
        })
        .catch(function (error) {
          return error;
        });
  return (
    <div className="App" style={{ padding:"100px",textAlign:'center' }}>
      
    </div>
  );
}

export default App;
