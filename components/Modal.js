import Link from "next/link";
import Image from 'next/image';
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({  isVisible , onClose, Content }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black backdrop-blur-sm flex justify-center items-center bg-opacity-60">
            <div className="w-[1000px]">
                <div className="bg-white p-3 rounded-lg">
                    <h1 className="text-3xl font-serif font-medium">{Content[`id`]}</h1>
                    <div className="mt-3 ml-3 mr-3 border-[5px] border-teal-900 p-2 border-solid shadow-lg text-black bg-gradient-to-r from-amber-200 to-yellow-500">
                        <h1 className="text-2xl py-2 first-letter:text-3xl"><span className="font-semibold text-teal-900">O</span>verview</h1>
                        <p className="text-1xl leading-6">{Content['overview']}</p>
                    </div>
                    <Image src={Content['gif']} className="m-2 mx-auto" width={500} height={300}/>
                    <div className="flex align-middle place-items-stretch justify-center mt-5 space-x-4">
                        <button className="px-4 py-2 rounded-md text-1xl font-medium text-white bg-teal-500 mb-2"><Link href={Content["code"]} target="_blank">View Code</Link></button>
                        {Content['link']!="" &&
                            <button className="px-4 py-2 rounded-md text-1xl font-medium text-white bg-teal-500 mb-2"><Link href={Content["link"]} target="_blank">Live Link</Link></button>
                        }
                        <button className="px-4 py-2 rounded-md text-1xl font-medium text-white bg-red-600 mb-2 flex" onClick={() => onClose()} ><AiFillCloseCircle className="text-2xl mr-2"/>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;