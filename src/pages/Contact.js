import { useState, useRef, useEffect, useContext } from 'react'


// import motion
import { motion } from "framer-motion";

// email js 
import emailjs from '@emailjs/browser';

import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Contact = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);


  const [done, setDone] = useState(false);

  const formRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_umt856c",
      "template_hgubqev",
      formRef.current,
      "9PMmxB1B5rRJZ7-wW"
    ).then(() => {
      setDone(true);
      formRef.current.reset();
    })
  }

  useEffect(() => { 
    let timeOut = setTimeout(() => {
        setDone(false);
    }, 5000)

    return () => clearTimeout(timeOut);
  }, [done])

  return (
    <section className='h-[100vh] md:overflow-hidden flex sm:flex-col sm:pt-[140px] md:pt-[0] md:flex-row items-center justify-center gap-[30px]'>
      <div
      className='text-end sm:w-[90%] md:w-[50%]'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      >
        <motion.h3
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={transition1}
         className='text-[30px] md:text-[50px] lg:text-[80px] xl:text-[100px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2'>Contact Me</motion.h3>
        <motion.p 
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-50%" }}
        transition={transition1}

        className="mb-12 text-[20px]  text-slate-700 md:text-[30px] lg:text-[50px] xl:text-[70px] font-thin font-secondary  capitalize leading-[120%] tracking-[-0.05em]"
        >I would love <span className='block'>to get suggestions </span>from you.</motion.p>
      </div>
      <motion.div 
      initial ={{opacity: 0, x: '100%'}}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={transition1}
      className='sm:w-[90%] md:w-[50%]'>
          <form onSubmit={onSubmitHandler} ref={formRef}> 
            <ul className='sm:w-[100%] md:w-[80%]'>
              <li >
                <input className='w-[100%] mb-[20px] p-[10px]' type="text" placeholder='Your Name...' />
              </li>
              
              <li >
                <input className='w-[100%] mb-[20px] p-[10px]' type="email" placeholder='Your Email...' />
              </li>

              <li >
                <textarea className=' w-[100%] mb-[20px] h-[200px] p-[10px] resize-none' type="text" placeholder='Your message...' />
              </li>
            </ul>

            <button className='sm:w-[100%]  md:w-fit border-[4px] border-primary px-[10px] py-[5px]'>Send It</button>
            {done && <span className='text-green-600 text-[22px] font-primary font-thin inline-block ml-[30px]'> Thank you... </span>}
          </form>
      </motion.div>
    </section>
  )
}

export default Contact