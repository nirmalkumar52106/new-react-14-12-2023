import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

class Checkout extends React.Component{
    Toast(){
toast.success("Payment sucessfully Completed")
    }
    state={
        disabled:true
    }
    handlechange=(e)=>{
    if(e.target.value.length>=10){
        this.setState(
            {
                disabled:false 
            }
        )
    }
    else{
        this.setState(
            {
                disabled:true
            }
        )
    }
}
handlechange1=(e)=>{
    if(e.target.value.length>=5){
        this.setState(
            {
                disabled:false 
            }
        )
    }
    else{
        this.setState(
            {
                disabled:true
            }
        )
    }
}
handlechange2=(e)=>{
    if(e.target.value.length>=3){
        this.setState(
            {
                disabled:false 
            }
        )
    }
    else{
        this.setState(
            {
                disabled:true
            }
        )
    }
}

   render() {return (
        <>
        <ToastContainer position="top-center"/>
            <div id="checkout">
                <form>
                    <div class="form-container">
                        <div class="personal-information">
                            <h1>Payment Information</h1>
                        </div>

                        <input id="column-left" type="text" name="first-name" placeholder="First Name" />
                        <input id="column-right" type="text" name="last-name" placeholder="Surname" />
                        <input id="input-field" type="text" name="number" placeholder="Card Number" onChange={this.handlechange} />
                        <input id="column-left" type="text" name="expiry" placeholder="MM / YY"  onChange={this.handlechange1}/>
                        <input id="column-right" type="text" name="cvc" placeholder="CCV"  onChange={this.handlechange2}/>

                        <div class="card-wrapper"></div>

                        <input id="input-field" type="text" name="streetaddress" required="required" autocomplete="on" maxlength="45" placeholder="Streed Address" />
                        <input id="column-left" type="text" name="city" required="required" autocomplete="on" maxlength="20" placeholder="City" />
                        <input id="column-right" type="text" name="zipcode" required="required" autocomplete="on" pattern="[0-9]*" maxlength="5" placeholder="ZIP code" />
                        <input id="input-field" type="email" name="email" required="required" autocomplete="on" maxlength="40" placeholder="Email" />
                       <div className="disabled-btn">
                       <Link to="/payment">
                       <button className="btn" disabled={this.state.disabled}  onClick={this.Toast} >Place Order</button>
                       </Link>
                       </div>
                       <div className="disabled-btn">
                        <Link to="/home"><button className="btn">Continue to Shopping</button></Link>

                       </div>
                    </div>
                </form>
            </div>
           



        </>
    )
}}

export { Checkout }
