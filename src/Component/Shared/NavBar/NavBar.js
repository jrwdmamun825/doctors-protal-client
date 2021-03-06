import React from 'react';

const NavBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item me-4">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link mr-5" href="#">About</a>
                            </li>
                            <li className="nav-item me-4">
                                <a style={{color: '#117864'}} className="nav-link mr-5" href="#">Dental Services</a>
                            </li>
                            <li className="nav-item me-4">
                                <a style={{color: '#117864'}} className="nav-link mr-5 " href="#">Reviews</a>
                            </li>
                            <li className="nav-item me-4 text-white">
                                <a style={{color: '#117864'}} className="nav-link mr-5 " href="#">Blogs</a>
                            </li>
                            <li className="nav-item me-4 text-white">
                                <a style={{color: '#117864'}} className="nav-link mr-5 " href="#">Contact Us</a>
                            </li>
                            

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;