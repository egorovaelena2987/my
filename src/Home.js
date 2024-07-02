
import './App.css';
import React from 'react';
import video from './salad.mp4';
import Swal from 'sweetalert2';


function Home() {
    const handAlert = () => {
        Swal.fire({
            title: "Great!",
            text: "Your order has been completed. Thanks.",
            imageUrl: "https://images.unsplash.com/photo-1633862472152-e3873eb1b3ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Poke"
          });
    }
    return(
        <div className="container">
           <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
<div className='name'>
<h1>Favorate Poke</h1>
</div>
<div className='name'>
<h2>QUALITY PRODUCTS. HAWAIIAN FLAVOURS.</h2>
</div>
<div className='name'>
<h4>Open Daily for Takeout & Delivery</h4>
</div>
<div className='name'>
    <button className='order' onClick={handAlert}>ORDER NOW</button>
</div>
</div>
    )
}
export default Home;