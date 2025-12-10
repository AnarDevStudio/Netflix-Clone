import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";


export default function NSeries() {
    return (
        <div>
            <div className="absolute top-0 left-0 w-full h-screen -z-40">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                    backgroundImage:
                        "url('https://wallpapercat.com/w/full/8/c/f/124601-3840x2160-desktop-4k-stranger-things-wallpaper-image.jpg')",
                    }}
                >
                    <div className="absolute bottom-0 left-0 w-full h-60 bg-linear-to-t from-black/99 to-transparent"></div>
                </div>
            </div>
            <div className="mt-16 flex items-center space-x-3" data-aos="fade-right">
                <img className="h-15" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Netflix_2016_N_logo.svg" alt="Logo" />
                <p className="text-white ml-4 text-3xl tracking-[10px]">SERIES</p>
            </div>
            <div className="mt-10" data-aos="fade-right">
                <img className="h-50" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Stranger_Things_logo.svg" alt="" />
            </div>
            <div data-aos="fade-right">
                <div className="text-white flex flex-col" >
                    <div className="flex items-center space-x-4 mt-4">
                        <img className="h-10" src="https://www.netflix.com/tudum/top10/images/top10.png" alt="top-10" />
                        <p className="font-bold text-2xl">#1 in TV Shows Today</p>
                    </div>
                    <div className="mt-3">
                        <p>A small-town mystery unfolds after a sudden disappearance,<br /> leading to hidden experiments, supernatural forces,<br /> and a story driven by friendship, suspense, and 1980s nostalgia.</p> 
                        <div className="flex">
                            <button className="bg-white cursor-pointer text-black font-bold px-6 py-2 mt-4 rounded-md hover:bg-gray-300 flex items-center"><FaPlay/>Play</button>
                            <button className="bg-gray-700 cursor-pointer text-white font-bold px-6 py-2 mt-4 ml-4 rounded-md hover:bg-gray-600 flex items-center "><IoIosInformationCircleOutline/>More Info</button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}