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
            <img className="images"  src={process.env.PUBLIC_URL + 'Images/IMG_20220104_155421.jpg'} width="100%" ></img>
            </div>
            <h4>Διαλεξε το δωματιο σου</h4>
            
            <h3>DeniaStella Villas</h3>
            
            <div class="card-deck">
  <div class="card">
    <div class="card-body">
    <a class="card-title">Card title</a>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + '/travelmyth.png'} class="card-img-top" alt="..."></img>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <hr></hr>
      <a href="#" class="btn-primary">Go somewhere</a>
    </div>
  </div>
  

  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Card title</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + '/travelmyth.png'} class="card-img-top" alt="..."></img>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <hr></hr>
      <a href="#" class="btn-primary">Go somewhere</a>
    </div>
  </div>

  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Card title</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + '/travelmyth.png'} class="card-img-top" alt="..."></img>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <hr></hr>
      <a href="#" class="btn-primary">Go somewhere</a>
    </div>
  </div>

  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Card title</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + '/travelmyth.png'} class="card-img-top" alt="..."></img>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <hr></hr>
      <a href="#" class="btn-primary">Go somewhere</a>
    </div>
  </div>

  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Card title</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + '/travelmyth.png'} class="card-img-top" alt="..."></img>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <hr></hr>
      <a href="#" class="btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Card title</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + '/travelmyth.png'} class="card-img-top" alt="..."></img>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <hr></hr>
      <a href="#" class="btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <a1 class="card-title">Card title</a1>
      <hr></hr>
      <img src={process.env.PUBLIC_URL + '/travelmyth.png'} class="card-img-top" alt="..."></img>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <hr></hr>
      <a href="#" class="btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
<Footer className='Footer'/>
</div>
           
        )
    }
}

export default Villas;