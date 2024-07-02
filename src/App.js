import React from "react";
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import './App.css';
import Page from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function App() {
return(<Router>
        <nav>
          <Link to="/home" className='Link'>Home</Link>
          <Link to="/page" className='Link'>Menu</Link>
          <Link to="/about" className='Link'>About</Link>
          <Link to="/contact" className='Link'>Contact us</Link>
        </nav>
    
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/page" element={<Page/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
)
}

export default App;
