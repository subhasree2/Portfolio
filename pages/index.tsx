import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import Image from 'next/image';
import Web from '../public/images/Web.webp';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='no-scrollbar overflow-hidden'>
      <Head>
        <title>Subhasree M</title>
        <link rel="icon" href="./logo.png" />
      </Head>

      <main>
        <section className="h-[590px] bg-gray-800">
          <div className='text-center py-7'>
            <h2 className='text-5xl py-1 text-teal-200 font-medium'>Subhasree M</h2>
            <h3 className='text-4xl py-4 text-white'>Web Developer</h3>
            <p className='text-2xl text-white leading-9 pt-5 pl-20 pr-20 tracking-wide'>Greetings! I'm Subhasree, a committed web developer passionate about user-friendly web experiences. Venturing into web development has been thrilling, and I'm eager to share it with you🌐</p>
          </div>
          <div className='ml-auto mr-auto h-50 w-80 py-3'>
            <Image src={Web} alt="Dummy" className='rounded-2xl border-l-white' />
          </div>
          <div className='text-5xl flex justify-center gap-16 py-6 text-gray-600'>
            <Link href="https://github.com/subhasree2" target="_blank" ><AiFillGithub className='text-teal-500' /></Link>
            <Link href="https://www.linkedin.com/in/subhasree-m/" target="_blank" ><AiFillLinkedin className='text-teal-500' /></Link>
            <Link href="https://twitter.com/M_Subhasree02/" target="_blank" ><AiFillTwitterCircle className='text-teal-500' /></Link>
            <Link href="https://discord.com/users/868179959557029889" target="_blank"><BsDiscord className='text-teal-500' /> </Link>
            <Link href={`mailto:subhasreemurugan6@gmail.com`} ><BiLogoGmail className='text-teal-500' /> </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
