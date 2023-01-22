import Modal from "@/components/Modal";
import Head from "next/head";
import { useState } from "react";
import ProjectsData from "../public/store/ProjectsData.json";

export default function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [Content, setContent] = useState({});

    function Open(project) {
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
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <main>
                <section className="overflow-hidden text-gray-700 bg-gray-800 min-h-screen">
                    <Modal isVisible={showModal} onClose={() => setShowModal(false)} Content={Content} />
                    <h1 className="text-3xl text-white text-center py-1 font-semibold mt-2">My Projects</h1>
                    <div className="container px-5 mx-auto lg:pt-12 lg:px-32">
                        {ProjectsData.map((project) => {
                            return (
                                <div className="rounded-lg border-teal-500 border-b-2 mb-8 p-7 shadow-lg hover:border-2 hover:bg-gray-700 hover:border-none hover:cursor-pointer" key={project.id}>
                                    <div className="p-1 lg:flex">
                                        <img alt="gallery" src={project.img} className="w-200 h-64" width={400} height={100} />
                                        <div className="flex-row text-white pl-10">
                                            <h3 className="text-2xl pb-5 text-teal-400  font-semibold">{project.id}</h3>
                                            <p className="text-1xl leading-7 text-justify">{project.overview}</p>
                                            <div className="flex space-x-2 justify-center">
                                                <button type="button" className="border-none mt-6 p-2 w-48 rounded-md bg-teal-400 text-gray-800 font-medium border-gray-800 bg-opacity-80 hover:bg-opacity-100" onClick={() => Open(project)}>Quick view</button>
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