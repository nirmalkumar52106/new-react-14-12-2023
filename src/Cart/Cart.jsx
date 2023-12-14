
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { Footerpge } from '../Homecomponents/Footer'
import { Navbar } from '../Homecomponents/Navbar'
import oopsimg from ".././images/oops.jpg"
import { toast, ToastContainer } from 'react-toastify' 


function Cart() {

  
  const addcart = () => {
      toast.warn("Item Deleted..!");
  }

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart 
  } = useCart()

  const { cartTotal } = useCart()

  //when our cart is empty then
  if (isEmpty && emptyCart) return <>  <Navbar/>
  <div className='emptycartShow'>
    <img src={oopsimg} alt="oops"/>
    <p>Please Add  Some item from shop...!</p>
  <Link to="/home" > Continue to Shopping</Link>
  </div>
  <Footerpge/>
  </>


  return (
    <>
    <div className='Cart-main-main'>
   <ToastContainer position='top-center'/>
    <div className='heading'>
    <h3 class="Heading">Shopping Cart</h3>
    <Link to="/home"><button>Continue to Shoping</button></Link>
    </div>
     
      <ul>
        {items.map(item => (
          <div className='cart' key={item.id}>
            <div class="CartContainer">
              <div className='Header'>
              <div class="Cart-Items">
                <div class="image-box">
                  <img src={item.productimg} alt="cartimg" />
                </div>
                <div class="about">
                  <h1 class="title">{item.name}</h1>
                  <h3 class="subtitle">Qauntity:{item.quantity}</h3>
                </div>
                <div class="counter">
                  <button className='btn'
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <div className='btnred'>
                  <button className='btn'
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  </div> 
                </div>
                <div class="prices">
                  <div class="amount">price:<i class="fa-solid fa-indian-rupee-sign"></i>{item.price}</div>
                  <div class="save">Save for later</div>
                  <div class="remove"> <button class="glow-on-hover" onClick={() =>{ removeItem(item.id);addcart()}}><i class="fa-solid fa-trash-can"></i></button></div>
                  <h5 class="Action"> <button class="glow-on-hover" onClick={() => {emptyCart(item.id);addcart()}}><i class="fa-solid fa-trash"></i> All</button></h5>
                </div>
                <div className='totalprice'>
                <Link to="/checkout"> <button><i class="fa-solid fa-box"></i>Checkout</button></Link>
                </div>
              </div>
            </div>
            </div>
         </div>
         
        ))}
      </ul>
      <div className='totalprice'>
        <h5> Totalprice:{cartTotal}</h5>
      
       <Link to="/home"><button>Continue to Shopping</button></Link> 
      </div>
     </div>
    </>
  )
}

export { Cart }