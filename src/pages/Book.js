import React from "react";
import { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import '../styles/Book.css'



class Book extends Component {
    render(){
        return(
            <div class="Book"><Navbar />
<div className="Review-images3">
            <img className="images"  src={process.env.PUBLIC_URL + 'Images/book.jpg'} width="100%" ></img>
            </div>

    

            <h5>Κανε κρατηση</h5>
<form  action="http://localhost:3001/contact-us" method="POST">
  <div class="elem-group">
    <label for="name">Your Name</label>
    <input type="text" id="name" name="visitor_name" placeholder="John Doe"  required></input>
    <div class="elem-group">
    </div>
    <hr></hr>
    <label for="email">Your E-mail</label>
    <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" required></input>
  </div>
  <hr></hr>
  <div class="elem-group">
    <label for="phone">Your Phone</label>
    <input type="tel" id="phone" name="visitor_phone" placeholder="498-348-3872"  required></input>
  </div>
<hr></hr>
  <div class="elem-group inlined">
    <label for="adult">Adults</label>
    <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required></input>
  </div>
  <hr></hr>
  <div class="elem-group inlined">
    <label for="child">Children</label>
    <input type="number" id="child" name="total_children" placeholder="2" min="0" required></input>
  </div>
  <hr></hr>
  <div class="elem-group inlined">
    <label for="checkindate">Check-in Date</label>
    <input type="date" id="checkindate" name="checkin" required></input>
  </div>
  <hr></hr>
  <div class="elem-group inlined">
    <label for="checkoutdate">Check-out Date</label>
    <input type="date" id="checkoutdate" name="checkout" required></input>
  </div>
  <hr></hr>
  <div class="elem-group">
    <label for="roomselection">Select Room Preference</label>
    <select id="roomselection" name="room_preference" required>
        <option value="">Choose a Room from the List</option>
        <option value="connecting">Denia Apartment</option>
        <option value="adjoining">Stella Apartment</option>
        <option value="adjacent">Ioanna Masonette</option>
    </select>
  </div>
  <hr></hr>
  <div class="elem-group">
    <label for="message">Anything Else?</label>
    <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required></textarea>
  </div>
  <hr></hr>
  <button type="submit">Book The Rooms</button>
</form>    
            


            
            
            
            
            
<Footer className='Footer'/>
            </div>
            
        )
    }
}
export default Book;