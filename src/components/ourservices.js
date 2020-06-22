import React, {Component} from 'react';
import '../styles/ourservices.css';
import image from '../assets/arrow.png'

class Services extends Component {
    render(){
      return (
          <div className="h-screen flex flex-col justify-center">
              <div className="index-3-headertext text-center">
                <h1
                  className="our-services uppercase"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
                >
                     <div
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
                  className="inline-block"
                >
                  <img src={image} className="arrow-class" alt={image} />
                </div> 
                our<span className="font-bold"> services</span>
                </h1>
              </div>
              <div className="flex grid grid-cols-3 gap-3">
                      <div
                        className="our-service-cards flex-grow bg-accent"
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
                          <div
                            className="hover-text white--text bg-secondary"
                          >
                            <div className="text">
                              <span className="upper-text">web & app development</span>
                              <div className="under-text">
                                Our full-stack developers
                                & agile experts combine the tech,
                                the talent & the processes
                                to build your web & mobile
                                applications.
                              </div>
                            </div>
                          </div>
                      </div>
                      <div
                        className="our-service-cards flex-grow bg-secondary"
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
                          <div                     
                            className="hover-text white--text bg-tertiary"
                          >
                            <div className="text">
                              <span className="upper-text">digital media</span>
                              <div className="under-text">
                                We create impactful
                                experiences for our audience
                                through audience intelligence
                                & sophisticated targeting.
                              </div>
                            </div>
                          </div>              
                           </div>  
                      <div
                        className="our-service-cards flex-grow bg-tertiary"
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
                          <div
                            className="hover-text white--text bg-accent"
                          >
                            <div className="text">
                              <span className="upper-text">graphic design</span>
                              <div className="under-text">
                                We convert pixel-perfect
                                designs into retina-ready codes
                                for our clients within the
                                decided timelines.
                              </div>
                            </div>
                          </div>
                      </div>
                      </div>
                </div>
      );
    }
  }
 

export default Services;