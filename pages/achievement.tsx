import Head from "next/head";
import Image from 'next/image';
import Achievement from '../public/store/Achievement.json';

export default function achievement() {
    return (
        <div>
            <Head>
                <title>Subhasree M</title>
                <link rel="icon" href="./logo.png" />
            </Head>

            <main className="bg-gray-800">
                <section className="project overflow-hidden text-gray-700 h-[590px]">
                    <h1 className="text-3xl text-white text-center mt-10 font-semibold tracking-widest font-serif mb-10">Achievements</h1>
                    <div className="flex p-10 flex-row flex-wrap justify-around">
                        {Achievement.map((item) => {
                            return (
                                <div className="relative w-300 h-300 boxshadow hover:scale-105">
                                    <Image
                                        src={item.link}
                                        alt="Image Description"
                                        width={400}
                                        height={400}
                                        className="rounded-lg"
                                    />
                                    <div className="absolute bottom-0 text-center w-[400px] font-medium bg-black bg-opacity-60 p-4 rounded-lg text-white">
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}
