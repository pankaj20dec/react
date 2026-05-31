import { useEffect } from "react";

const ResizedWindow =()=>{
    useEffect(()=>{
        const handleResize = () => {
            console.log("Window resized", window.innerWidth, window.innerHeight);
        }
        window.addEventListener("resize", handleResize);
        console.log("ResizedWindow component mounted");

        return ()=>{
            window.removeEventListener("resize", handleResize);
            console.log("ResizedWindow component unmounted");
        }
    }, []);

    return (
        <div>
            <h1>Resized Window Component</h1>
            <p>This component is used to handle window resize events.</p>
        </div>
    );
}

export default ResizedWindow;