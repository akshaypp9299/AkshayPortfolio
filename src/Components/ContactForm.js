import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "emailjs-com"
import { ToastContainer } from "react-toastify";

const Contact = ({ divRef }) => {

    const [status, setStatus] = useState({
        success: "",
        message: ""
    });

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_0qdl94g", "template_111qjuk", e.target, "jc0pB04aXSOSZnSnU")
            .then((result) => {
                setStatus({ ...status, success: true, message: "Your request is sent" })
            }, (error) => {
                setStatus({ ...status, success: false, message: "Something went wrong" })
            })
        e.target.reset()

    }

    return (
        <section className="contact" id="connect" ref={divRef}>
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>

                            <img src={contactImg} alt="Contact Us" />
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            <div>
                                <h2>Get In Touch</h2>
                                <form onSubmit={handleSubmit} ref={form}>
                                    <Row>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="text" name="from_name" placeholder="Enter Name" />
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="email" name="user_email" placeholder="Enter Email" />
                                        </Col>
                                        <Col size={12} sm={12} className="px-1">
                                            <input type="text" name="message" placeholder="Enter Message" />
                                        </Col>
                                        <Col size={12} className="px-1">
                                            <input type="submit" value="Send" />
                                        </Col>
                                        {
                                            status.success ?
                                                <ToastContainer position="top-right"
                                                    autoClose={5000}
                                                    hideProgressBar={false}
                                                    newestOnTop={false}
                                                    closeOnClick
                                                    rtl={false}
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                    theme="light"
                                                    type="success">
                                                    {`Your request was successfully sent`}
                                                </ToastContainer >
                                                :
                                                <ToastContainer position="top-right"
                                                    autoClose={5000}
                                                    hideProgressBar={false}
                                                    newestOnTop={false}
                                                    closeOnClick
                                                    rtl={false}
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                    theme="light"
                                                    type="error">
                                                    Something went wrong
                                                </ToastContainer >
                                        }
                                    </Row>
                                </form>
                            </div>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;