import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import Image from 'next/image'
import deved from '../public/photo.png'
import code from '../public/code.png';
import web1 from '../public/web8.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState, useRef, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
  return (
    <div className={darkMode ? 'dark': ''}>
      <Head>
        <title>Michal Lalecki Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-whte px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className=" text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Michał Lalecki
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A young programmer fascinated by web technologies and good design.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href='https://github.com/wodusq' target="_blank"> <AiFillGithub /></a>
              <a href='https://www.linkedin.com/in/micha%C5%82-lalecki-5848881b8/' target="_blank"><AiFillLinkedin /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className="text-3xl py-1 dark:text-white">Technologies and applications that I know</h3>
          </div>
          <div className={`${styles.block} ${(magicSectionIsVisible) ? styles.animateBlock : ''}`}>
            <h2 ref={magicSectionRef} className={styles.heading}>
              <div className="lg:flex gap-20">
                <div ref={myRef} className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                  <BsCodeSlash/>
                  <h3 className="text-lg font-medium pt-8 pb-2  ">
                    Beautiful Designs
                  </h3>
                  <p className="py-2">
                    Creating elegant designs suited for your needs following core
                    design theory.
                  </p>
                  <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                  <p className="text-gray-800 py-1">Photoshop</p>
                  <p className="text-gray-800 py-1">Illustrator</p>
                  <p className="text-gray-800 py-1">Figma</p>
                  <p className="text-gray-800 py-1">Indesign</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <Image src={code} width={100} height={100} />
                  <h3 className="text-lg font-medium pt-8 pb-2 ">
                    Code your dream project
                  </h3>
                  <p className="py-2">
                    Do you have an idea for your next great website? Let's make it a
                    reality.
                  </p>
                  <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                  <p className="text-gray-800 py-1">Photoshop</p>
                  <p className="text-gray-800 py-1">Illustrator</p>
                  <p className="text-gray-800 py-1">Figma</p>
                  <p className="text-gray-800 py-1">Indesign</p>
                </div>

              </div>
            </h2>
          </div>
        </section>
        <section>
          <div className='text-center mt-20'>
            <h3 className='text-3xl py-1 dark:text-white'>
             Portfolio
            </h3>
            <p>
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>check out my recent projects </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className= 'basis-1/3 flex-1 relative text-center'>
                <a href='https://m4rk37.com/' className='cursor-pointer'><Image  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web1}/>
                <div className='rounded-lg image-overlay image-overlay-blur '>
                  <h3>Streetwear apparel site</h3>
                  <p>Site was made as wordpress theme</p>
                  <p className='px-5'>Technology i used is bootstrap, html, javascript, scss and more </p>
                </div>
                </a>
              </div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web2}/></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web3}/></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web4}/></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web5}/></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src={web6}/></div>
          </div>
        </section> 
      </main>
    </div>
  )
}
