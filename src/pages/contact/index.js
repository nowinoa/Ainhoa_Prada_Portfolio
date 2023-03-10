import "./index.css";
import ContactModal from "../../components/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactUs } from "../../components/form";

function Contact() {
  const memoji_desktop = require("../home/img/63256.jpg");
  const body = < ContactUs />;
  return (
    <div className="contact">
      <div className=" box contact-form">
        {/* <button id="modal-opener">Contact Form</button>  */}
        <ContactModal
         title= 'Contact Form'
         header='Contat Ainhoa Prada'
          body={body}
        />
      </div>
      <div className=" box cv">
        <img src={memoji_desktop} alt="Ainhoa Prada Developer" />
        <button className="btn-cv">Curriculum PDF</button>
      </div>
      <div className=" box c-github">
      <a
          className="p pages"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nowinoa"
        ><FontAwesomeIcon
          icon="fa-brands fa-github"
          className="github-icon"
          style={{ width: 100, height: 100 }}
        /></a>
      </div>
      <div className=" box c-linkedin ">
      <a
          className="p pages"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ainhoa-prada-498913259/"
        ><FontAwesomeIcon
          icon="fa-brands fa-linkedin"
          className="linkedin-icon"
          style={{ color: "#77ffcb", width: 100, height: 100 }}
        /></a>
      </div>
      <div className=" box email">
      <button >
      <FontAwesomeIcon
          icon="fa-solid fa-envelope"
          className="email-icon"
          style={{ width: 100, height: 100 }}
        />
      </button>
        
      </div>
    </div>
  );
}
export default Contact;
