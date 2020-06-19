import React, {Component} from 'react';
import './styles/tailwind.css';
import  Main  from "./components/main";
import  About from "./components/aboutus";
import  Services from "./components/ourservices";

class App extends Component {
  render(){
    return (
      <div className="App overflow-hidden text-center">
        <Main />
        <About />
        <Services />
      </div>
    );
  }
}

export default App;
