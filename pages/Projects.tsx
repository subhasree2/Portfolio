import Modal from "@/components/Modal";
import Head from "next/head";
import Image from 'next/image';
import { useState } from "react";
import ProjectsData from "../public/store/ProjectsData.json";

interface Project {
    id: string,
    overview: string,
    img: string,
    gif: string,
    code: string,
    link: string
}

export default function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [Content, setContent] = useState({});

    function Open(project: Project) {
        setShowModal(true);
        setContent({
            id: project["id"],
            overview: project["overview"],
            img: project["img"],
            gif: project["gif"],
            code: project["code"],
            link: project["link"]
        })
    }

    return (
        <div>
            <Head>
                <title>Subhasree M</title>
                <link rel="icon" href="./logo.png" />
            </Head>

            <main>
                <section className="overflow-hidden text-gray-700 min-h-screen project">
                    <Modal isVisible={showModal} onClose={() => setShowModal(false)} Content={Content} />
                    <h1 className="text-4xl text-white text-center py-2 font-bold mt-4 tracking-widest font-serif">Projects Showcase</h1>
                    <div className="container px-5 mx-auto lg:pt-12 lg:px-32">
                        {ProjectsData.map((project) => {
                            return (
                                <div className="rounded-lg boxshadow border-teal-500 mb-8 p-7 shadow-lg hover:border-2 hover:bg-gray-600 hover:border-none" key={project.id}>
                                    <div className="p-1 lg:flex">
                                        <Image src={project.img} alt="Project" width={400} height={400}/>
                                        <div className="flex-row text-white pl-10">
                                            <h3 className="text-[28px] pb-5 text-teal-400 font-semibold tracking-widest">{project.id}</h3>
                                            <p className="text-1xl leading-7 text-justify line-clamp-3 overflow-hidden">{project.overview}</p>
                                            <div className="flex space-x-2 justify-center">
                                                <button type="button" className="border-none mt-6 p-2 w-48 rounded-md bg-teal-400 text-gray-900 font-medium border-gray-800" onClick={() => Open(project)}>Quick view</button>
                                            </div>
                                        </div>
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