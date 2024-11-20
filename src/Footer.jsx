import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

import Ankh from './Ankh';
import { useState } from 'react';


const Footer = ({ data, showCanvas }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [sliderValue, setSliderValue] = useState(0); 
  const [feedback, setFeedback] = useState(''); 

  
  const determineFeedback = (value) => {
    if (value > 90) return "You're awesome 😭❤️";
    if (value > 70) return 'Great 😁';
    if (value > 50) return 'Okay ☺️';
    if (value > 30) return 'Hmm 🙄';
    return 'Jealous? 😏';
  };

  
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleSliderSet = () => {
    setFeedback(determineFeedback(sliderValue));
  };

  

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };


  
  


  return (
    <footer className="relative overflow-hidden text-white pt-32">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="opacity-20 w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {showCanvas &&
        data[1].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}

      <div className="relative z-10 container mx-auto px-10 mt-8">
        
        <motion.div
          ref={ref}
          className="w-full flex justify-center mb-16"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            className="text-5xl font-semibold tracking-widest text-center"
            variants={textVariants}
          >
            03 ~ TALK TO US
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start lg:items-center -mt-12 ">
          
          <div className="w-full lg:w-1/2 ">
            <motion.h1
              className="text-6xl font-bold leading-tight text-yellow-400"
              variants={textVariants}
            >
              Thirtysixstudio is seeking talented collaborators.
            </motion.h1>
            <motion.p
              className="mt-8 text-lg text-gray-300 leading-relaxed tracking-wide"
              variants={textVariants}
            >
              We bring ideas to life with cutting-edge design and seamless digital work, creating
              a bridge between creativity and technology.
            </motion.p>
          </div>

          <Ankh />
         
        </div>
        

       
       
         
        <div className="w-[40vw] relative flex flex-col items-center -mt-24  ml-[25vw]">
        <p className="text-2xl text-gray-300 mb-4">Hows Experience? 🤔</p> 
        {feedback && <p className="text-lg text-gray-300 mb-2">{feedback}</p>} 
  
           
             <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                className="slider w-[20vw] appearance-none bg-gray-300 h-2 rounded-full"
                onChange={handleSliderChange}
                onMouseUp={handleSliderSet} 
                onTouchEnd={handleSliderSet}
                style={{
                background: `linear-gradient(to right, #8B0000 ${sliderValue}%, #d3d3d3 ${sliderValue}%)`, 
              }}
            />
  
              
            <p className="ml-4 text-lg text-gray-300">{sliderValue}%</p>
        </div>
        

        </div>

        
        <div className="relative bottom-10 left-10 flex space-x-6 text-gray-500  mt-24 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FaCircle size={10} />
          </motion.div> 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <FaCircle size={14} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <FaCircle size={10} />
          </motion.div>
        </div>
      
    </footer>
  );
};

export default Footer;
