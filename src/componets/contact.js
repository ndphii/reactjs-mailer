import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                toast.success('Phản hồi của bạn đã được ghi nhận.', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        < div className="container forms-contact p-5" >
            <ToastContainer />
            <form className="row g-2" ref={form} onSubmit={sendEmail}>
                <div className="col-md-6">
                    <label className="form-label" >Name</label>
                    <input type="text" required pattern="^(?![0-9]+$)[^\s0-9].*$" name="user_name" className="form-control" id="inputPassword4" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                    <label className="form-label" >Email address</label>
                    <input type="email" required name="user_email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="col-12">
                    <label className="form-label">Subtitle</label>
                    <input className="form-control" type="text" required pattern="^(?![0-9]{1,10}$)(?=.*).{\S+}$" name="Subtitle" aria-label="default input example"></input>
                </div>
                <div className="col-12">
                    <label className="form-label" >Message</label>
                    <textarea className="form-control" required id="exampleFormControlTextarea1" rows="6" name="message"></textarea>
                </div >
                <div className="col-12">
                    <button type="submit" value="Send" className="mt-2 btn btn-primary">Send</button>
                </div>
            </form>
        </div >
    );
};

export default Contact;