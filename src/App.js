import logo from './logo.svg';
import './App.css';
import Enroll from './components/EnrollComponent';
import Sidebar from './components/sidebar';
import NavbarComponent from './components/NavbarComponent';
import LoginModalComponent from './components/testing/LoginModalComponent';
import { Component } from 'react';
import Header from './components/Header/Header';

import {STUDENTDATA} from './shared/studentsdata'; 
import {SIDEBARDATA} from './shared/sidebardata'; 
function App(){


    return (
      
      <div >
      <NavbarComponent/>
      {/* <Sidebar/> */}
      <div className="">
      <Header />
      </div>
      {/* <Enroll studentdata={STUDENTDATA}/> */}
      {/* < LoginModalComponent/> */}
      </div>
    );
  }

export default App;
