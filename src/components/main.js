import React, {Component} from 'react';
import '../styles/main.css';
import '../scripts/TextScramble';

class Main extends Component {
    render(){
      return (
            <div className="main-cont bg-accent h-screen flex flex-col justify-center items-center">
                    <div>
                    <div className="main-heading">
                        <div className="header-text">
                        <h1 className="p-class">
                            <div className="text-1">
                            your
                            </div>
                            <div className="text-2">
                            partner
                            </div>
                            <div className="text-3">
                            for
                            </div>
                            <div className="text-4">
                            all
                            </div>
                            <br />
                            <div className="text-5">
                            things
                            </div>
                            <div className="text-6">
                            digital
                            </div>
                        </h1>
                        </div>
                        <div className="u-header">
                            <p className="text-u-header1">we are an enthusiastic team of</p>
                            <div className="text-container">
                            <div
                                className="text-u-header2"
                            ></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
      );
    }
  }
 

export default Main;