import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets/img";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from '../hoc/SectionWrap';
import {styles} from "../styles";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
       
       className = 'bg-tertiary p-4 rounded-2xl  w-[auto] sm:w-[360px]'>
          <div className = "relative">
              <img className="object-contain rounded-2xl" src={image} alt="" />
              <div className="absolute inset-0  flex justify-end m-3 card-img_hover">
              <div  className="black-graident h-10 w-10 rounded-full cursor-pointer" onClick={() => window.open(source_code_link,"_blank")} >

                <img className="object-contain" src={github} alt="" />
              </div>
              </div>
              </div>
          <div className="mt-4">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[16px]" >{description}</p>
          </div>

          <div className="flex flex-row flex-wrap gap-2 mt-4">
              {tags.map(({name,color}) => <p className={`text-[14px]  ${color}`} >#{name}</p>)}
          </div>
        
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div id = "work" variants={textVariant()}>
        <p className={styles.subText}>My work</p>
        <h2 className={styles.subHeading}>Portfolio</h2>
      </motion.div>

  
      <div className='mt-20 flex flex-wrap gap-4 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works,'');