
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import './form.css'




const WorkForm = () => {  
   return (
      
      <Formik
      initialValues = {{
         email: '',
         password: ''
        }}
      validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         } 
         return errors;
       }}
        onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        > 
            <Form className='form form-floating'>
               <h5>Welcom!</h5>
               <h1>Join The Community</h1>
              
               <div class="oneInput">
                  <label for="exampleInputEmail1" 
                         class="form-label">E-mail or Username</label>
                  <div>
                     <i class="fas fa-envelope" 
                        aria-hidden="true"></i>
                     <input type="email" 
                            className="form-control i_input" 
                            id="exampleInputEmail1"
                            placeholder=" e.g.:elonmusk@mars.com"/>
                  </div>       
               </div>

               <div class="twoInput">
                  <label for="exampleInputPassword1" 
                         class="form-label">Password</label>
                  <div>
                     <i class="fas fa-lock" aria-hidden="true"></i>
                     <input type="password" 
                            className="form-control i_input" 
                            id="exampleInputPassword1"
                            placeholder="e.g.:X AF A-12"/>
                     
                  </div>                       
               </div>   
               <button type="submit" 
                       class="btn-primary">
                  <span className="text_btn">Sign Up</span>
               </button>
               <p>Alredy a member?
                  <a href='#'>  Login here → </a>
               </p>              
            </Form>          
       </Formik>    
     
   )
}


export default WorkForm;

