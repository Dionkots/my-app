import React from "react";
import { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import '../styles/Apartments.css'
import { Card } from "react-bootstrap";

class Apartments extends Component {
    render(){
        return(
            <div class="Apartments"><Navbar />
            <div className="Review-images2">
            <img className="images"  src={process.env.PUBLIC_URL + 'Images/IMG_20220104_155421.jpg'} width="100%" ></img>
            </div>
            <h4>Διαλεξε το δωματιο σου</h4>
          
            <h3>DeniaStella Apartments</h3>
            
            <div class="card-deck">
  <div class="card">
    <div class="card-body">
    <a class="card-title">Denia Apartment</a>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + 'Images/received_293769199161648.jpeg'} class="card-img-top" alt="..."></img>
      <p class="card-text">Bedrooms: 2<br></br>

Bathrooms: 1<br></br>
Double beds: 2<br></br>

Sofa bed: 1<br></br>

Size: 55 m²</p>
      <hr></hr>
     
    
      <hr></hr>
    </div>
  </div>
  

  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Stella Apartment</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + 'Images/IMG_20210925_144451_new.jpg'} class="card-img-top" alt="..."></img>
      <p class="card-text">Bedrooms: 2<br></br>

Bathrooms: 1<br></br>
Double beds: 1<br></br>

Single beds: 2<br></br>

Sofa bed: 1<br></br>

Size: 60 m²</p>
      <hr></hr>
      
    </div>
  </div>
</div>
<Footer className='Footer'/>
</div>
     )   }
}


export default Apartments;