import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

function GetSmurf() {
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
        console.log('smurf', smurf)
        return (
            <div>
              {smurf.map((smurf) => (
                <div className='getSmurf' key={smurf.id}>
                <div className='getName'>Name: {smurf.name}</div>
                <div className='getAge'>Age: {smurf.age}</div>
                <div className='getHeight'>Height: {smurf.height}</div>
                </div>
              ))}
            </div>
            
      )
      
     
    }
      export default GetSmurf;