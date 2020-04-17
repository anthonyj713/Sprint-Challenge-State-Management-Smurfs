import React from "react";
import { useForm } from 'react-hook-form';

const CreateSmurf = (props) => {
    console.log('props', props);
    const { handleSubmit, register } = useForm();
    const onSubmit = values => {
      console.log('Create Smurf values',values);
      props.handleSubmit(values)
    };
  
    return (
        
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className='input'
          name="name"
          placeholder='Name' 
          ref={register}
        />
        <input className='input'
          name="age"
          placeholder='Age'
          ref={register}
        />
        <input className='input'
            name="height"
            placeholder='Height'
            ref={register}
        />
  
        <button className='button' type="submit">Submit</button>
      </form>
    );
}

export default CreateSmurf;