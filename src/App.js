import React, {Component} from 'react';
import './styles/tailwind.css';
import  Main  from "./components/main";
import  About from "./components/aboutus";
import  Services from "./components/ourservices";
import  Expertise from "./components/ourexperties";
import  Contact from "./components/contact";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init()
  }
  render(){
    return (
      <div className="App overflow-hidden text-center">
        <Main />
        <About />
        <Services />
        <Expertise />
        <Contact />
      </div>
    );
  }
}

export default App;
