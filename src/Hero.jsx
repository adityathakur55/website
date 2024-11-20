import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = ({ data, showCanvas }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="w-full relative h-screen about-container mt-4 px-10">
      
      {showCanvas &&
        data[1].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}

      
      <motion.div
        className="w-full h-[80vw] flex flex-row bg-gradient-to-b text-white"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
       
        <motion.div className="w-1/2 h-full flex justify-center px-40 py-32" variants={containerVariants}>
          <motion.span
            variants={textVariants}
            className="text-4xl font-['Helvica'] ml-15"
          >
            01 ~ WHAT WE DO
          </motion.span>
        </motion.div>

        
        <motion.div className="w-1/2 flex flex-col justify-center p-40" variants={containerVariants}>
          <motion.h1
            className="text-3xl leading-tight font-bold text-white"
            variants={textVariants}
          >
            We aim to revolutionize digital production in the advertising space, bringing your ideas to life.
          </motion.h1>

          <motion.div className="py-20">
            <motion.p variants={textVariants} className="mt-12 text-yellow-200 leading-relaxed text-lg">
              As a contemporary studio, we use cutting-edge design practices and the latest
              technologies to deliver seamless digital work.
            </motion.p>
            <motion.p variants={textVariants} className="mt-8 text-yellow-200 leading-relaxed text-lg">
              Our commitment to creativity, innovation, and simplicity, paired with our agile
              approach, ensures your journey with us is smooth and enjoyable from start to finish.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
