import logo from './logo.svg';
import './App.css';
import Enroll from './components/testing/EnrollComponent';
import Sidebar from './components/sidebar';
import NavbarComponent from './components/Home/NavbarComponent';
import LoginModalComponent from './components/testing/LoginModalComponent';
import { Component } from 'react';
import Header from './components/Home/Header';

import {STUDENTDATA} from './shared/studentsdata'; 
import {SIDEBARDATA} from './shared/sidebardata'; 
import { MainPage } from './components/MainPage';
function App(){


    return (
      
      <div >
      <NavbarComponent/>
      
      {/* <Sidebar/> */}
      <div >
<MainPage />
      {/* <Header /> */}
      </div>
      {/* <Enroll studentdata={STUDENTDATA}/> */}
      

      </div>
    );
  }

export default App;
