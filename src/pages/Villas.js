import React from "react";
import { Component } from "react";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import '../styles/Apartments.css'
import { Card } from "react-bootstrap";

class Villas extends Component {
    render(){
        return(
            <div class="Villas"><Navbar />
                      <div className="Review-images2">
            <img className="images"  src={process.env.PUBLIC_URL + 'Images/14.jpg'} width="100%" ></img>
            </div>
            <h4>Διαλεξε το δωματιο σου</h4>
            
            <h3>DeniaStella Villas</h3>
            
            <div class="card-deck">
  <div class="card">
    <div class="card-body">
    <a class="card-title">Family Room</a>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + 'Images//7.jpg'} class="card-img-top" alt="..."></img>
      <p class="card-text">Bedrooms: 1<br></br>
Bathrooms: 1<br></br>
Double beds: 1<br></br>
Size: 42 m²<br></br>

No balcony<br></br>

 

This studio can sleep a child on a extra bed.</p>
      <hr></hr>
     
    </div>
  </div>
  

  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Studio 1</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + 'Images//8.jpg'} class="card-img-top" alt="..."></img>
      <p class="card-text">Bathrooms: 1<br></br>
Double beds: 1<br></br>
Size: 23 m²<br></br>

 

This studio can sleep a child on a extra bed.</p>
      <hr></hr>
     
    </div>
  </div>

  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Studio 2</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + 'Images//9.jpg'} class="card-img-top" alt="..."></img>
      <p class="card-text">Bathrooms: 1<br></br>
Single beds: 2
<br></br>
Sofa bed: 1<br></br>
Size: 23 m²</p>
      <hr></hr>
      
    </div>
  </div>

  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Apartment Ninemia I</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + 'Images//10.jpg'} class="card-img-top" alt="..."></img>
      <p class="card-text">Bedrooms: 1<br></br>
Bathrooms: 1<br></br>
Double beds: 1<br></br>
Double sofa beds 2: 1<br></br>
Size: 47 m²<br></br>

 

This apartment can sleep a child on a extra bed.</p>
      <hr></hr>
      <a href="#" class="btn-primary">Go somewhere</a>
    </div>
  </div>

  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Apartment Ninemia II</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + 'Images//12.jpg'} class="card-img-top" alt="..."></img>
      <p class="card-text">Bedrooms: 1<br></br>
Bathrooms: 1<br></br>
Double beds: 1<br></br>
Double sofa beds 2: 1<br></br>
Size: 47 m²<br></br>

 

This apartment can sleep a child on a extra bed.</p>
      <hr></hr>
     
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Ioanna Maisonette</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + 'Images/11.jpg'} class="card-img-top" alt="..."></img>
      <p class="card-text">Bedrooms: 2<br></br>
Bathrooms: 2<br></br>

WC: 1d <br></br>
Double beds: 1<br></br>
Single beds: 2<br></br>
Size: 70 m²</p>
      <hr></hr>
      
    </div>
  </div>

    
  
  
</div>
<Footer className='Footer'/>
</div>
           
        )
    }
}

export default Villas;