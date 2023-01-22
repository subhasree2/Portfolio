import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import Image from 'next/image';
import Web from '../public/images/Web.webp';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='no-scrollbar overflow-hidden'>
      <Head>
        <title>Subhasree M</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <section className="min-h-fit bg-gray-800">
          <div className='text-center py-10'>
            <h2 className='text-5xl py-1 text-teal-200 font-medium'>Subhasree M</h2>
            <h3 className='text-4xl py-5 text-white'>Web Developer</h3>
            <p className='text-2xl text-white leading-9'>Aspiring Software Engineer with interest in web development <br /> Visit the links below to know more about me 🙂</p>
          </div>
          <div className='ml-auto mr-auto h-50 w-80 py-3'>
            <Image src={Web} alt="Dummy" className='rounded-2xl border-l-white' />
          </div>
          <div className='text-5xl flex justify-center gap-16 py-6 text-gray-600'>
            <Link href="https://github.com/subhasree2" target="_blank" ><AiFillGithub className='text-teal-500' /></Link>
            <Link href="https://www.linkedin.com/in/subhasree-m/" target="_blank" ><AiFillLinkedin className='text-teal-500' /></Link>
            <Link href="https://twitter.com/M_Subhasree02/" target="_blank" ><AiFillTwitterCircle className='text-teal-500' /></Link>
            <Link href="https://discord.com/users/868179959557029889" target="_blank"><BsDiscord className='text-teal-500' /> </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
