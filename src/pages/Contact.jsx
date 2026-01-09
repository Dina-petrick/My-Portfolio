import { useState, useRef, useEffect, useContext } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    emailjs.sendForm(
      "service_umt856c",
      "template_hgubqev",
      formRef.current,
      "9PMmxB1B5rRJZ7-wW"
    ).then(() => {
      setDone(true);
      setLoading(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      setError(true);
      setLoading(false);
    });
  };

  useEffect(() => { 
    if (done) {
      const timeOut = setTimeout(() => {
        setDone(false);
      }, 5000);
      return () => clearTimeout(timeOut);
    }
  }, [done]);

  return (
    <section className='w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 pt-32 md:pt-36 pb-16 md:pb-24 gap-16 max-w-7xl mx-auto relative'
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition1}
        className='lg:w-1/2 space-y-8'
      >
        <div className="space-y-6">
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-primary font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent'>
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl">
            Let's build something extraordinary together.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.2 }}
          className="space-y-6 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100"
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-text-muted font-semibold">Email</p>
            <a 
              href="mailto:dinakaranswe@gmail.com" 
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="text-lg text-text-primary hover:text-primary transition-colors font-medium inline-block"
            >
              dinakaranswe@gmail.com
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-text-muted font-semibold">Location</p>
            <p className="text-lg text-text-secondary font-medium flex items-center gap-2">
              Chennai, India
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...transition1, delay: 0.2 }}
        className='lg:w-1/2 w-full max-w-lg'
      >
        <form onSubmit={onSubmitHandler} ref={formRef} className="space-y-6 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg">
          <div className="space-y-2">
            <label htmlFor="user_name" className="text-sm font-semibold text-text-primary uppercase tracking-wide">
              Your Name
            </label>
            <input
              id="user_name"
              name="user_name"
              className='w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-text-primary placeholder:text-text-muted'
              type="text"
              placeholder='Enter your name'
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="user_email" className="text-sm font-semibold text-text-primary uppercase tracking-wide">
              Your Email
            </label>
            <input
              id="user_email"
              name="user_email"
              className='w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-text-primary placeholder:text-text-muted'
              type="email"
              placeholder='Enter your email'
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-text-primary uppercase tracking-wide">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className='w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-text-primary resize-none h-32 placeholder:text-text-muted'
              placeholder='Tell me about your project...'
              required
            />
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              onMouseEnter={!loading ? mouseEnterHandler : undefined}
              onMouseLeave={!loading ? mouseLeaveHandler : undefined}
              className='btn disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none w-full md:w-auto'
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='p-4 rounded-lg bg-green-50 border border-green-200'
              >
                <span className='text-green-700 text-sm font-medium flex items-center gap-2'>
                  <span>✓</span> Message sent successfully! I'll get back to you soon.
                </span>
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='p-4 rounded-lg bg-red-50 border border-red-200'
              >
                <span className='text-red-700 text-sm font-medium flex items-center gap-2'>
                  <span>✕</span> Failed to send. Please try again or email me directly.
                </span>
              </motion.div>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
