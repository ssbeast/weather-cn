import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import axios from 'axios';
import ApiData from './ApiData';
import Form from './form';

function App() {

  const[state, setState] = useState({})
  const[flag, setFlag] = useState(false)

  const getDataFromServer = (city) => {

     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4efae3e2f40e35f2ce5ae7912a7e8051`).then((res) => {
  
     setState({
            temp: Math.round(res.data.main.temp - 273.15),
            weather: res.data.weather[0].main,
            name: res.data.name
          })    
     })
     .catch((err) => {
         setFlag(true)
         setState({})
     })
  }

  return (
    <div className="App">
        <h2 className="heading">Coding Ninja Weather</h2>
        <h3>By Saurabh (1910990083)</h3>
        <Form getDataFromServer={getDataFromServer}/>
       {!(Object.keys(state).length === 0)?<ApiData info = {state}/>: (flag) ? <h2 className="mt-5 text-black">City Not Found!</h2> : <h1></h1> } 

    </div>
  );
}

export default App;
