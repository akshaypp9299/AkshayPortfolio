import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"

const Banner = ({ scrollToDiv }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const toRotate = ["Frontend Developer", "Web Developer", "React Developer"]
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
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12}>
                        <span className='secondaryColor' style={{ font: "500 16px Centra" }}>
                            Hi, my name is
                        </span>
                        <h1 className='my-4 offWhite'>Akshay Polshettiwar.</h1>
                        <h1 className='my-4' style={{ color: "#8892B0" }}>{`I am `}<span className='wrap text-white'>{text}</span></h1>
                        <p>I am a Web Developer with a focus on building exceptional digital experiences, human-centered products. At miniOrange, currently I'm committed to leveraging my skills to engineer innovative solutions that prioritize inclusivity.</p>
                        <button className='secondaryColor' onClick={() => scrollToDiv()}>Say Hello <ArrowRightCircle size={25} /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner