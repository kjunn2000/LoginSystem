import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export default function navComponent(){
    return(
        <Navbar> 
            <nav id="nav">
                    <ul class="nav-links">
                        <li ><a class="nav-link" href="index.html">HOME</a></li>
                        <li ><a class="nav-link" href="aboutus.html">ABOUT US</a></li>
                        <li ><a class="nav-link" href="product.html">PRODUCT</a></li>
                        <li ><a class="nav-link" href="brand.html">BRAND</a></li>
                        <li ><a class="nav-link" href="contactus.html">CONTACT US</a></li>
                    </ul>
                </nav>
        </Navbar>
    
    )
}