import React from "react";
import { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import '../styles/Contact.css'

class Contact extends Component {
    render(){
        return(
            <div class="Contact"><Navbar />
           
            <div className="Review-images2">
            <img className="images"  src={process.env.PUBLIC_URL + 'Images/thassos.jpg'} width="100%" ></img>
            </div>
            
            <h6>Επικοινωνηστε μαζι μας</h6>

            <div class="card">
    <div class="card-body">
   
      <hr></hr>
      <img src={process.env.PUBLIC_URL + 'Images/18.jpg'} class="card-img-top" alt="..."></img>
      <p class="card-text">
          Tel: (+30) 210 5059298<br></br>
Mob :(+30) 694 0116297<br></br>
Email:info@deniastella-apartments.gr<br></br>
Address:Skala Potamias, Thassos
P.C. 64004, Greece<br></br>

</p>
      <hr></hr>
      
    
      <hr></hr>
    </div>
  </div>
  
            
            
            
            
            
            
            
            
            
            <Footer className='Footer'/>
            </div>
        )
    }
}
export default Contact;