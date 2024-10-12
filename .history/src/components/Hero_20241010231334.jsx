import { motion } from 'framer-motion';
import { styles } from './styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX}absolute 
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          <motion.div 
            className='absolute bottom-[10px] left-[10px] w-32 h-32 rounded-full 
            bg-[#915eff] shadow-2xl transform transition-all duration-500'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        </div>
      </div>
    </section >
  )
}

export default Hero