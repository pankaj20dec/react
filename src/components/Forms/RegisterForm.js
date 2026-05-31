import React, {useState} from "react";

const RegisterForm = ()=>{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const onChangeHandle = (e)=>{
    //console.log([e.target.name]= e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({...errors, [e.target.name]: ""});
  }
  const submitHandler = (e)=>{
    let errorsMsg = {};
    e.preventDefault();
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(formData.name.trim() === ""){
      errorsMsg.name = "Name is required";
    }
    if(formData.email.trim() === ""){
      errorsMsg.email = "Email is required";
    }else if(!emailValidate.test(formData.email)){
      errorsMsg.email = "Email is not valid";

    }



    if(formData.password.trim() === ""){
      errorsMsg.password = "Password is required";
    }
    if(formData.confirmPassword.trim() === ""){
      errors.confirmPassword = "Confirm password is wrong"
    }else if(formData.password !== formData.confirmPassword){
      errorsMsg.confirmPassword = "Password not matching";
    }
    if(Object.keys(errorsMsg).length > 0){
      setErrors(errorsMsg);
      return;
    }
    setErrors({});
    formSubmit();
  }
  const formSubmit = ()=>{
        console.log("Form Data Submitted", formData);
        setSuccess("Form Submitted successfully");
    }
    return (
        <>
          <h2>Register Form</h2>
          <form onSubmit={submitHandler}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={onChangeHandle}/>
            {errors.name && <p style={{'color': 'red'}}>{errors.name}</p>}
            <br></br>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={onChangeHandle}/>
            {errors.email && <p style={{'color': 'red'}}>{errors.email}</p>}
            <br></br>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={onChangeHandle}/>
            {errors.password && <p style={{'color': 'red'}}>{errors.password}</p>}
            <br></br>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={onChangeHandle} />
            {errors.confirmPassword && <p style={{'color': 'red'}}>{errors.confirmPassword}</p>}
            <br></br>
            <input type="submit" value="Register" />
          </form>
          {success && <p>{success}</p>}
        </>
    )
}
export default RegisterForm;