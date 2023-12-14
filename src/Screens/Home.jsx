import React, { useState } from "react";
import { Footerpge } from "../Homecomponents/Footer";
import { Navbar } from "../Homecomponents/Navbar";
import { Products } from "../Homecomponents/Products/Item";

function Home(){

    const [value, setValue] = useState();
    const getInputValue = (data) => {
        setValue(data);
      }

    return(
        <>
        <Navbar send={getInputValue}/>
        <Products inputValue={value}/>
        <Footerpge/>
        </>
    )
}

export{Home}