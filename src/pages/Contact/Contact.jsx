import { toast } from "react-toastify";
import "./Contact.scss";
import { useState, useRef } from "react";
import isEmail from 'validator/lib/isEmail';
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ message, setMessage ] = useState("");

    // const [emailTouched, setEmailTouched] = useState(false);

    // const handleEmailBlur = () => {
    //     setEmailTouched(true);
    //     isEmailValid(email); // Validate only when field loses focus
    // };

    // Function handles name change in state variable
    const handleChangeName = (event) => {
        const { value } = event.target;

        setName(value);
        isNameValid(value);
    }

    // Function handles email change in state variable
    const handleChangeEmail = (event) => {
        const { value } = event.target;

        setEmail(value);
        isEmailValid(value);

    }

        // Function handles subject change in state variable
    const handleChangeSubject = (event) => {
        const { value } = event.target;

        setSubject(value);
        isSubjectValid(value);
    }

    // Function handles message change in state variable
    const handleChangeMessage = (event) => {
        const { value } = event.target;

        setMessage(value);
        isMessageValid(value);
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
        // if (!emailTouched) return false;

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
            return
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


    return (
        <section className="contact" id="Contact">
            <div className="contact__container">
                <div className="contact__info">
                    <h1 className="contact__title">Get in Touch</h1>
                    <p className="contact__text">
                        I’m always open to discussing product design work or partnership opportunities.
                    </p>

                    <div className="contact__details">
                        <p className="contact__details-text">📍 St. John's, Canada</p>
                        <p className="contact__details-text">📞 +1 (709) 219-7797</p>
                        <p className="contact__details-text">✉️ belloabiodun17@gmail.com</p>
                    </div>

                    <div className="contact__links">
                        <a className="contact__links-link" href="https://github.com/Magret1730" target="_blank" rel="noopener">GitHub</a>
                        <a className="contact__links-link" href="https://linkedin.com/in/oyedele-abiodun/" target="_blank" rel="noopener">LinkedIn</a>
                    </div>
                </div>

                <form className="contact__form" ref={form} onSubmit={handleSubmit}>
                    <div className="contact__form-group">
                        <label className="contact__form-group-label" >Full Name</label>
                        <input
                            className="contact__form-group-input"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={handleChangeName}
                        />
                    </div>

                    <div className="contact__form-group">
                        <label className="contact__form-group-label" >Email</label>
                        <input
                            className="contact__form-group-input"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={handleChangeEmail}
                            // onBlur={handleEmailBlur}
                            // onMouseOut={handleEmailBlur}
                            // on={handleEmailBlur}
                        />
                    </div>

                    <div className="contact__form-group">
                        <label className="contact__form-group-label" >Subject</label>
                        <input
                            className="contact__form-group-input"
                            name="subject"
                            type="text"
                            placeholder="Let's build something amazing"
                            value={subject}
                            onChange={handleChangeSubject}
                        />
                    </div>

                    <div className="contact__form-group">
                        <label className="contact__form-group-label" >Message</label>
                        <textarea
                            className="contact__form-group-textarea"
                            name="message"
                            placeholder="Type your message here..."
                            value={message}
                            onChange={handleChangeMessage}
                        />
                    </div>

                    <button type="submit" className="contact__submit">Get in touch</button>
                </form>
            </div>
        </section>
    )
}
