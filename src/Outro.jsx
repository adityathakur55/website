import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Outro = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const AnimatedText = ({ text }) => {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="flex"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {text.split('').map((letter, index) => (
          <motion.span key={index} variants={letterVariants} className="text-[10vw]">
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="w-full">
   
      <motion.section
        className="w-full relative h-[40vw] about-container -mt-20 px-10 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={sectionVariants}
      >
        <div className="w-full h-[40vw] flex flex-row  ">
        
        <motion.div className="w-1/2 h-full  flex justify-center px-40 pt-8 pb-20 ">
          <motion.h2 className="text-4xl font-['HELVICA']" variants={textVariants}>
            02 ~ WHO WE ARE
          </motion.h2>
        </motion.div>

        <motion.div className='w-1/2  flex justify-center px-40 flex-col mt-[4vw]'>
          <motion.p className="text-4xl" variants={textVariants}>
          Our vision is to simplify digital production while creating social impact and opportunity.
          </motion.p>
        </motion.div>
        </div>
      </motion.section>


     
      <div className="w-full h-[55vw] -mt-20">
        <div className="w-full h-[16vw] flex items-center justify-between pr-40 pl-2">
          <AnimatedText text="Agile" />
          <p className="mt-12 w-[30vw] text-sm">
            We live and breathe efficiency and are not limited by geography. Based in Amsterdam
            with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right
            team for each project and get moving swiftly.
          </p>
        </div>

        <div className="w-full h-[16vw] flex items-center justify-between pr-40">
          <AnimatedText text="Innovative" />
          <p className="mt-6 w-[30vw] text-sm">
            We use innovative digital processes and technology to ensure our initiatives run
            smoothly, allowing our young, lean, and international team to focus on what matters and
            maximize momentum and opportunity.
          </p>
        </div>

        <div className="w-full h-[16vw] flex items-center justify-between pr-40">
          <AnimatedText text="Cultured" />
          <p className="mt-6 w-[30vw] text-sm">
            We are progressive and community-focused, and don’t believe in maintaining the status
            quo or sticking to the old way. Our people reflect today’s realities and stay connected
            to culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Outro;
