import React,{useState} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import {EarthCanvas} from "./canvas";
import SectionWrapper from '../hoc/SectionWrap';
import { slideIn } from '../utils/motion';

const Contact = () => {

  

  const [isLoading,setIsLoading]=useState(false);

  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  

  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({...form, [name]:value})
  } 

  const handleSubmit = (e) => {
        e.preventDefault();
          emailjs.send(process.env.REACT_APP_service_id,process.env.REACT_APP_template_id,{
            from_name:form.name,
            to_name : "Harish",
            from_email:form.email,
            message : form.message
          },process.env.REACT_APP_key).then(() => {
            setIsLoading(false)
            alert("Your message is recieved by me,I will reach you soon.")
            setForm({
            name:"",
            email:"",
            message:""})

          },(error)=> {
            setIsLoading(false);
            console.log(error);
            alert("Something went wrong")
          })
          
  }

  return (
    <div id='connect' className='flex xl:flex-row flex-col-reverse gap-4 overflow-hidden  z-1'>

    <motion.div
     className='flex-[0.5] p-8 rounded-2xl bg-black-100'
     variants={slideIn('left','tween',0.2 ,1)}>
      <p className={`${styles.subText} text-white`}>Get in Touch </p>
      <h3 className={styles.subHeading}>Contact</h3>

      <form onSubmit={handleSubmit} className='mt-10 p-2 flex flex-col gap-6'>
                <div className='flex flex-col'>
                <label htmlFor="name" className='font-bold' >Your Name</label>
                <input type = "text" className='bg-tertiary  mt-2 py-3 px-6 rounded-lg placeholder:text-secondary text-white outline-none cursor-pointer' name = 'name' id = "name"value={form.name} placeholder = "What's your name" onChange={(e) => handleChange(e)} />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="email" className='font-bold' >Your Email</label>
                <input type = "email" className='bg-tertiary  mt-2 py-3 px-6 rounded-lg placeholder:text-secondary text-white outline-none' name = 'email' id = "email"value={form.email} placeholder = "What's your email" onChange={handleChange} />
                </div>
                  {/* //#240032' */}
                <div className='flex flex-col'>
                <label htmlFor="name" className='font-bold' >Your Message</label>
                <textarea rows= '7' className='bg-tertiary mt-2 py-3 px-6 rounded-lg placeholder:text-secondary text-white outline-none' name = 'message' id = "name"value={form.message} placeholder = "Write your message" onChange={handleChange} />
                </div>

                <button type='submit' className='bg-tertiary px-8 py-3 w-fit rounded-xl font-bold outline-none shadow-md shadow-primary' >{isLoading ? 'Sending...' :  'Submit'}</button>

        </form>
      </motion.div>

      <motion.div 
      variants={slideIn('right','tween',0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>
    </div>




  )
}

export default SectionWrapper(Contact,"contact");