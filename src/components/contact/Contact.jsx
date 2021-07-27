import "./contact.scss"
import emailjs from 'emailjs-com';
import React, { useState } from "react";
import validator from 'validator'
import { ifMobile, ResponsiveButton, ResponsiveHeader } from "../../utils/mobile";

const Result = () => {
    return (
        <p>Your message has been successfully sent. I will get back to you ASAP:)</p>
    )
}

export default function Contact() {
    const [result, showResult] = useState(false);
    const [email, setEmail] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cfrdroh', 'template_lysn5f8', e.target, 'user_86lQIU3yicGAlhSBrWhIx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        showResult(true);
    }


    return (
        <div className={ifMobile("contact")} id="contact">
            <div className="header">
                <ResponsiveHeader title="Contact Me" />
            </div>
            <div className="messageBody">
                <form action="" onSubmit={sendEmail}>
                    <div className="formWord">
                        <span>Name</span>
                        <br />
                        <input className="inputField" name="name" required input="text" />
                        <br />
                        <span>Email</span>
                        <br />
                        <input className="inputField" name="email" required input="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="formWord">
                        <span>Message</span>
                        <br />
                        <textarea name="message" required></textarea>
                        <br />

                    </div>
                    {validator.isEmail(email) ?
                        <ResponsiveButton color="primary" type="submit" title="SUBMIT" /> :
                        <div className="invalid-email">
                            <ResponsiveButton color="primary" type="button" title="SUBMIT" />
                            <h4>Please enter a valid email :)</h4>
                        </div>
                    }
                    <div className="row">
                        {result ? <Result /> : null}
                    </div>
                </form>
            </div>
        </div>
    )
}