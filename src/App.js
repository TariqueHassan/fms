import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Enroll from './components/testing/EnrollComponent';
import Sidebar from './components/sidebar';
import LoginModalComponent from './components/testing/LoginModalComponent';
import { Component } from 'react';

import { STUDENTDATA } from './shared/studentsdata';
import { SIDEBARDATA } from './shared/sidebardata';
import AppAssistant from './components/AppAssistant';
function App() {


  return (
    <div>
      <AppAssistant />
    </div>
  );
}

export default App;
