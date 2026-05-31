import React, { useState } from "react";

const ContactUs = () => {
  // counter  - number
  const [count, setCount] = useState(0);
  // show and shide -- boolean
  const showHandler = () => {
    setShown((prev) => !prev);
  };

  // Form Data - object
  const [isshown, setShown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    subscribe: false
  });
 const [errors, setErrors] = useState({});
  // const formChangeHandle = (e) =>{
  //    const {name, mobile, email, message} = e.target.value
  // }

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const formChangeHandle = (e) => {
    //  if(e.target.name === "name"){
    //  setName(e.target.value);
    // }else if(e.target.name === "email"){
    //  setEmail(e.target.value);
    // }
    //console.log(e);
    const { name, value, type,checked } = e.target;
    setFormData((prev) => ({ ...prev, 
      [name]: type==='checkbox' ? checked : value
    }));

    setErrors((prevErrors)=>({
        ...prevErrors,
        [name]: ''
    }))
  };

const formSubmitHandle = (e) => {
  e.preventDefault();
  const {name, email, mobile, subscribe} = formData;
  const errorMessages = {};
  //console.log("Form Submitted", formData);
  if(name.trim() === ''){
    errorMessages.name = "Name is required";
  }
  if(email.trim() === ''){
    errorMessages.email = "Email is required";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
    errorMessages.email = "Invalid email address";
  }
  if(mobile.trim() === ''){
    errorMessages.mobile = "Mobile number is required";
  }else if(mobile !== '' && !/^\d{10}$/.test(mobile)){
    errorMessages.mobile = "Mobile number must be 10 digits";
  }
  if(!subscribe){
    errorMessages.subscribe = "You must subscribe to the newsletter";
  }

  //console.log("Errors", errorMessages); 

  //setErrors(errorMessages);
  //console.log(Object.keys(errorMessages).map(key => console.log(key)));
  if(Object.keys(errorMessages).length > 0){
    setErrors(errorMessages);
    return;
     //console.log("Validation", errorMessages);
  }
   setErrors({});
   submitForm(formData);
}

const submitForm = async (data) =>{
  try{
    console.log("Form successfully submitted", data);
  }
  catch(error){
    console.log("Form submission failed", error);
    setErrors({submit: "Form submission failed. Please try again later."});
  }
}

  return (
    <div>
      Contact Us Page
      <p>If you have any questions, feel free to reach out to us!</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increament {count}
      </button>
      <button onClick={showHandler}>Toggle Show </button>
      {isshown && <div> This is show now </div>}
      {formData.name} - {formData.email} - {formData.subscribe.toString()}
      <form onSubmit={formSubmitHandle}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={formChangeHandle}
          />
          { errors.name && (
          <span style={{'border':"1px solid red"}}>{errors.name}</span>
          )}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={formChangeHandle}
          />
          { errors.email && (
          <span style={{'border':"1px solid red"}}>{errors.email}</span>
          )}
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={formChangeHandle}
          />
          { errors.mobile &&(
            <span style={{'border':"1px solid red"}}>{errors.mobile}</span>
          )}
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={formChangeHandle}
          />
        </label>
        <br />
        <label>
          <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={formChangeHandle}/> Subscribe to newsletter
          { errors.subscribe && formData.subscribe === false &&(
            <span style={{'border':"1px solid red"}}>{errors.subscribe}</span>
          )}
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactUs;
