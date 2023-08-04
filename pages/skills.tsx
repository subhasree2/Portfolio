import Head from "next/head";
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiJava, DiBootstrap, DiReact, DiPython, DiWordpress, DiMysql, DiDocker, DiSublime, DiIntellij } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiC, SiCplusplus, SiSqlite, SiVisualstudio, SiVisualstudiocode, SiFirebase, SiGithubactions, SiJetbrains } from 'react-icons/si';

export default function skills() {
    return (
        <div>
            <Head>
                <title>Subhasree M</title>
                <link rel="icon" href="./logo.png" />
            </Head>

            <main className="overflow-hidden text-gray-700 project">
                <section>
                <h1 className="text-4xl text-white text-center py-1 font-semibold mt-8 tracking-widest font-serif">Expertise</h1>
                    <div className="border-2 shadow-lg mt-10 mr-36 ml-36 rounded-md p-6 text-center hover:scale-105 boxshadow">
                        <h3 className="text-white text-3xl text-left font-serif">Programming Languages</h3>
                        <div className="flex gap-10 mt-9 text-7xl text-yellow-400 items-center justify-center align-middle">
                            <div className="flex hover:scale-110">
                                <SiC />
                                <span className="pl-2 text-2xl text-center my-auto">C language</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <SiCplusplus />
                                <span className="pl-2 text-2xl text-center my-auto">C++</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <DiJava />
                                <span className="pl-2 text-2xl text-center my-auto">Java</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <DiPython />
                                <span className="pl-2 text-2xl text-center my-auto">Python</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 shadow-lg mt-10 mr-36 ml-36 rounded-md p-6 text-center boxshadow">
                        <h3 className="text-white text-3xl text-left font-serif">Web Stack</h3>
                        <div className="flex gap-10 mt-9 text-7xl text-yellow-400 items-center justify-center align-middle">
                            <div className="flex hover:scale-110">
                                <AiFillHtml5 />
                                <span className="pl-2 text-2xl text-center my-auto">HTML5</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <DiCss3 />
                                <span className="pl-2 text-2xl text-center my-auto">CSS3</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <DiBootstrap />
                                <span className="pl-2 text-2xl text-center my-auto">Bootstrap</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <SiTailwindcss />
                                <span className="pl-2 text-2xl text-center my-auto">Tailwind CSS</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <DiJavascript1 />
                                <span className="pl-2 text-2xl text-center my-auto">JavaScript</span>
                            </div>
                        </div>

                        <div className="flex gap-10 mt-9 text-7xl text-yellow-400 items-center justify-center align-middle">
                            <div className="flex hover:scale-110">
                                <DiReact />
                                <span className="pl-2 text-2xl text-center my-auto">React</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <SiNextdotjs />
                                <span className="pl-2 text-2xl text-center my-auto">Next.js</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <DiWordpress />
                                <span className="pl-2 text-2xl text-center my-auto">Wordpress</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 shadow-lg mt-10 mr-36 ml-36 mb-10 rounded-md p-6 text-center boxshadow">
                        <h3 className="text-white text-3xl text-left font-serif">Tools</h3>
                        <div className="flex gap-10 mt-9 text-7xl text-yellow-400 items-center justify-center align-middle">
                            <div className="flex hover:scale-110">
                                <SiVisualstudio />
                                <span className="pl-2 text-2xl text-center my-auto">Visual Studio</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <SiVisualstudiocode />
                                <span className="pl-2 text-2xl text-center my-auto">Visual Studio Code</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <DiSublime />
                                <span className="pl-2 text-2xl text-center my-auto">Sublime Text</span>
                            </div>
                        </div>
                        <div className="flex gap-10 mt-9 text-7xl text-yellow-400 items-center justify-center align-middle">
                            <div className="flex hover:scale-110">
                                <AiFillGithub />
                                <span className="pl-2 text-2xl text-center my-auto">Github</span>
                            </div>
                            <div className="flex hover:scale-110">
                                <SiJetbrains />
                                <span className="pl-2 text-2xl text-center my-auto">Jetbrains Rider</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}