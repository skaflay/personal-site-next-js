import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
library.add(fas, faLinkedin,faGithub);


export default function Contact() {
    const Linkedin=React.forwardRef(({onClick,href},ref)=>{
        return (<FontAwesomeIcon icon="fa-brands fa-linkedin" ></FontAwesomeIcon>)
    });
    Linkedin.displayName="LinkedIn"
    const GitHub=React.forwardRef(({onClick,href},ref)=>{
        return (<FontAwesomeIcon icon="fa-brands fa-github"></FontAwesomeIcon>)
    });
    GitHub.displayName="GitHub"
    const MailMe=React.forwardRef(({onClick,href},ref)=>{
        return (<FontAwesomeIcon icon="fa-solid fa-envelope"></FontAwesomeIcon>)
    })
    MailMe.displayName="MailMe"
 const [domLoaded, setDomLoaded] = useState(false);
 useEffect(()=>{
    setDomLoaded(true);
 },[]);

  return (
    <>{domLoaded &&(
      <div className="left-frame">
        <div className="project-header-box">
          <div className="project-header">
            <div className="icons-center flex-display">
             <Link href="mailto:contact@sabikaflay.com" aria-label="Email Me" className="contact-icon mx-10"><MailMe></MailMe></Link>
              <Link href="https://www.linkedin.com/in/sabikaflay/" className="contact-icon mx-10"passHref> <Linkedin/></Link>
              <Link href="https://github.com/skaflay"passHref className="contact-icon mx-10"><GitHub/></Link>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}