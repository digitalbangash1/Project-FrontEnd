import './ContactUs.css'
import emailjs from "emailjs-com";

/* Emails JS function er modificeret ud fra https://github.com/Michaeldremy/EmailJs-Youtube-Tutorial */

export default function ContactUs() {

  // Connection for Emailjs.

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_7jkaecf', 'template_drk0a8l', e.target, '3v-MlhA1NCWoz2z6c')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (<div className="ContactUs" id="contactus">
    <div>
      <h3 id="header">Do you have any suggestions?</h3>
      <div id="text">We are ready to work on your suggestions of any complexity, whether it’s about the courses stated above or you want us to list new courses.</div>
    </div>
    <div className="container">
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Your Name*" name="name" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input type="email" className="form-control" placeholder="Email Address*" name="email" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Subject*" name="subject" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea className="form-control" id="" cols="30" row="8" placeholder="Your message" name="message"></textarea>
          </div>
          <div id="text"><mark class="red">*</mark> indicates a required field</div>
          <div className="col-8 pt-3 mx-auto">
            <input type="submit" className="btn btn-info" id="MsgBtn" value="Submit"></input>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

