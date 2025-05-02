import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

interface SkillDataProviderProps {
  src: IconType;
  width: number;
  height: number;
  index: number;
  color: string;
  skill_name: string;
}

export const SkillDataProvider = ({ src: IconComponent, width, color, skill_name }: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0);
  
  useEffect(() => {
    // Random delay between 0 and 0.8 seconds for more random popping effect
    setAnimationDelay(Math.random() * 0.8);
  }, []);

  // Using the previous animation style
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        variants={imageVariants}
        transition={{ 
          delay: animationDelay, 
          duration: 0.2, 
          type: "spring",
          stiffness: 200
        }}
        className="relative"
      >
        <IconComponent size={width} color={color} />
        
        
      </motion.div>
      
      {/* Skill name label with fade-in effect */}
      <motion.span 
        className="text-xs text-center opacity-80"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0.7,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.2 }}
      >
        {skill_name}
      </motion.span>
    </div>
  );
};