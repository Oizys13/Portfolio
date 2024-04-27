import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({src, title,description,link}: Props) => {
  return (
    <div className='relative overflow-hidden round-lg shadow-lg border border[#2A0E61]'>
        <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
        />
        <div className='relative p-4'>
            <h1 className='text-5xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300'>{description}</p>
            <Link href={link} passHref legacyBehavior>
                        <a target="_blank" className='text-5xl font-semibold text-[#7042f88b]'>Go to</a>
            </Link>
        </div>
    </div>
  )
}

export default ProjectCard