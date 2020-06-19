import React, {Component} from 'react';
import '../styles/aboutus.css';

class About extends Component {
    render(){
      return (
          <div className="cont text-center">
            <div
              className="index-2-heading h-screen flex flex-col text-center justify-center items-center"
            >
                  {/* <img src="" className="arrow-class" alt="" /> */}
                <h1
                  className="about-us uppercase"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
                >
                  about<span className="font-bold"> us</span>
                </h1>
              <p
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos-easing="ease"
                data-aos="fade-up"
                className="index-2-uheader"
                >Our work is bound to be as creative and fresh to the eye as is mint
                to a mojito glass. We create smart code, beautiful designs, and
                fusion of what adds a minty touch to your needs. We cultivate an
                engaging culture in our daily tech routine to leave you with an
                unparalleled experience.Our work is bound to be as creative and
                fresh to the eye as is mint to a mojito glass. We create smart code,
                beautiful designs, and fusion of what adds a minty touch to your
                needs. We cultivate an engaging culture in our daily tech routine to
                leave you with an unparalleled experience.
              </p>
            </div>
          </div>
      );
    }
  }
 

export default About;