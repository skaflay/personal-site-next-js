import React from "react";
import FadeInAnimation from '../helpers/navbar-animation';
import Overlay  from "../helpers/overlay-animation";
import Image from 'next/image'
import image from "../../public/static.svg";
import TimeLineCard from "./About";
import Contact  from "./Contact";
const navLinks = [{
    "link": "#about",
    "title": "About"
},
{
    "link": "https://github.com/skaflay",
    "title": "Projects"
},
{
    "link": "https://www.linkedin.com/in/sabikaflay/",
    "title": "Contact"
}]

export default function Banner() {
    const navData = [];
    navLinks.forEach(e => {
        navData.push(
            <li className="nav-item" key={e.title}>
                <a className="nav-link" key={e.title} href={e.link}>{e.title}</a>
            </li>
        )
    });
    return (
        <>
    <section id="overlay-component"><Overlay></Overlay></section>
        <div className="home">
        <nav id="mainNav">
            <FadeInAnimation>
                <ul className="nav-list">{navData} </ul>
            </FadeInAnimation>
        </nav>
        <div className="container banner">
                <div className="svg-image fadeIn banner-image">
                         <Image src={image} alt="Drawing banner" /> 
                </div>
                <div id="header-text" className="banner-text">
                    <h1>Sabi Kaflay</h1>
                </div>
            </div>
        </div>
        <div className="about">
            <TimeLineCard />
        </div>
        <div className="contact">
            <Contact />
        </div>
        </>
    );
}