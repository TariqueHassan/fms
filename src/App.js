import logo from './logo.svg';
import './App.css';
import Enroll from './components/EnrollComponent';
import {Navbar, NavbarBrand} from 'reactstrap'
import {STUDENTDATA} from './shared/studentsdata'; 
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      studentdata:STUDENTDATA
    };
  }

  render(){
    return (
      
      <div className="App">
      <Navbar color="dark primary mb-3">
        <div className="container">
          <NavbarBrand href="/"> FYP Management System

          </NavbarBrand>

        </div>

      </Navbar>
       

      <Enroll studentdata={this.state.studentdata}/>
      </div>
    );
  }
}

export default App;
