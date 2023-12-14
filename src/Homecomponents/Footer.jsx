import React from "react";
import img from ".././images/download (1).jpg"
function Footerpge(){
    return(
        <>
        
        <div class="footer">
        <div class="container">
            <div class="footer-in">
                <div class="about-us">
                    <h3>ABOUT US</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consequuntur iste porro impedit optio quas similique in asperiores veritatis expedita placeat aperiam, perferendis architecto harum obcaecati aliquid doloremque. </p>
                </div>
                <div class="about-us">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><a href="#about-us">About Us</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div class="about-us">
                    <h3>FOLLOW US</h3>
                    <h4>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-google"></i>
                    </h4>
                </div>
                <div class="about-us">
                    <h3>FEATURED PRODUCT</h3>
                    <div class="image">
                        <img src={img} alt="img"/>
                    </div>
                    <div class="text">
                        <h4>Oppo F33</h4>
                        <h3>price:<i class="fa-solid fa-indian-rupee-sign"></i> 9999</h3>
                    </div>
                    <div class="btn-btn">
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  
        
        </>
    )
}
export{Footerpge}