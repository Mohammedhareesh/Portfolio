import React, {useState, useEffect} from 'react';
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
import cv from '../../assets/cv/Mohammed_Hareesh.pdf';
import illustrator from "../../assets/images/skills/adobe-illustrator.png";
import bs5 from "../../assets/images/skills/bootstrap-framework.png";
import css from "../../assets/images/skills/css3.png";
import git from "../../assets/images/skills/git.png";
import github from "../../assets/images/skills/github.png";
import html from "../../assets/images/skills/html.png";
import javascript from "../../assets/images/skills/javascript.png";
import jquery from "../../assets/images/skills/jquery.png";
import react from "../../assets/images/skills/react.png";
import photoshop from "../../assets/images/skills/photoshop.png";
import php from "../../assets/images/skills/php.png";
import tailwind from "../../assets/images/skills/tailwind.png";
import vscode from "../../assets/images/skills/visual-studio-code.png";

import SlideUp from '../../utlits/animations/slideUp';

const Hero = () => {
    const [experience,
        setExperience] = useState('');
    const [greeting,
        setGreeting] = useState('');

    useEffect(() => {
        const calculateExperience = () => {
            const startDate = new Date('2022-11-02');
            const currentDate = new Date();

            let years = currentDate.getFullYear() - startDate.getFullYear();
            if (currentDate.getMonth() < startDate.getMonth() || (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
                years--;
            }

            let months = (currentDate.getMonth() - startDate.getMonth() + 12) % 12;

            let experienceText = '';
            if (years > 0) {
                experienceText += `${years} year${years !== 1
                    ? 's'
                    : ''}`;
                if (months > 0) {
                    experienceText += ` ${months} month${months !== 1
                        ? 's'
                        : ''}`;
                }
            } else {
                experienceText = `${months} month${months !== 1
                    ? 's'
                    : ''}`;
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
                                            <Link target="_blank" to="https://github.com/Mohammedhareesh">
                                                <RiGithubLine size={20}/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='cv-dwn-btn mt-20'>
                                <a href={cv} download="Mohammed_Hareesh_CV.pdf" className="theme-btn ">
                                        Download CV
                                        <RiDownloadLine size={15}/>
                                    </a>
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
                                    Front-end Developer with {experience} of expertise in delivering responsive web solutions across 7+ live projects and
                                    freelance engagements. Demonstrates proven ability to transform client
                                    requirements into engaging user interfaces while ensuring optimal performance
                                    and functionality.
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
                                        Whatsapp Me
                                        <RiWhatsappLine size={15}/>
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                       
                    </div>
                    <div className="col-lg-12">
                    <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>Skills</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee>
                                                <img className="skill_img" src={html} alt="" />
                                                <img className="skill_img" src={css} alt="" />
                                                <img className="skill_img" src={bs5} alt="" />
                                                <img className="skill_img" src={tailwind} alt="" />
                                                <img className="skill_img" src={javascript} alt="" />
                                                <img className="skill_img" src={jquery} alt="" />
                                                <img className="skill_img" src={react} alt="" />
                                                <img className="skill_img" src={git} alt="" />
                                                <img className="skill_img" src={github} alt="" />
                                                <img className="skill_img" src={php} alt="" />
                                                <img className="skill_img" src={photoshop} alt="" />
                                                <img className="skill_img" src={illustrator} alt="" />
                                                <img className="skill_img" src={vscode} alt="" />
                                               
                                            </Marquee>
                                        </div>
                                    </div>
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