import "./contact.scss"
import emailjs from 'emailjs-com';
import React, { useState } from "react";
import { Button } from "@material-ui/core";

const Result = () => {
    return (
        <p>Your message has been successfully sent. I will get back to you ASAP:)</p>
    )
}

export default function Contact() {
    const [result, showResult] = useState(false);

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
        <div className="contact" id="contact">
            <div className="header">
                <h1>Contact Me</h1>
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
                        <input className="inputField" name="email" required input="text" />
                    </div>
                    <div className="formWord">
                        <span>Message</span>
                        <br />
                        <textarea name="message" required></textarea>
                        <br />

                    </div>
                    <Button className="btn" variant="contained" color="primary" type="submit">SUBMIT</Button>
                    <div className="row">
                        {result ? <Result /> : null}
                    </div>
                </form>
            </div>
        </div>
    )
}