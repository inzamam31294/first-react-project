import React, {Component} from 'react';
import '../styles/ourservices.css';

class Services extends Component {
    render(){
      return (
          <div className="h-screen flex flex-col justify-center">
              <div className="index-3-headertext text-center">
                <div
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
                >
                  {/* <v-img src="/arrow.png" contain className="arrow-class" /> */}
                </div>
                <h1
                  className="our-services uppercase"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
                >
                  our<span className="font-bold"> services</span>
                </h1>
              </div>
              <div className="flex">
                      <div
                        className="our-service-cards flex-grow"
                      >
                        <div
                          className="index-3-c1-title uppercase"
                        >
                          web & app<br />
                          development
                        </div>
                        <p className="index-3-c-text"
                          >Software Solutions For Needs
                          </p>
                          {/* <div
                        
                            className="d white--text"
                          >
                            <div className="hover-text">
                              <span className="upper-text">web & app development</span>
                              <div className="under-text">
                                Our full-stack developers<br />
                                & agile experts combine the tech,<br />
                                the talent & the processes<br />
                                to build your web & mobile<br />
                                applications.
                              </div>
                            </div>
                          </div> */}
                      </div>
                      <div
                        className="our-service-cards flex-grow"
                      >
                        <div
                          className="index-3-c2-title uppercase"
                        >
                          digital<br />
                          media
                        </div>
                        <p className="index-3-c-text"
                          >Digital Reputation Management
                          </p>
                          {/* <div                     
                            className="d"
                          >
                            <div className="hover-text">
                              <span className="upper-text">digital media</span>
                              <div className="under-text">
                                We create impactful<br />
                                experiences for our audience<br />
                                through audience intelligence<br />
                                & sophisticated targeting.
                              </div>
                            </div>
                          </div>               */}
                           </div>  
                      <div
                        className="our-service-cards flex-grow"
                      >
                        <div
                          className="index-3-c3-title uppercase"
                        >
                          graphic<br />
                          design
                        </div>
                        <p className="index-3-c-text"
                          >Creative Material For Branding
                          </p>
                     
                          {/* <div
                        
                            className="white--text"
                          >
                            <div className="hover-text">
                              <span className="upper-text">graphic design</span>
                              <div className="under-text">
                                We convert pixel-perfect<br />
                                designs into retina-ready codes<br />
                                for our clients within the<br />
                                decided timelines.
                              </div>
                            </div>
                          </div> */}
                      </div>
                      </div>
                </div>
      );
    }
  }
 

export default Services;