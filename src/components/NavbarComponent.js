import React, { Component,useState } from 'react';
import { Navbar, Button, NavbarBrand } from 'reactstrap'
import LoginModal from "react-login-modal";
import { LoginPage } from './LoginPage';
export default function NavbarComponent() {
    
    return (
        <div className="row mb-1">
            <Navbar className="navbar navbar-dark fixed-top  flex-md-nowrap p-0 " style={{background:"darkblue"}}>
                <a className="navbar-brand col-sm-3 col-md-3 mr-0" href="#">SIBAU FYP-MS</a>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        
                         <LoginPage />
                         
                    </li>
                </ul>
            </Navbar>
            <HandleSignIn />
        </div>
    );
}

function HandleSignIn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  
    const handleShow = () => setShow(true);
  
    return (
        <>
            <Button variant="primary" >
                new button
      </Button>
           
        </>
    );
}
