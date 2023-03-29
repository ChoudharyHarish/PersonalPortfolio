import {motion} from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import {styles} from '../styles';


const Wrapper = (Component,idName) => {
    return function HOC(){
         return (
         <motion.section
            variants={staggerContainer}
            initial = "hidden"
            whileInView="show"
            viewport={{once:true,amount:0.25}}
            className = {`${styles.padding} max-w-7xl mx-auto relative z-1`}>
            <Component/>
         </motion.section>
         )
    }
}

export default Wrapper;
