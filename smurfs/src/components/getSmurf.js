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
              {smurf.map((smurf) => {
                <div className='getsmurf'>{smurf}</div>
             })}
          </div>
      )
      
     
    }
      export default GetSmurf;