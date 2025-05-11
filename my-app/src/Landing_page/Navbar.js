import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-white border-bottom ">
        <div class="container ">
          
            <Link class="navbar-brand d-flex align-items-center" to="/">
                <img src="Media/logo.png" style={{width:"40%"}}/>

            </Link>

           
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

           
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/signup">Signup</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link  active" to="/product">Products</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/pricing">Pricing</Link>
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link active" to="/support">Support</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar