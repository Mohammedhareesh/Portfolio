import React from 'react'
import {Link} from 'react-router-dom';
import about_profile from "../../assets/images/about/about_profile.png"
import {RiWhatsappLine} from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={about_profile} alt="About Me"/>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Mohammed Hareesh, A Front-end Developer.
                                </h2>
                                <p>A skilled front-end developer based in Chennai, known for creating engaging
                                    and efficient user interfaces. Proficient in HTML, CSS, and JavaScript, he
                                    excels at building responsive and visually appealing web applications that
                                    enhance user experience. Mohammed combines technical expertise with a strong eye
                                    for design, ensuring each project aligns with both aesthetic and functional
                                    requirements. Known for his problem-solving abilities and commitment to staying
                                    updated with industry trends, he consistently delivers high-quality, scalable
                                    front-end solutions tailored to meet client and business needs.

                                </p>
                                {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p> */}
                                <div className="hero-btns">
                                    <Link target='_blank' to="https://wa.me/919092334732" className="theme-btn">
                                        Whatsapp Me <RiWhatsappLine size={15}/>
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery