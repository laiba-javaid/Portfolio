import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
    const words=['Secure', 'User-Friendly', 'Responsive', 'Modern']
    
    // Desktop variants
    const desktopVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: -60 }
    }
    
    // Mobile variants - no x offset to prevent shifting
    const mobileVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }
    
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*Desktop View*/}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className='text-4xl font-medium'
                variants={desktopVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1, duration: 0.5 }}>
                Hi, I'm Laiba
            </motion.h1>
            <div className="flex flex-col items-start">
                <motion.p className='text-5xl font-medium text-neutral-300'
                variants={desktopVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.2, duration: 0.5 }}>
                    Software Engineer & AI Enthusiast <br />
                    Dedicated to Crafting
                </motion.p>
                <motion.div
                variants={desktopVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <FlipWords words={words} 
                className="font-black text-white text-8xl" />
                </motion.div>
                <motion.p className='text-4xl font-medium text-neutral-300'
                variants={desktopVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.8, duration: 0.5 }}>
                    Web Solutions
                    </motion.p>
            </div>
        </div>
        
        {/*Mobile View - Fixed responsive design*/}
        <div className="flex-col flex md:hidden space-y-4 px-4 max-w-full">
            <motion.p className='text-2xl sm:text-3xl font-medium'
            variants={mobileVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1, duration: 0.5 }}>
                Hi, I'm Laiba
            </motion.p>
            
            <div className="flex flex-col items-center space-y-2">
                <motion.p className='text-lg sm:text-xl font-medium text-neutral-300'
                variants={mobileVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.1, duration: 0.5 }}>
                    Software Engineer & AI Enthusiast
                </motion.p>
                
                <motion.p className='text-2xl sm:text-3xl font-black text-neutral-300'
                variants={mobileVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.2, duration: 0.5 }}>
                    Building
                </motion.p>
                
                <motion.div
                variants={mobileVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.5, duration: 0.5 }}
                className="w-full flex justify-center">
                    <FlipWords words={words} 
                className="font-bold text-white text-3xl sm:text-4xl text-center" />
                </motion.div>
                
                <motion.p className='text-2xl sm:text-3xl font-black text-neutral-300'
                variants={mobileVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.8, duration: 0.5 }}>
                    Web Applications
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText