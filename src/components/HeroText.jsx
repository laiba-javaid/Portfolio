import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
    const words=['Secure', 'User-Friendly', 'Responsive', 'Modern']
    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: -60 }
    }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*Desktop View*/}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className='text-4xl font-medium'
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1, duration: 0.5 }}>
                Hi, I'm Laiba
            </motion.h1>
            <div className="flex flex-col items-start">
                <motion.p className='text-5xl font-medium text-neutral-300'
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.2, duration: 0.5 }}>
                    Software Engineer & AI Enthusiast <br />
                    Dedicated to Crafting
                </motion.p>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <FlipWords words={words} 
                className="font-black text-white text-8xl" />
                </motion.div>
                <motion.p className='text-4xl font-medium text-neutral-300'
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.8, duration: 0.5 }}>
                    Web Solutions
                    </motion.p>
            </div>
        </div>
        {/*Mobile View*/}
        <div className="flex-col flex md:hidden space-y-6">
            <motion.p className='text-4xl font-medium'
            variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1, duration: 0.5 }}>Hi, I'm Laiba</motion.p>
            <div>
                <motion.p className='text-5xl font-black text-neutral-300'
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.2, duration: 0.5 }}>
                    Building
                </motion.p>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.5, duration: 0.5 }}>
                    <FlipWords words={words} 
                className="font-bold text-white text-7xl" />
                </motion.div>
                <motion.p className='text-4xl font-black text-neutral-300'
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 1.8, duration: 0.5 }}>Web Applications</motion.p>
            </div>

        </div>
    </div>
  )
}

export default HeroText