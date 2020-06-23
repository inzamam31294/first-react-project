import React, {Component} from 'react';
import '../styles/contactus.css';
import DB from './FirebaseConfigs'

class Contact extends Component {
     submit(e) {
      const timestamp = new Date();
       e.preventDefault();
        // if (this.$refs.form.validate()) {
        //   this.snackbar = true;
        //   const timestamp = new Date();
        //   const formData = {
        //     name: this.name,
        //     email: this.email,
        //     subject: this.subject,
        //     message: this.message,
        //     timestamp
        //   };
        //   DB.collection("contactForm")
        //     .add(formData)
        //     .then(() => {
        //       alert("Your Email Has Been Sent!");
        //     });
        //   this.$refs.form.reset();
        // }
      }
    render(){
      return (
        <div className="index-9-cont">
              <div className="index-9-headertext">
                <div
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
                >
                  {/* <v-img src="/arrow.png" contain className="arrow-class" /> */}
                </div>
                <h1
                  data-aos-duration="2000"
                  data-aos-easing="ease"
                  data-aos="fade-right"
                  className="contact-us uppercase"
                >
                  contact<span className="font-bold"> us</span>
                </h1>
              </div>
              <div className="text-u-header pt-0">
                Drop us a line and We'll get back to you as soon as we can
              </div>
              <form
              id="form"
                className="w-full max-w-sm"
              >
                    <div pb-0 pt-5 lg4>
                      <input
                        id="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Name"
                        type="text"
                      >
                      </input>
                    </div>
                    <div pb-0 pt-5 lg4>
                      <input
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Email"
                        type="text"
                      >
                      </input>
                    </div>
                    <div pb-0 pt-5 lg4>
                      <input
                        id="subject"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Subject"
                        type="text"
                      >
                      </input>
                      </div>
                    <div pb-0 xs12>
                      <textarea
                        id="message"
                        rows="10"
                        cols="37"
                        type="text"
                        placeholder="Enter Your Message"
                      ></textarea>
                    </div>
                    <div>
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          onClick={this.submit}
                        >
                          {/* <i size="40px">mdi-email-outline</i> */} Submit
                        </button>
                      </div>
                      </form>
                      </div>
               
      );
    }
  }
 

export default Contact;
