import React, {Component} from 'react';
import './styles/tailwind.css';
import  Main  from "./components/main";

class App extends Component {
  render(){
    return (
      <div className="App overflow-hidden text-center">
        <Main />
      </div>
    );
  }
}

export default App;
