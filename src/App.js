import logo from './logo.svg';
import './App.css';
import Enroll from './components/EnrollComponent';
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
      <div>
      <h1>helloj</h1>
      <Enroll studentdata={this.state.studentdata}/>
      </div>
    );
  }
}

export default App;
