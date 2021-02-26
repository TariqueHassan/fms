import logo from './logo.svg';
import './App.css';
import Enroll from './components/EnrollComponent';
import Sidebar from './components/sidebar';
import {Navbar, NavbarBrand} from 'reactstrap'
import { Component } from 'react';

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
        
      <Sidebar sidebardata={this.state.sidebardata}/>
      <Enroll studentdata={this.state.studentdata}/>
      </div>
    );
  }
}

export default App;
