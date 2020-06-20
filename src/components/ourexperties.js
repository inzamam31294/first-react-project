import React, {Component} from 'react';
import '../styles/ourexpertise.css';

class Expertise extends Component {
    render(){
      return (
        <div className="index-4-cont flex flex-col h-screen justify-center">
              <div className="index-4-headertext text-center">
                <div
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
                >
                  {/* <img src="/arrow.png" contain className="arrow-class" /> */}
                </div>
                <h1
                  className="our-expertise uppercase"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
                >
                  our<span className="font-bold"> expertise</span>
                </h1>
              </div>
              <div className="index-4-cont2 flex">
                    <div
                      data-aos-delay="0"
                      data-aos-duration="2000"
                      data-aos-easing="ease"
                      data-aos="fade-up"
                      className="flex-grow"
                    >
                      <div className="index-4-c1-title">
                        {/* <div className="icon-class">
                          <v-img src="/web-developement.png" contain />
                        </div> */}
                        &nbsp;web
                        <span className=""> &nbsp;development</span>
                      </div>
                      <p className="index-4-c1-text ">
                        Node.js<br />
                        React, Vue, Ember<br />
                        PHP, Symphony, Laravel<br />
                        MySQL, PostgreSQL, MonogoDB<br />
                        Elastic
                      </p>
                    </div>
                    <div
                      data-aos-delay="250"
                      data-aos-duration="2000"
                      data-aos-easing="ease"
                      data-aos="fade-up"
                      className="flex-grow"
                    >
                      <div className="index-4-c2-title">
                        {/* <div className="icon-class">
                          <v-img src="/mobile-developement.png" contain />
                        </div> */}
                        mobile
                        <span className=""> &nbsp;development</span>
                      </div>
                      <p className="index-4-c2-text">
                        React Native<br />
                        Swift<br />
                        IOS<br />
                        Java<br />
                        Android
                      </p>
                    </div>
                    <div
                      data-aos-delay="500"
                      data-aos-duration="2000"
                      data-aos-easing="ease"
                      data-aos="fade-up"
                      className="flex-grow"
                    >
                      <div className="index-4-c3-title">
                        {/* <div className="icon-class">
                          <v-img src="/machine-learning.png" contain />
                        </div> */}
                        &nbsp;machine
                        <span className=""> &nbsp;learning</span>
                      </div>
                      <p className="index-4-c3-text">
                        Python<br />
                        Natural Language Processing
                      </p>
                    </div>
              </div>
        </div>
      );
    }
  }
 

export default Expertise;