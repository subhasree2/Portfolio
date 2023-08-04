import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { PiCertificateDuotone } from 'react-icons/pi';
import CertificateData from '../public/store/CertificateData.json';

interface Certificate {
    name: string;
    Issuer: string;
    Date: string;
    Link: string;
}

export default function education() {
    let index = -1;
    const [certData, setCertData] = useState<Certificate[]>([]);

    useEffect(() => {
        const sortedData = CertificateData.sort((a: Certificate, b: Certificate) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
        setCertData(sortedData);
    }, []);

    return (
        <div>
            <Head>
                <title>Subhasree M</title>
                <link rel="icon" href="./logo.png" />
            </Head>

            <main className="bg-gray-800 project">
                <section className="overflow-hidden text-gray-700">
                    <h1 className="text-3xl text-white text-center mt-10 font-semibold tracking-widest font-serif">Education</h1>
                    <div className="flex mx-auto mt-10 p-7 items-center justify-center">
                        <div className="boxshadow text-white flex-row text-1xl leading-8 border-2 p-8 mr-4 w-100px hover:scale-105 present hover:cursor-pointer">
                            <h3>R.M.K. Engineering College</h3>
                            <span>Bachelor of Engineering - BE, Computer Science</span> <br />
                            <span>2020 - 2024</span> <br />
                            <sub>CGPA : 9.58</sub> <br />
                            <button className="bg-yellow-400 text-black w-24 h-7 mt-3 rounded-md text-center flex items-center justify-center">Present</button>
                        </div>
                        <div className="boxshadow text-white flex-row text-1xl leading-8 border-2 p-10 mr-4 w-96 hover:scale-105 hover:cursor-pointer">
                            <h3>12<sup>th</sup> Standard</h3>
                            <span>J.G.V.V. Higher Secondary School</span> <br />
                            <span>Biology Group - 2020</span> <br />
                            <sub>Percentage : 90.83%</sub> <br />
                        </div>
                        <div className="boxshadow text-white flex-row text-1xl leading-8 border-2 p-10 mr-4 w-96 hover:scale-105 hover:cursor-pointer">
                            <h3>10<sup>th</sup> Standard</h3>
                            <span>K.M.S Higher Secondary School</span> <br />
                            <span>2018</span> <br />
                            <sub>Percentage : 97.6%</sub> <br />
                        </div>
                    </div>
                </section>
                <section className="">
                    <h1 className="text-3xl text-white text-center mt-10 font-semibold tracking-widest font-serif mb-10">Certifications</h1>
                    <div className="mt-15 pl-11 flex flex-col items-center justify-center">
                        {certData.map((cert) => {
                            index++;
                            const flexAlignment = index % 2 != 0 ? 'ml-[150px]' : 'mr-[200px]';

                            return (
                                <div className={`boxshadow border-2 boxshadow flex p-3 w-[70%] text-white mb-5 ${flexAlignment} hover:scale-105`} key={cert.name}>
                                    <PiCertificateDuotone className="w-20 h-20" />
                                    <div className="pl-4">
                                        <h2 className="text-[19px] tracking-wide text-amber-300 font-medium">{cert.name}</h2>
                                        <p>{cert.Issuer} - {cert.Date}</p>
                                        <span className="text-amber-300 italic">Certificate Link : </span><Link href={cert.Link} target="_blank" className="italic">{cert.Link}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </div>
    )
};