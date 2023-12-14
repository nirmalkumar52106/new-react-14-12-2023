import React from "react";
import { Link } from "react-router-dom";
import { Footerpge } from "../Homecomponents/Footer";
import { Navbar } from "../Homecomponents/Navbar";
import { Products } from "../Homecomponents/Products/Item";
function About(){

    const [value, setValue] = React.useState();
    const getInputValue = (data) => {
        setValue(data);
      }

    return(
        <>
        <div id="about-page">
            <Navbar/>
            <Products inputValue={value}/>
            <section id="footer">
            <Footerpge/>
            </section>
            
            <Link to="/">Home</Link>

        </div>
        
        
        </>
    )
}

export{About}