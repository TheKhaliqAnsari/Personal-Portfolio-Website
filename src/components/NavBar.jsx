import React,{ useState, useEffect } from 'react';
import {Nav, Container, Navbar} from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'


export default function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img id='main-logo' src={logo} alt='my-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='me-auto'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}> Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/khaliqansari/'><img src={navIcon1} height='50px' width='50px' alt="Linkedin" /></a>
                <a href='https://github.com/TheKhaliqAnsari'><img src={navIcon2} height='50px' width='60px' alt="Github" /></a>
                <a href='https://www.instagram.com/thekhaliqansari/'><img src={navIcon3} height='50px' width='50px' alt="Instagram" /></a>
            </div>
            {/* <button className='vvd' onClick={() => console.log('connect')} >
                <span>Let's Connect</span>
            </button> */}

            <button className='vvd' onClick={() => window.location.href="#connect"} >
                <span>Let's Connect</span>
            </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
