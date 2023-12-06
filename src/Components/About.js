import React from 'react'
import myImg from "../assets/img/profile-pic.jpg"

const About = () => {
    return (
        <>
            <div className='project '>
                <h2 className='text-center' style={{ fontSize: "45px", fontWeight: "700" }}>About</h2>
                <p className='text-center'>Merging Artistry with Technology</p>
            </div>
            <section className='row'>
                <div className='col-md-6' style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img src={myImg} alt="profile-image" style={{ width: "50%", border: "5px solid white" }} />
                </div>
                <div className='col-md-6' style={{ padding: "0 5rem" }}>
                    <h3>Akshay Polshettiwar</h3>
                    <br />
                    <p>
                        Hello, I'm a passionate frontend developer dedicated to crafting immersive digital experiences that transcend mere functionality. With a creative eye and a penchant for pixel-perfection, I specialize in transforming ideas into visually stunning, user-centric interfaces.
                        <br />
                        <br />
                        My journey in web development isn't just about lines of code; it's about infusing life into designs, creating seamless interactions, and ensuring every click feels intuitive. Armed with expertise in <b><u>React JS, Next JS, Figma, Javascript and many more technologies</u></b>. I thrive on the evolving frontier of web technology, constantly seeking innovation and embracing new challenges.
                        <br />
                        <br />
                        I blend technical expertise with strong teamwork and communication skills, excelling as a listener and speaker to foster effective team collaboration.
                        <br />
                        <br />
                        As much as I thrive in the world of web development, my interests extend far beyond lines of code. I have an insatiable curiosity for exploring new cuisines, cultures, and the stories they hold. Whether it's savoring exotic dishes from different corners of the globe or immersing myself in the vibrant tapestry of diverse communities, I find immense joy in discovering the connections between food, people, and places.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About