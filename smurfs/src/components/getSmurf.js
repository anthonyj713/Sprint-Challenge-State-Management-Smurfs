import React, { useContext } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';

const GetSmurf = () => {
    const smurf = useContext(SmurfsContext);
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
             
    );
};
       export default GetSmurf;