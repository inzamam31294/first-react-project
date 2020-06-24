import React, {Component} from 'react';
import '../styles/contactus.css';
import DB from './FirebaseConfigs'
// import firebaseConf from './Firebase';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef()
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm() {
    this.formRef.current.reset();
  }

  // componentWillMount() {
  //   let formRef = DB.collection("contactForm").orderByKey().limitToLast(6);
  //   formRef.on('child_added', snapshot => {
  //     const { name, email, subject, message, time } = snapshot.val();
  //     const data = { name, email, subject, message, time };
  //     this.setState({ form: [data].concat(this.state.form) });
  //   })
  // }

  sendMessage(e) {
    const timeStamp = new Date();
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      subject: this.inputSubject.value,
      message: this.textAreaMessage.value,
      time: timeStamp
    };
    if (params.name && params.email && params.subject && params.message && params.time) {
      DB.collection("contactForm").add(params).then(() => {
        this.showAlert('success', 'Your message was sent successfull');
      }).catch(() => {
        this.showAlert('danger', 'Your message could not be sent');
      });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Please fill the form');
    };
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
             onSubmit={this.sendMessage.bind(this)} ref={this.formRef}
                className="w-full max-w-sm"
              >
                    <div>
                      <input
                        id="name"
                        ref={name => this.inputName = name}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Name"
                        type="text"
                      >
                      </input>
                    </div>
                    <div>
                      <input
                        id="email"
                        ref={email => this.inputEmail = email}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Email"
                        type="email"
                      >
                      </input>
                    </div>
                    <div>
                      <input
                        id="subject"
                        ref={subject => this.inputSubject = subject}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Subject"
                        type="text"
                      >
                      </input>
                      </div>
                    <div>
                      <textarea
                        id="message"
                        rows="10"
                        cols="37"
                        type="text"
                        ref={message => this.textAreaMessage = message}
                        placeholder="Enter Your Message"
                      ></textarea>
                    </div>
                    <div>
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          {/* <i size="40px">mdi-email-outline</i> */} Submit
                        </button>
                      </div>
                      </form>
                      <div>
                      {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
                      </div>
                      </div>
                      
               
      );
    }
  }
 

export default Contact;
