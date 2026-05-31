import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const formChangeHandle = (e) =>{
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    setErrors(prev => ({...prev,[name]: ""})); 
  }

  const formSubmitHandle = (e) =>{
    e.preventDefault();
    const {email, password} = formData;
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //console.log("Form Submitted", formData);
    if(email.trim() === ""){
        newErrors.email = "Email is required";
    }else if(!emailRegex.test(email)){
        newErrors.email = "Invalid email format";
    }

    if(password.trim() === ""){
        newErrors.password = "Password is required";
    }else if(password.length < 6){
        newErrors.password = "Password must be at least 6 characters";
    }

    if(Object.keys(newErrors).length > 0){
        setErrors(newErrors);
        console.log("Errors:", errors);
    } else {
        //setErrors({}); 
        //console.log("Form Data Submitted:", formData); 
        submitForm(formData);
    }
  }

  const submitForm = async(data) =>{
        try{
            console.log("Submitting form data:", data);
            // API call to submit the form data
        }catch(Errors){
            console.log("Error submitting form:", Errors);
            setErrors({submit: "Failed to submit form" });
        } 
  }
  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={formSubmitHandle}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={formChangeHandle}
            value={formData.email}
          />
          {errors.email && (
          <p>{errors.email}</p>
          )}
          
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={formChangeHandle}
            value={formData.password}
          />
            {errors.password && (
            <p>{errors.password}</p>
            )}
        </label>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};
export default LoginForm;
