
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useCart } from 'react-use-cart'
import img from "../../images/download (1).jpg"
import img1 from "../../images/download.jpg";
import img2 from "../../images/oneplus).jpg";
import img3 from "../../images/oppa31.jpg";
import img4 from "../../images/oppo147).jpg";
import img5 from "../../images/technojpg.jpg";
import img6 from "../../images/waltons.jpg";
import img7 from "../../images/backcover-removebg-preview.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Products(props) {

  const notify = () => toast.success("Item successfully added to cart...!");
console.log(notify)
  const { addItem } = useCart()
 
  const [data,setdata] = useState([
    {
  
      id: "1",
      name: 'Oppo F33',
      price: 1,
      productimg:`${img}`
     
    },
    {
      id: "2",
      name: 'Realme c33',
      price: 16500,
      productimg:`${img1}`
     
    },
    {
      id: "3",
      name: 'Oneplus-nord ce2',
      price: 16799,
      productimg:`${img2}`
     
    },
    {
      id: "4",
      name: 'Oppo A31',
      price: 12500,
      productimg:`${img3}`
     
    },
    {
      id: "5",
      name: 'Oppo A47',
      price: 14500,
      productimg:`${img4}`
     
    },
    {
      id:"6",
      name: 'Techno 5g',
      price: 24500,
      productimg:`${img5}`
     
    },
    {
      id: "7",
      name: 'Walton',
      price: 10500,
      productimg:`${img6}`
     
    },
    {
      id: "8",
      name: 'Mobile back cover',
      price: 299,
      productimg:`${img7}`
     
    },
  ])
 
  const [filterr,setfilter]=useState([...data])

  useEffect(()=>{
    if(props.inputValue !== ''){
      chnagevalue(props.inputValue);
    }else if(props.inputValue===0){
      setfilter(data)
    } else {
      setfilter(data);
    }
  },[props.inputValue]);

  const chnagevalue=(e)=>{
    const getvalue = e;
    const updatevalue=filterr.filter((filteritem)=>filteritem.name.toLowerCase().startsWith(getvalue))
    if(getvalue){
      setfilter(updatevalue)
    } else{
      setfilter(data)
    }
  }
 
  return (
    <>
  
    <div id='product'>
    
      <ToastContainer position="top-center" />
      <div className='container'>
     
      <h1>Our Products</h1>
      <div className='Main-productlist'>
      {filterr.map(p => (
        <div className='product-bx' key={p.id}>
          <div className='imgsection'>
          <img src={p.productimg} alt="img"/>
          </div> 
          <Link to={`/productss/${p.id}`}> <h3>{p.name}</h3></Link>
           
            <p>OPPO F13 is the new mobile from OPPO that was launched in India on CANCELLED.</p>
            <h2>Price:<i class="fa-solid fa-indian-rupee-sign"></i>{p.price}</h2>
          <button className='btn' onClick={() => { addItem(p); notify();}}>Add to cart</button>
        </div>
      ))}
    </div>
    </div>
    </div>
    </>
    
  )
}

export {Products}