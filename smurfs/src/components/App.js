import React, { useState, useEffect } from "react";
import "./App.css";
import GetSmurf from './getSmurf';
import CreateSmurf from './createSmurf';
import axios from 'axios';
import { SmurfsContext } from '../contexts/SmurfsContext';


export default function App() {
  const [smurf, setSmurf] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:3333/smurfs")
      .then(res => {
      console.log('res',res);
      setSmurf(res.data);
      })
      .catch(error => {
      console.log("the data was not returned", error)
  })
  },[])
  
  const handleSubmit = (values) => {
    console.log('values object:', values);
  
    axios
        .post('http://localhost:3333/smurfs', values)
        .then(res => {
            console.log('values object:', values);
            console.log('info from api', res.data );
            setSmurf(res.data);
        })
        .catch(err => {
            console.log('values object from err:', values)
            console.log(err)
        }
    )
  
  }
    return (
      <div className='background'>
      <div className="App">
        <SmurfsContext.Provider value={smurf}>
        <h1>SMURFS!</h1>
        <CreateSmurf  handleSubmit={handleSubmit}/>
        <GetSmurf/>
        </SmurfsContext.Provider>
      </div>
      </div>
    );
 
}


