import React from 'react';
import './Navbar.css';

const Navbar = () => {
    
    return (
        <nav class="navbar navbar_area navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar Brand</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse custom_navbar_area navbar-collapse mx-auto justify-content-around" id="navbarNavDropdown">
                    <ul class="navbar-nav justify-content-center">
                        <li class="nav-item pe-3 text-uppercase">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item pe-3 text-uppercase">
                            <a class="nav-link" href="#">Value</a>
                        </li>
                        <li class="nav-item pe-3 text-uppercase">
                            <a class="nav-link" href="#">Info</a>
                        </li>
                        <li class="nav-item pe-3 text-uppercase">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item ms-lg-3 px-2 custom_singinANDsignup">
                            <a class="nav-link" href="#">Sign in/Sign up</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav justify-content-end">
                        <li class="nav-item dropdown text-uppercase">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Account
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Personal</a></li>
                                <li><a class="dropdown-item" href="#">Payment/Membership</a></li>
                                <li><a class="dropdown-item" href="#">Valuations</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;