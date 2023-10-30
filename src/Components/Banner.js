import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"

const Banner = ({ scrollToDiv }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const toRotate = ["web Developer", "web Designer", "UI/UX designer"]
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedtext = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedtext);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedtext === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedtext === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }

    return (
        <section className='banner' id="home">
            <Container>
                <Row className="align-items-center text-center">
                    <Col xs={12} md={12} xl={12}>
                        <span className='tagline mb-5'>
                            Welcome to my Portfolio
                        </span>
                        <h1>{`I am `}<span className='wrap'>{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsa officiis quia et quis praesentium sapiente omnis sint odit vel aliquid temporibus ratione obcaecati illo voluptate est porro cum voluptates!</p>
                        <button onClick={() => scrollToDiv()}>Lets Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner