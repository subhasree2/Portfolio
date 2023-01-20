import Head from "next/head";

export default function education() {
    return (
        <div>
            <Head>
                <title>Subhasree M</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <main>
                <section className="overflow-hidden text-gray-700 bg-gray-800 min-h-screen">
                    <h1 className="text-3xl text-white text-center mt-10 font-semibold">Education</h1>
                    <div className="flex mx-auto mt-10 p-7 items-center justify-center">
                        <div className="text-white flex-row text-1xl leading-8 border-2 border-teal-500 p-8 mr-4 w-100px hover:scale-105 hover:bg-teal-800 hover:cursor-pointer">
                            <h3>R.M.K. Engineering College</h3>
                            <span>Bachelor of Engineering - BE, Computer Science</span> <br />
                            <span>2020 - 2024</span> <br />
                            <sub>CGPA : 9.58</sub> <br />
                            <button className="bg-yellow-400 text-black w-24 h-7 mt-3 rounded-md text-center flex items-center justify-center">Present</button>
                        </div>
                        <div className="text-white flex-row text-1xl leading-8 border-2 border-teal-500 p-10 mr-4 w-96 hover:scale-105 hover:bg-teal-800 hover:cursor-pointer">
                            <h3>12<sup>th</sup> Standard</h3>
                            <span>J.G.V.V. Higher Secondary School</span> <br />
                            <span>Biology Group - 2020</span> <br />
                            <sub>Percentage : 90.83%</sub> <br />
                        </div>
                        <div className="text-white flex-row text-1xl leading-8 border-2 border-teal-500 p-10 mr-4 w-96 hover:scale-105 hover:bg-teal-800 hover:cursor-pointer">
                            <h3>10<sup>th</sup> Standard</h3>
                            <span>K.M.S Higher Secondary School</span> <br />
                            <span>2018</span> <br />
                            <sub>Percentage : 97.6%</sub> <br />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
};