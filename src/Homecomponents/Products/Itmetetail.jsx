import React from "react";
import { Link } from "react-router-dom";

 function Itemdetail(){
    return(
        <>
        <div>
            <h1>this is item detail page</h1>
            <Link className="btn" to="/home"> Home</Link>
        </div>
        </>
    )
 }

 export{Itemdetail}