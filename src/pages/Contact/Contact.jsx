import { toast } from "react-toastify";
import "./Contact.scss";
import { useState, useRef } from "react";
import isEmail from 'validator/lib/isEmail';
import emailjs from "@emailjs/browser";
import Icon from "../../components/Icon/Icon";
import { FaGithub, FaLinkedinIn, FaPhoneAlt} from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import posthog from "posthog-js";
import { useEffect } from "react";

export default function Contact({isDark}) {
  const form = useRef();

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ subject, setSubject ] = useState("");
  const [ message, setMessage ] = useState("");

  useEffect(() => {
    posthog.capture('contact_page_viewed', {
      page: window.location.pathname,
    });
  }, []);

  // Function handles name change in state variable
  const handleChangeName = (event) => {
    const { value } = event.target;

    setName(value);
    // isNameValid(value);
  }

  // Function handles email change in state variable
  const handleChangeEmail = (event) => {
    const { value } = event.target;

    setEmail(value);
    // isEmailValid(value);
  }

  // Function handles subject change in state variable
  const handleChangeSubject = (event) => {
    const { value } = event.target;

    setSubject(value);
    // isSubjectValid(value);
  }

  // Function handles message change in state variable
  const handleChangeMessage = (event) => {
    const { value } = event.target;

    setMessage(value);
    // isMessageValid(value);
  }

  // Function validates change of name
  const isNameValid = (name) => {
    if (!name) {
      toast.error("Name is required!!!");
      return false;
    } else if (name.length < 2) {
      toast.error("Name must be at least two characters long!!!");
      return false;
    } else {
      return true;
    }
  }

  // Function validates change of email
  const isEmailValid = (email) => {
    if (!email) {
      toast.error("Email is required!!!");
      return false;
    } else if (!isEmail(email)) {
      toast.error("Invalid email");
      return false;
    } else {
      return true;
    }
  }

  // Function validates change of email
  const isSubjectValid = (subject) => {
    if (!subject) {
      toast.error("Subject is required!!!");
      return false;
    } else if (subject.length > 50 ) {
      toast.error("Subject must be under 50 characters.");
      return false;
    } else {
      return true;
    }
  }

  // Function validates change of email
  const isMessageValid = (message) => {
    if (!message) {
      toast.error("Message is required!!!");
      return false;
    } else {
      return true;
    }
  }

  // Function vaidates the form
  const isFormValid = () => {
    if (!isNameValid(name)) {
      return false;
    }

    if (!isEmailValid(email)) {
      return false;
    }

    if (!isSubjectValid(subject)) {
      return false;
    }

    if (!isMessageValid(message)) {
      return false;
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    try {
      await emailjs.sendForm (
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      // Clear form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Message not sent. Please try again.");
      console.error("EmailJS error:", error);
    }
  }

  const icons = [
    {
      component: <FaGithub />,
      link: "https://github.com/Magret1730",
      style: "hero__social fade-in-left",
      linkStyle: "hero__social-link"
    },
    {
      component: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/oyedele-abiodun/",
      style: "hero__social fade-in-left",
      linkStyle: "hero__social-link"
    }
  ];

  return (
    <section className="contact" id="Contact">
      <div className="contact__container">
        <div className="contact__info">
          <h1 className="contact__title fade-in-left">Get in Touch</h1>
          <p className="contact__text fade-in-left">
            I’m always open to discussing software development projects, collaborations, or freelance opportunities.
          </p>

          <div className="contact__details">
            <p className="contact__details-text contact__details-link fade-in-left">
              <IoLocationOutline /> Mount Pearl, NL, Canada
            </p>
            <p className="contact__details-text">
              <a href="tel:+17092197797" className="contact__details-link contact__details-link--hover fade-in-left">
                <FaPhoneAlt /> +1 (709) 219-7797
              </a>
            </p>
            <p className="contact__details-text">
              <a href="mailto:belloabiodun17@gmail.com" className="contact__details-link contact__details-link--hover fade-in-left">
                <MdOutlineEmail />  belloabiodun17@gmail.com
              </a>
            </p>
          </div>

          <div className="contact__links fade-in-left">
            {icons.map((icon, index) => (
              <Icon
                key={index}
                {...icon}
                onClick={() => {
                  posthog.capture('contact_icon_clicked', {
                    icon_name: icon.component.type.displayName || icon.component.type.name,
                    location: 'contact_section',
                  });
                }}
              />
            ))}
          </div>
        </div>

        <form className="contact__form fade-in-right" ref={form} onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label className={`contact__form-group-label ${isDark ? 'contact__form-group-label--dark' : ''}`} >Full Name</label>
            <input
              className={`contact__form-group-input ${isDark ? 'contact__form-group-input--dark' : ''}`}
              name="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={handleChangeName}
              onClick={() => {
                posthog.capture('form_field_clicked', {
                  field_name: 'Full Name',
                  location: 'contact_section',
                });
              }}
            />
          </div>

          <div className="contact__form-group">
            <label className={`contact__form-group-label ${isDark ? 'contact__form-group-label--dark' : ''}`} >Email</label>
            <input
              className={`contact__form-group-input ${isDark ? 'contact__form-group-input--dark' : ''}`}
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={handleChangeEmail}
              onClick={() => {
                posthog.capture('form_field_clicked', {
                  field_name: 'Email',
                  location: 'contact_section',
                });
              }}
            />
          </div>

          <div className="contact__form-group">
            <label className={`contact__form-group-label ${isDark ? 'contact__form-group-label--dark' : ''}`} >Subject</label>
            <input
              className={`contact__form-group-input ${isDark ? 'contact__form-group-input--dark' : ''}`}
              name="subject"
              type="text"
              placeholder="Let's build something amazing"
              value={subject}
              onChange={handleChangeSubject}
              onClick={() => {
                posthog.capture('form_field_clicked', {
                  field_name: 'Subject',
                  location: 'contact_section',
                });
              }}
            />
          </div>

          <div className="contact__form-group">
            <label className={`contact__form-group-label ${isDark ? 'contact__form-group-label--dark' : ''}`} >Message</label>
            <textarea
              className={`contact__form-group-textarea ${isDark ? 'contact__form-group-textarea--dark' : ''}`}
              name="message"
              placeholder="Type your message here..."
              value={message}
              onChange={handleChangeMessage}
              onClick={() => {
                posthog.capture('form_field_clicked', {
                  field_name: 'Message',
                  location: 'contact_section',
                });
              }}
            />
          </div>

          <button
            type="submit"
            className="contact__submit"
            onClick={() => {
              posthog.capture('form_botton_clicked', {
                button_name: 'Get in touch',
                location: 'contact_section',
              });
            }}
          >
            Get in touch
          </button>
        </form>
      </div>
    </section>
  )
}
