import React, { useState } from 'react';
import "./ContactUs.css";
import emailjs from "emailjs-com";

export const ContactUs = () => {

    const [form, setForm] = useState([{
        name: '',
        email: '',
        message: ''
    }]);

    const [loading, setLoading] = useState("noNeed");

    const sendEmail = async () => {

        const { name, email, message } = form;

        try {
            const params = {
                to_email: "danyal.titanka24@gmail.com",
                from_name: name,
                from_email: email,
                message: message,
            }

            const response = await emailjs.send(
                'service_owr5n99',
                'template_rt2ofqs',
                params,
                "TqdWTZgjXhPBNdAEr"
            );

            if (response.text === "OK"){
                setLoading(true);
            }

            console.log('Email sent successfully:', response);

        } catch (error) {
            console.log("Error : ", error);
        }

    }

    const submitForm = (e) => {
        e.preventDefault();

        const { name, email, message } = form;

        if (name.length > 2 && email && message) {

            setLoading(false)

            sendEmail();
        }

    }


    return (
        <>
            {
                loading === "noNeed" && (
                    <div className="contact-us">
                        <div className="contact-us-container">
                            <div className="contact-us-flex">
                                <form action="" onSubmit={submitForm}>
                                    <div className="form-flex">
                                        <label htmlFor="name">
                                            <input
                                                id="name"
                                                type='text'
                                                placeholder="نام.."
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </label>
                                        <label htmlFor="email">
                                            <input
                                                id="email"
                                                type='email'
                                                placeholder="ایمیل.."
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                    <textarea
                                        name=""
                                        id="message"
                                        placeholder="پیام..."
                                        accessKey='false'
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    >
                                    </textarea>
                                    <button type='submit'>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                !loading ? (
                    <h1>loading...</h1>
                ) : (
                    <h1>its ok!</h1>
                )

            }
        </>
    )
}

