import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  useCart } from 'react-use-cart'
function Navbar(props){
    const {
        totalUniqueItems,
      } = useCart();

     
    const [value,setValue] = useState(null);
    
    const chnagevalue = (e)=> { 
        setValue(e.target.value);
        props.send(e.target.value);
    } 

    return(
        <>
        
        <nav class="navbar">
       
        <div className='search-input'>
            <input onChange={chnagevalue}/>
        </div>


        <div class="navbar-container container">
        <a href="/home" class="logo">Shop</a>
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><Link to="/home">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/itemdetail">Detail</Link></li>
                 <li><a href="tel:8053088725">Contact me</a></li>
                 <li><a href="mailto:kumarnirmal@52106@gmail.comy">Email</a></li>
                 <li><Link to="/customer"><i class="fa-regular fa-user"> </i></Link></li>
                 <li><Link to="/">Logout</Link></li>
                 
                 
            </ul>
        
        </div>
        <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
                 <p className="cart">{totalUniqueItems}</p>
    </nav>
        </>
    )
}

export{Navbar}