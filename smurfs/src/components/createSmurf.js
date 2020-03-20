import React from "react";
import { useForm } from 'react-hook-form';

const CreateSmurf = (props) => {
    const { handleSubmit, register } = useForm();
    const onSubmit = values => {
      console.log("Create Smurf values",values);
      props.handleSubmit(values)
    };
  
    return (
        
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          placeholder='name' 
          ref={register}
        />
        <input
          name="age"
          placeholder='age'
          ref={register}
        />
        <input
            name="height"
            placeholder='height'
            ref={register}
        />
  
        <button type="submit">Submit</button>
      </form>
    );
}

export default CreateSmurf;