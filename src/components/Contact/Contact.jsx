import { toast } from "react-toastify";
import "./Contact.scss";
import { useState } from "react";
import isEmail from 'validator/lib/isEmail';

export default function Contact() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ message, setMessage ] = useState("");

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
        } else if (subject < 50 ) {
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

        try {
            if (isFormValid()) {
                return true
            }
        } catch (error) {
            console.error("Email not sent:", error.message);
            toast.error(error.message);
        }
    } 


    return (
        <section className="contact" id="Contact">
            <div className="contact__container">
                <div className="contact__info">
                    <h1 className="contact__title">Let’s Work Together</h1>
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

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group">
                        <label className="contact__form-group-label" >Full Name</label>
                        <input
                            className="contact__form-group-input"
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
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>

                    <div className="contact__form-group">
                        <label className="contact__form-group-label" >Subject</label>
                        <input
                            className="contact__form-group-input"
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
                            placeholder="Type your message here..."
                            value={message}
                            onChange={handleChangeMessage}
                        />
                    </div>

                    <button type="submit" className="contact__submit">Send Message</button>
                </form>
            </div>


            {/* <section className="contact__container">
                <div className="contact__info">
                    <h1>Get in Touch</h1>
                    <p>Feel free to reach out for collaborations or just a friendly hello.</p>
                    
                    <div className="contact__links">
                        <a href="mailto:belloabiodun17@email.com" target="_blank" rel="noopener">
                            <span>📧</span> belloabiodun17@email.com
                        </a>
                        <a href="https://github.com/Magret1730" target="_blank" rel="noopener">
                            <span>💻</span> github.com/Magret1730
                        </a>
                        <a href="https://linkedin.com/in/oyedele-abiodun/" target="_blank" rel="noopener">
                            <span>🔗</span> linkedin.com/in/oyedele-abiodun
                        </a>
                        <div className="contact__detail">
                            <span>📍</span> St. John's, Canada
                        </div>
                        <div className="contact__detail">
                            <span>📞</span> +1 (709) 219-7797
                        </div>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="form__group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form__group">
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Subject"
                            maxLength="50"
                            required
                        />
                    </div>
                    <div className="form__group">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message..."
                            rows="5"
                            required
                        />
                    </div>
                    <button type="submit" className="submit__button">
                        Send Message
                    </button>
                </form>
            </section> */}


            {/* <section className="contact__box">
                <h1 className="contact__title">Get in Touch</h1>
                <div className="contact__description">
                    Feel free to reach out for collaborations or just a friendly hello.
                </div>
                <section className="contact__links">
                        <a href="mailto:belloabiodun17@email.com" target="_blank" rel="noopener">
                            📧 Email
                        </a>
                        <a href="https://github.com/Magret1730" target="_blank" rel="noopener">
                            💻 GitHub
                        </a>
                        <a href="https://linkedin.com/in/oyedele-abiodun/" target="_blank" rel="noopener">
                            🔗 LinkedIn
                        </a>
                </section>
            </section>

            <form className="contact__form" onSubmit={handleSubmit}>
                <label> Full Name
                    <input
                        type="text"
                        className=""
                        placeholder="Enter name "
                        onChange={handleChangeName}
                        value={name}
                    />
                </label>

                <label>Your Email
                    <input
                        type="text"
                        className=""
                        placeholder="Enter Email"
                        onChange={handleChangeEmail}
                        value={email}
                    />
                </label>

                <label>Subject
                    <input
                        type="text"
                        className=""
                        placeholder="Enter Email Subject"
                        onChange={handleChangeSubject}
                        value={subject}
                    />
                </label>

                <label>Message
                    <input
                        type="text"
                        className=""
                        placeholder="Enter message"
                        onChange={handleChangeMessage}
                        value={message}
                    />
                </label>

                <p>📍 St. John's, Canada</p>
                <p>📞 +1 (709) 219-7797</p>

                <button className="contact__submit">Get in touch</button>
            </form> */}
        </section>
    )
}
