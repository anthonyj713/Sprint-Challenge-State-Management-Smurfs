import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function CreateSmurf({ status, values, errors, touched }) {
    console.log('Values:', values)
    return (
         <Form>
                  
            <Field type='name' name='name' placeholder='Name'/>
            {touched.name && errors.name && <p>{errors.name}</p>}
        
    
            <Field type='age' name='age' placeholder='age' />
            {touched.age && errors.age && <p>{errors.age}</p>}
        
    
            <Field type='height' name='height' placeholder='height' />
            {touched.height && errors.height && <p>{errors.height}</p>}
        
            <button type='submit'>Create Smurf!</button>
    </Form>
              
    );
}

const FormikCreateSmurf = withFormik({
    mapPropsToValues({ name, age, height}) {
        return {
            name: name || '',
            age: age || '',
            height: height || ''
           
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please enter name'),
        age: Yup.string().required('Age is required'),
        height: Yup.string().required('Please enter height'),
    }),

    handleSubmit(values, { setStatus }) {
        console.log('values object:', values);
        axios
            .post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log('values object:', values);
                console.log('info from api', res);

            })
            .catch(err => {
                console.log('values object:', values)
                console.log(err.response)
            }
            );
    }
})(CreateSmurf);

export default FormikCreateSmurf;
