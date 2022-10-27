import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

import Image from 'next/image'
import { useState, useRef, useEffect} from 'react';

import styles from '../styles/Home.module.css';
import Modal from '../components/Modal';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
                <button
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  onClick={()=> setShowModal(true)}
                >
                  Contact
                </button>
              </li>
            </ul>
            <Modal show={showModal} onClose={()=> setShowModal(false)}>
              <p className='pt-5 '> michal.lalecki@hotmail.com</p>
              <p className='pt-10 text-teal-600 font-medium'><a href='https://github.com/wodusq' target="_blank"> GitHub </a></p>
              <p className='pt-5 text-teal-600 font-medium'><a href='https://www.linkedin.com/in/micha%C5%82-lalecki-5848881b8/' target="_blank"> LinkedIn </a></p>
              
            </Modal>
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
              <a href='https://github.com/wodusq' target="_blank" > <AiFillGithub /></a>
              <a href='https://www.linkedin.com/in/micha%C5%82-lalecki-5848881b8/' target="_blank" ><AiFillLinkedin /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src="/photo.png" alt='photo' layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
              
          <div className='text-center'>
            <h3 className="text-3xl py-1 dark:text-white">Technologies and applications that I know</h3>
          </div>
          <div >
            <h2  className={styles.heading}>
              <div className="lg:flex gap-20">
                <div  className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                  <h3 className="text-lg font-medium pt-8 pb-2  ">
                    Web development 
                  </h3>
                  <p className="py-2">
                    Creating websites and web applications
                  </p>
                  <h4 className="py-4 text-teal-600">Technologies I use</h4>
                  <p className="text-gray-800 py-1">HTML</p>
                  <p className="text-gray-800 py-1">CSS</p>
                  <p className="text-gray-800 py-1">Javascript</p>
                  <p className="text-gray-800 py-1">React.js</p>
                  <p className="text-gray-800 py-1">Next.js</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                  <h3 className="text-lg font-medium pt-8 pb-2 ">
                    Design
                  </h3>
                  <p className="py-2">
                    Creating designs for my projects and more
                  </p>
                  <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                  <p className="text-gray-800 py-1">Photoshop</p>
                  <p className="text-gray-800 py-1">Illustrator</p>
                  <p className="text-gray-800 py-1">After Effect</p>
                  <p className="text-gray-800 py-1">Premiere Pro</p>
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
                <a href='https://m4rk37.com/' target="_blank" className='cursor-pointer'><Image alt='web1'  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src="/web1.png"/>
                <div className='rounded-lg image-overlay image-overlay-blur '>
                  <h3>Streetwear apparel site</h3>
                  <p>The site was made as a wordpress theme. I created my own theme because I will be able to add Woocommerce to it in the future.</p>
                  <p className='px-5'>Technology i used is html, bootstrap, javascript, php and scss.</p>
                </div>
                </a>
              </div>
              <div className= 'basis-1/3 flex-1 relative text-center'>
                <a href='https://ecommerce-wodusq.vercel.app/?fbclid=IwAR1K5AK4-P7jqclpd49rm2H7fqdM7sTL2iGGrRmuPYev0UaVFSvsoAicfys' target="_blank" className='cursor-pointer'><Image alt='web2' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src="/web2.png"/>
                <div className='rounded-lg image-overlay image-overlay-blur '>
                  <h3>Full stack eCommerce application</h3>
                  <p className='px-5'>Technology i used is Next.js, strapi, cloudinary, auth0, stripe and more. </p>
                </div>
                </a>
              </div>
              <div className= 'basis-1/3 flex-1 relative text-center'>
                <a href='https://wodusq.github.io/three-js-app/?fbclid=IwAR2x-q25o4RxuXxAlDm8y2WF-TzKs5mv-scAn5FvALPwZkLaY_ma_nFgDfQ' target="_blank" className='cursor-pointer'><Image alt='web3' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src="/web3.png"/>
                <div className='rounded-lg image-overlay image-overlay-blur '>
                  <h3>Three.js simple application</h3>
                  <p className='px-5'>Technology i used is Three.js</p>
                </div>
                </a>
              </div>
              <div className= 'basis-1/3 flex-1 relative text-center'>
                <a href='https://github.com/wodusq' target="_blank" className='cursor-pointer'><Image alt='web4' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' src="/web4.jpg"/>
                <div className='rounded-lg image-overlay image-overlay-blur '>
                  <h3>My GitHub</h3>
                  <p className='px-5'>You can find more on my GitHub page. </p>
                </div>
                </a>
              </div>
          </div>
        </section> 
      </main>
    </div>
  )
}
