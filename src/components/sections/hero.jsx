import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import {
    RiFacebookCircleFill,
    RiTwitterXLine,
    RiLinkedinFill,
    RiGithubLine,
    RiCircleFill,
    RiDownloadLine,
    RiWhatsappLine
} from '@remixicon/react';
import profile from "../../assets/images/about/profile.png";
import SlideUp from '../../utlits/animations/slideUp';

const Hero = () => {
    const [experience, setExperience] = useState('');
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const calculateExperience = () => {
            const startDate = new Date('2022-11-02'); 
            const currentDate = new Date();
            
            let years = currentDate.getFullYear() - startDate.getFullYear();
            if (currentDate.getMonth() < startDate.getMonth() || 
                (currentDate.getMonth() === startDate.getMonth() && 
                 currentDate.getDate() < startDate.getDate())) {
                years--;
            }
            
            let months = (currentDate.getMonth() - startDate.getMonth() + 12) % 12;
            
            let experienceText = '';
            if (years > 0) {
                experienceText += `${years} year${years !== 1 ? 's' : ''}`;
                if (months > 0) {
                    experienceText += ` ${months} month${months !== 1 ? 's' : ''}`;
                }
            } else {
                experienceText = `${months} month${months !== 1 ? 's' : ''}`;
            }
            
            setExperience(experienceText);
        };

        const calculateGreeting = () => {
            const currentHour = new Date().getHours();
            if (currentHour < 12) {
                setGreeting('Good Morning');
            } else if (currentHour < 18) {
                setGreeting('Good Afternoon');
            } else {
                setGreeting('Good Evening');
            }
        };

        calculateExperience();
        calculateGreeting();
        
        const intervalId = setInterval(calculateExperience, 30 * 24 * 60 * 60 * 1000);
        
        return () => clearInterval(intervalId);
    }, []);

   
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* START ABOUT IMAGE DESIGN AREA */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me"/>
                                <h2 className="mt-4">Mohammed Hareesh</h2>
                                <p>I am a Web Designer based in Chennai.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li>
                                            <Link target="_blank" to="https://www.facebook.com/mohammed.hareesh.5">
                                                <RiFacebookCircleFill size={20}/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                target="_blank"
                                                to="https://www.linkedin.com/in/mohammed-hareesh-900a91222/">
                                                <RiLinkedinFill size={20}/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank"
                                             to="https://github.com/Mohammedhareesh">
                                                <RiGithubLine size={20}/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* / END ABOUT IMAGE DESIGN AREA */}
                    {/* START ABOUT TEXT DESIGN AREA */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                            <p>Greetings!, {greeting}.</p>
                                <h2>
                                    Front-end Developer with {experience} of expertise in delivering responsive web
                                    solutions across 7+ live projects and freelance engagements. Demonstrates proven
                                    ability to transform client requirements into engaging user interfaces while
                                    ensuring optimal performance and functionality.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'>
                                            <i>
                                                <RiCircleFill size={14}/></i>Ready to Connect
                                        </li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link target='_blank' to="https://wa.me/919092334732" className="theme-btn">
                                        Whatsapp Me <RiWhatsappLine size={15}/>
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;