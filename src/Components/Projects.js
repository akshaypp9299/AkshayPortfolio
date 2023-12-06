import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import helpdesk from "../assets/img/helpdesk.png"
import newsShorts from "../assets/img/inshorts.png"

const Projects = () => {
    return (
        <>
            <>
                <Col xl={12} md={12} sm={12} className='text-center project' >
                    <h2 style={{ fontSize: "45px", fontWeight: 700 }}>Things I've Built</h2>
                    <p>A Comprehensive Collection of My Professional & Personal Projects and Contributions Across Varied Domains and Technologies</p>
                </Col>
                <section className='project-section'>
                    <div className='project-div'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <p className='featured-head'>Featured Project</p>
                                <h3 className="text-lg font-medium pt-8 pb-2 project-head">
                                    HelpDesk
                                </h3>
                                <div className='project-desc'>
                                    An integrated SDLC ticketing platform that streamlines project management, issue tracking, and collaboration. Manage tickets, track progress.
                                </div>
                                <div className='mt-3'>
                                    <span className="text-gray-800 py-1 project-tech">React JS    </span>
                                    <span className="text-gray-800 py-1 project-tech">SpringBoot    </span>
                                    <span className="text-gray-800 py-1 project-tech">MongoDB    </span>
                                    <span className="text-gray-800 py-1 project-tech">PostgreSQL   </span>
                                    <span className="text-gray-800 py-1 project-tech">Figma   </span>
                                </div>
                            </div>
                            <div className='project-img col-md-6 col-12' style={{ left: "-4%" }}>
                                <img src={helpdesk} alt='helpdesk' style={{
                                    position: "relative",
                                    top: "10%",
                                    zIndex: "1111",
                                    width: "90%",
                                    right: "-7%",
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='project-div'>
                        <div className='row'>
                            <div className='project-img col-md-6 col-12' style={{ right: "-4%" }}>

                            </div>
                            <div className='col-md-6 col-12'>
                                <p className='featured-head text-end'>Featured Project</p>
                                <h3 className="text-lg font-medium pt-8 pb-2 text-end">
                                    Jobify
                                </h3>
                                <div className='project-desc text-end'>
                                    With Jobify, you can effortlessly Create, Read, Update, and Delete job listings, making it easier than ever to post, search, and manage job opportunities.
                                </div>
                                <div className='mt-3 text-end'>
                                    <span className="text-gray-800 py-1 project-tech">React JS</span>
                                    <span className="text-gray-800 py-1 project-tech">SpringBoot</span>
                                    <span className="text-gray-800 py-1 project-tech">MongoDB</span>
                                    <span className="text-gray-800 py-1 project-tech">PostgreSQL</span>
                                    <span className="text-gray-800 py-1 project-tech">Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-div'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <p className='featured-head'>Featured Project</p>
                                <h3 className="text-lg font-medium pt-8 pb-2  ">
                                    NewsShorts
                                </h3>
                                <div className='project-desc'>
                                    Stay informed with our news app, your gateway to a world of information. Discover the latest news from all corners of the globe, just like Inshorts, in a succinct and easily digestible format.
                                </div>
                                <div className='mt-3'>
                                    <span className="text-gray-800 py-1 project-tech">React JS</span>
                                    <span className="text-gray-800 py-1 project-tech">SpringBoot</span>
                                    <span className="text-gray-800 py-1 project-tech">MongoDB</span>
                                    <span className="text-gray-800 py-1 project-tech">PostgreSQL</span>
                                    <span className="text-gray-800 py-1 project-tech">Figma</span>
                                </div>
                            </div>
                            <div className='project-img col-md-6 col-12' style={{ left: "-4%" }}>
                                <img src={newsShorts} style={{
                                    position: "relative",
                                    top: "10%",
                                    zIndex: "1111",
                                    width: "90%",
                                    right: "-7%",
                                }} alt="newsShorts" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default Projects