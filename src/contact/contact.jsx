import "./contact.css"


function Contact() {

    return(
        <div className="contact-section">
        <h1>Contact Me</h1>
        <div className="subscribe-form">
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
        <div className="message-form">
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    )
}

export default Contact;