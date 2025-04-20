import "./Contact.scss";
import { useState } from "react";

export default function Contact() {
    return (
        <section>
            <section>
                <h1>Contact</h1>
                <div>Description</div>
                <section>
                    Links like gmail, github,
                    LinkedIn, Phone Number, Location
                </section>
            </section>

            <form>
                <label> Full Name
                    <input type="text" />
                </label>

                <label>Your Email
                    <input type="text" />
                </label>

                <label>Subject
                    <input type="text" />
                </label>

                <label>Message
                    <input type="text" />
                </label>

                <button>Get in touch</button>
            </form>
        </section>
    )
}
