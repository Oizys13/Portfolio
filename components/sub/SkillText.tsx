"use client"
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col item-center justify-center'>

        <motion.div 
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
            Making the world a better place through <br />
            <span className='text-[#b49bff]'>Software Development</span>
        </motion.div>

        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            I am a software developer with a passion for creating beautiful and functional websites.
        </motion.div>
    </div>
  )
}

export default SkillText