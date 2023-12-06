import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p style={{ marginBottom: "5px" }}>Area of Expertise</p>
                        </div>
                        <div className="row m-5 justify-content-center" style={{ gap: "1rem" }}>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">HTML</div>
                            </div>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">CSS</div>
                            </div>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">Javascript</div>
                            </div>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">React JS</div>
                            </div>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">Node JS</div>
                            </div>
                        </div>
                        <div className="row m-5 justify-content-center" style={{ gap: "1rem" }}>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">Next JS</div>
                            </div>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">Figma</div>
                            </div>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">SEO</div>
                            </div>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">Market Research</div>
                            </div>
                            <div className="col-md-2 skill-box">
                                <div className="text-center secondaryColor ">Mongo DB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;