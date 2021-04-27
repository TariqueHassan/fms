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
class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      studentdata:STUDENTDATA,
      sidebardata:SIDEBARDATA
    };
  }

  render(){
    return (
      
      <div className="App">
      <NavbarComponent/>
      {/* <Sidebar/> */}
      <Header />

      {/* <Enroll studentdata={this.state.studentdata}/> */}
      {/* < LoginModalComponent/> */}
      </div>
    );
  }
}

export default App;
