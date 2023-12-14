import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import sademoji from "../images/output-onlinegiftools.gif"

function Payment() {
  const { cartTotal } = useCart()

  const [money, setMoney] = useState(cartTotal);

  if(cartTotal>50000){
    return(
      <>
      <div className='declined-main'>
      <p className='declined-payment'>Payment declined you have not purchase item above 50000
      <br/>
      your total price in cart is {cartTotal}
     </p>
     <Link to="/cart">Check your limit...</Link>
     <br/>
     <img src={sademoji} alt='sad'/>
        </div>
      </>)
  }
  return (
    <div className='payment' style={{ textAlign: "center" }}>
      <br />
      <QRCode
        value={`upi://pay?pa=8053088725@ybl&pn=Intellemo&tn=cftrhwetaw4gta&am=${money}`}
        size="300"
        logoWidth="80"
        logoHeight="100"
        logoOpacity="0.6"
      />
      <p>Scan the code using PhonePe, Google Pay or Paytm for secure payment</p>
    </div>
  );
}
export { Payment }