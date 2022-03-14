import React, { Component } from "react";


// import ReactGA from "react-ga";
// import $ from "jquery";
import './App.css';
import Header from './components/Header';
import About from './components/About';
import AboutMore from './components/AboutMore';
import Skill from './components/Skill';
import Experience from './components/Experience';
import MProjects from "./components/MProjects";
import Footer from "./components/Footer";
import Education from "./components/Education";

class App extends Component{



  render(){
    return(
      
      <div className="App">
      
      <Header/>
      <About/>
      <AboutMore/>
      <Skill></Skill>
      <Experience></Experience>
     <MProjects/>
     <Education/>
     
  
<Footer/>

     </div>

    );
  }
}
export default App;
