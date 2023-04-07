import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import main from "../assets/img/header-img.svg";
import './Main.css';
import resume from './Resume.pdf';

const Main = () => {

    const dynamicText = ['Front-End Developer','Back-End Developer','Full Stack Developer'];

    const [currentText,setCurrentText] = useState('');
    const [currIndex,setCurrIndex] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const [delta,setDelta] = useState(300 - Math.random() * 200);
    const period = 300;

    
    const makeText = () => {
        const index = currIndex % dynamicText.length;
        const text = dynamicText[index];
        const updatedText = isDeleting ? text.substring(0,currentText.length - 1)  : text.substring(0,currentText.length + 1);
        
        setCurrentText(updatedText);

        if(isDeleting){
            setDelta((prev) => prev/2);
        }

        if(!isDeleting && updatedText === text){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setCurrIndex(index + 1);
            setDelta(100);
        }

    }
    
    useEffect(() => {
        let interval = setInterval(() =>{
            makeText()
         },delta);

         return () => {clearInterval(interval)};

    },[currentText,delta]);




    return (
        <section className='main'>
       <Container>
       <Row className='align-items-center'>
        <Col xs = {12} md = {6} lg = {7}>
            <h1>Hi I am <span>{currentText}</span></h1>
            <p>I am Harish, second year CSE undergraduate at IIIT Kurnool. <br /> Skilled in FrontEnd Development and BackEnd Development, looking for opportunities to enhance my skills </p>
            <p>Currently open to work</p>
            <div className="btn-container">
            <a href={resume} download> <button className='download'>Download CV</button></a>
           <a href='#connect'> <button className='border-none' onClick={() => console.log('clicked')}>Let's Connect <ArrowForwardIcon/> </button> </a>
            </div>
        </Col>
        <Col xs = {12} md={6} lg={5}>
            <img className='img-resp' src={main} alt="Main Img" />
        </Col>
       </Row>
       </Container>
       </section>
    )
}

export default Main;