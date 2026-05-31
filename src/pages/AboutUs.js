import React, { useEffect, useState, useContext } from 'react';
import ResizedWindow from '../components/ResizedWindow';
import { fetchData } from '../utils/apis';
import User from '../components/User';
import UserClass from '../components/UserClass';
import { ThemeContext } from '../contexts/ThemeContext';

const AboutUs = () => {
  const [btnHandle, setBtnHandle] = useState(false);
  const [name, setName] = useState("");
  const [checkMount, setCheckMount] = useState(true);
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  const {theme, toggleTheme} = useContext(ThemeContext);

  //console.log("About Us Rendered");

  // Runs every time the component renders
  // useEffect(()=>{
  //   console.log("Without dependency array");

  // });

  //Runs only once when the component mounts
  // useEffect(()=>{
  //   console.log("About us useEffect");
  // },[]);

 // Runs when the component mounts and when state changes
  // useEffect(()=>{
  //   console.log("About us useEffect with btnHandle");
  // },[name])

// Cleanup on Unmount
// useEffect(()=>{
//   const time = setInterval(()=>{
//     console.log("Interval running");
//   }, 1000);
//   return ()=>{
//     clearInterval(time);
//     console.log("cleanup");
//   }
// },[])

// Runs when the component mounts and state changes
// useEffect(()=>{
//   console.log("Count changed: ", count);
// },[count]);

// Runs once when the component mounts for API calls or initial setup
useEffect(()=>{
  const getPostData = async () => {
    const dataPost = await fetchData();
   console.log(dataPost.slice(0,5));
  }
  getPostData();
},[]);

// Window resize event listener

 
  return (
    <>
    {theme}
    <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>About Us</h1>
        <p>About content</p>
        <User name={"Jonh katre"} /> 
        <UserClass name={"Pjone"}/>
        <button onClick={()=>{setBtnHandle(true)}}>Click Btn {btnHandle == true ? 'right' : 'wrong'}</button>
        <button onClick={()=>{setName("Pankaj")}}>Set Name {name}</button>

        <button onClick={()=>{setCheckMount(!checkMount)}}>{checkMount ? "Unmounted" : "Mount"}</button>
        {/* {checkMount && <ResizedWindow />} */}

        <button onClick={()=>{setCount(count + 1)}}> Increament</button>
    </>
  )
}

export default AboutUs
