import React,{useState,useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import './Navbar.css';

function ResponsiveAppBar() {
  const [activeLink,setActiveLink] = useState('home');
  const [scrolled,setScrolled] = useState(false);
  useEffect(() => {
      const scroll = () => {
        if(window.scrollY > 50) setScrolled(true);
        else setScrolled(false);
      }

      window.addEventListener('scroll',scroll);

      return () => window.removeEventListener('scroll',scroll);

  },[])


  return (
    
    <Navbar className = {scrolled ? "scrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="#home">Harish</Navbar.Brand>
        <Navbar.Toggle  className='hamburger' aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => setActiveLink('home')}  >Home</Nav.Link>
            <Nav.Link href="#tech"className={activeLink === 'tech'? 'active navbar-link' : 'navbar-link'} onClick = {() => setActiveLink('tech')}>Skills</Nav.Link>
            <Nav.Link href="#work" className={activeLink === 'work'? 'active navbar-link' : 'navbar-link'} onClick = {() => setActiveLink('work')}>Projects</Nav.Link> 
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="https://github.com/ChoudharyHarish" target="blank"><img className="github" src={navIcon2} alt="Github" /></a>
              <a href="https://www.linkedin.com/in/harish-choudhary-a86aa51b2/" target="blank" ><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/harish__seervi17/" target="blank"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default ResponsiveAppBar;
