import DatePicker from 'react-datepicker';
import React, { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import icon from './icon.facebook.png'
function Contact() {
    const [date, setDate] = useState(new Date());
    const handAlert = () => {
        Swal.fire({
            title: "Great!",
            text: "Your reservation has been completed. Thanks.",
            imageUrl: "https://images.unsplash.com/photo-1633862472152-e3873eb1b3ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Poke"
          });
        }
    return(<div className="contact">
        <div>
        <h1 className="confirm">Favorite Poke</h1>
        <h2 className="confirm">Contact</h2>
        <p>500 Terry Francine Street</p>
        <p>Chicago IL 60004</p>
        <p>123-456-7890</p>
        <p>info@myfavoritePoke.com</p>
        <h2 className="confirm">Follow Us</h2>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
             Facebook</a>
             <br></br>
             <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
             Instagram</a>
        </div>
        <div>
         <h2 className="confirm">Make a reservation</h2>
         <p>To help us  find the best table for you, select the preferred party size, date, and time of your reservation.</p>
<form>
<div className="form">
    <label>Party size</label>
    <select className="space">
        <option>2 guests</option>
        <option>4 guests</option>
        <option>5 guests</option>
        <option>6 guests</option>
        <option>More? Call us</option>
    </select>
</div>
<div className="form">
<label>Date</label>
<DatePicker className="space" selected={date} onChange={(date) => setDate(date)}/>
</div>
<div className="form">
    <label>Time</label>
    <select className="space">
        <option>2:30</option>
        <option>3:00</option>
        <option>3:30</option>
        <option>4:00</option>
        <option>4:30</option>
        <option>5:00</option>
        <option>5:30</option>
        <option>6:00</option>
        <option>6:30</option>
        <option>7:00</option>
    </select>
</div>
</form>
<button className="order" onClick={handAlert}>Submit</button>
         </div>
         </div>
    )
}
export default Contact;