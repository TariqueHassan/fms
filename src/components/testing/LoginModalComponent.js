import React, { Component,useState } from "react";
import LoginModal from "react-login-modal";
import {handleSignup} from "react-login-modal";
import handleLogin from "react-login-modal";

import { Navbar, Button, NavbarBrand } from 'reactstrap'

function LoginModalComponent () {
 
    handleSignup = (username, email, password) => {};
    handleLogin = (username, password) => {}
   
    return (
        <>
        <Button >open login modal</Button>
        <LoginModal
        handleSignup={this.handleSignup}
        handleLogin={this.handleLogin}
      />
      </>
    );
  
}

export default LoginModalComponent;