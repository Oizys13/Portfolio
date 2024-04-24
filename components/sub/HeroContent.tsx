"use client"
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >

        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start '>

            <motion.div 
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
            </motion.div >

            <motion.div 
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                <span>
                Providing
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500'> The Best </span>
                Project Experience
                </span>
            </motion.div>

            <motion.p 
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600p] h-[5px]">
                Data Scientist  
            </motion.p>

            <motion.p 
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600p] h-[5px]">
                Machine Learning Engineer

            </motion.p>

            <motion.p 
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600p] h-[5px]">
                Fullstack Software Engineer with experience in Websites and Software Developement        
            </motion.p>

            <motion.a
            variants={slideInFromLeft(1)}
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mt-[20px]'
            >
                Learn More
            </motion.a>

        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
            
            <Image
                  src='/mainIconsdark.svg'
                   alt="Work Icons"
                   height={650}
                   width={650}            />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent