import React from 'react';
import { SmurfsContext } from './App';

const GetSmurf = () => {
   return (
       <SmurfsContext.Consumer>
           {smurf => (
            <div>
              {smurf.map((smurf) => (
                <div className='getSmurf' key={smurf.id}>
                <div className='getName'>Name: {smurf.name}</div>
                <div className='getAge'>Age: {smurf.age}</div>
                <div className='getHeight'>Height: {smurf.height}</div>
                </div>
              ))}
            </div>
            )}
        </SmurfsContext.Consumer>
            
      )
      }
      export default GetSmurf;