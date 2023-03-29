import React from 'react'
import {BallCanvas} from './canvas';
import {technologies} from "../constants";
import './Tech.css';
import {motion} from 'framer-motion' 
import {textVariant} from "../utils/motion";
import SectionWrapper from '../hoc/SectionWrap';
import {styles} from "../styles"


const Tech = () => {
  return (
    <div id ='tech'>
    <motion.div variants={textVariant()}>
        <p className={styles.subText}>Technologies That I am Using</p>
        <h2 className={styles.subHeading}>Skills</h2>
    </motion.div>
    <div className='tech gap-10'>
            {technologies.map((tech) => 
                <div className='technology w-32 h-32' key = {tech.name}>
                      <BallCanvas icon = {tech.icon}/>
                </div>
            )}
    </div>
    </div>

  )
}

export default SectionWrapper(Tech,"");
