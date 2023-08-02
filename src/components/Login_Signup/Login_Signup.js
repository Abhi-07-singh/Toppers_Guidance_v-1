import React, {useEffect,useState } from 'react';
import "./Login_Signup.css";
import OTPVerification from './OTP_Verification';


const LoginSignup = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const [allEntry, setAllEntry] = useState("");

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const newEntry = { First_Name: firstName, Last_Name: lastName, Email: email, Password: password, Confirm_Password: confirmPassword };
  //   setAllEntry([...allEntry, newEntry]);
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setPassword("");
  //   setConfirmPassword("");
  // }
  // console.log(allEntry);
  const initialValues={firstName: "", lastName: "", email: "", password: "", confirmPassword: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const{ name, value} = e.target;
    setFormValues({...formValues, [name]:value });
    localStorage.setItem('name', JSON.stringify(formValues));
    console.log(formValues);
  };
  const handleSubmit = (e) => { 
    e.preventDefault();
    setFormErrors(validate(formValues));  
    setIsSubmit(true);
    
                  
       

  };
  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);
  const validate = (values) => {
    const errors = {}
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!values.firstName){
      errors.firstName = "First name is required !";
    }

    if(!values.lastName){
      errors.lastName = "Last name is required !";
    }

    if(!values.email){
      errors.email = "Email is required !";
    }
    else if(!regex.test(values.email)){
      errors.email = "Invalid email address !"
    }
    if(!values.password){
      errors.password = "Password is required !";
    }
    else if(values.password.length < 4){
      errors.password = "Password must be more than 4 characters";
    }
    else if(values.password.length> 10){
      errors.password = "Password must be less than 10 characters";
    }

    if(values.password!==values.confirmPassword){
      errors.confirmPassword = "Confirm Password not matched, plzz re-enter !";
    }
    
    return errors;
  };
   return (
    <>
      <div className='registration_credentials'>
        <div className='login_vector_img'>
          <img src='./images/login_vector.svg' alt='login_vector_img' className='login_vector_icon'></img>
        </div>
        
        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='registration_heading'><OTPVerification /></div>):(
        <div className='registration_form'>
          <div className='registration_heading'><h2>Sign up / Register yourself :-</h2></div>

          <form autoComplete='off' onSubmit={handleSubmit}>

            <div className='resgister_input_form'>
              <input type='text' name='firstName' placeholder='First Name' className='register_input_sections' value={formValues.firstName} onChange={handleChange} required />
            </div>
            <div className='resgister_input_form'>
              <input type='text' name='lastName' placeholder='Last Name' className='register_input_sections' value={formValues.lastName} onChange={handleChange} required />
            </div>
            <div className='resgister_input_form'>
              <input type='email' name='email' placeholder='Email' className='register_input_sections' value={formValues.email} onChange={handleChange} required />
            </div>
            <p className='error_msg_mandatory_fields'>{ formErrors.email}</p>

            <div className='resgister_input_form'>
              <input type='password' name='password' placeholder='Password' className='register_input_sections' value={formValues.password} onChange={handleChange} required />
            </div>
            <p className='error_msg_mandatory_fields'>{ formErrors.password}</p>

            <div className='resgister_input_form'>
              <input type='password' name='confirmPassword' placeholder='Confirm Password' className='register_input_sections' value={formValues.confirmPassword} onChange={handleChange} required />
            </div>
            <p className='error_msg_mandatory_fields'>{ formErrors.confirmPassword}</p>
            <div className='create_acc_btn'>
              <button type='submit'>Create Account</button>
            </div>
          </form>
        </div> )}
      </div >
    </>
  )
}

export default LoginSignup;

