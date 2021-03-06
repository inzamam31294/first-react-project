import React, {Component} from 'react';
import '../styles/ourexpertise.css';

class Expertise extends Component {
    render(){
      return (
        <div className="index-4-cont flex flex-col h-screen justify-center ">
              <div className="index-4-headertext text-center">
                <div
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="easeInOut"
                  data-aos="fade-right"
                >
                  {/* <img src="/arrow.png" contain className="arrow-class" /> */}
                </div>
                <h1
                  className="our-expertise uppercase"
                  data-aos-duration="2000"
                  data-aos-easing="easeInOut"
                  data-aos="fade-right"
                >
                  our<span className="font-bold"> expertise</span>
                </h1>
              </div>
              <div className="index-4-cont2 flex grid grid-cols-3 gap-3">
                    <div
                      data-aos-delay="0"
                      data-aos-duration="500"
                      data-aos-easing="easeInOut"
                      data-aos="fade-up"
                      className=""
                    >
                      <div className="index-4-c1-title">
                        {/* <div className="icon-class">
                          <v-img src="/web-developement.png" contain />
                        </div> */}
                        &nbsp;web
                        <span className=""> &nbsp;development</span>
                      </div>
                      <p className="index-4-c1-text flex text-left justify-center">
                        Node.js<br />
                        React, Vue, Ember<br />
                        PHP, Symphony, Laravel<br />
                        MySQL, PostgreSQL, MonogoDB<br />
                        Elastic
                      </p>
                    </div>
                    <div
                      data-aos-delay="250"
                      data-aos-duration="500"
                      data-aos-easing="easeInOut"
                      data-aos="fade-up"
                      className=""
                    >
                      <div className="index-4-c2-title">
                        {/* <div className="icon-class">
                          <v-img src="/mobile-developement.png" contain />
                        </div> */}
                        mobile
                        <span className=""> &nbsp;development</span>
                      </div>
                      <p className="index-4-c2-text flex text-left justify-center">
                        React Native/Android Studio<br />
                        Swift<br />
                        IOS<br />
                        Java<br />
                     
                      </p>
                    </div>
                    <div
                      data-aos-delay="500"
                      data-aos-duration="500"
                      data-aos-easing="easeInOut"
                      data-aos="fade-up"
                      className=""
                    >
                      <div className="index-4-c3-title">
                        {/* <div className="icon-class">
                          <v-img src="/machine-learning.png" contain />
                        </div> */}
                        &nbsp;machine
                        <span className=""> &nbsp;learning</span>
                      </div>
                      <p className="index-4-c3-text flex text-left justify-center">
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