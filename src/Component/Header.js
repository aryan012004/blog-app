import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
   

    return (
        <header className="bg-primary py-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
               
                <Link to="/" className="text-decoration-none text-white d-flex align-items-center">
                    <span className="fs-3 fw-bold">Logo</span>
                </Link>

                
               
              
               
            </div>
        </header>
    );
}

export default Header;
