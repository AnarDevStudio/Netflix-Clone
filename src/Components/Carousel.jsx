import { useEffect, useState } from "react";

export default function Carousel() {
    const [data, setData] = useState([]);
    var list = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((json) => setData(json.film)) 
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="mt-20">
            <div>
                <p className="font-bold text-2xl text-white mb-6" data-aos="fade-right">
                    Popular on Netflix
                </p>

                <div className="flex space-x-2 select-none">
                    {data.map((item) => (
                        <div key={item.id} className="h-35 group cursor-pointer hover:brightness-75 transition-all bg-red-500 w-70 rounded-[5px]" data-aos="fade-up">
                            <img className="h-9 m-3 group-hover:hidden absolute" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Netflix_2016_N_logo.svg" alt="Logo" />
                            <div className="flex justify-center flex-col p-2 z-60 opacity-0 hover:opacity-100 transition-all duration-300">
                                <p className="text-white ml-3 text-[20px] z-50">{item.title}</p>
                                <p className="text-white ml-3 text-[12px] z-50">{item.description}</p> 
                                <p className="text-white ml-3 text-[12px] z-50">{item.year}</p>                                                            
                            </div>
                        </div>
                    ))}
                </div>

                <p className="font-bold text-2xl text-white mb-4 mt-20" data-aos="fade-right">
                    Popular on Netflix
                </p>

               <div className="flex space-x-2 select-none">
                    {data.map((item) => (
                        <div key={item.id} className="h-35 group cursor-pointer hover:brightness-75 transition-all bg-red-500 w-70 rounded-[5px]" data-aos="fade-up">
                            <img className="h-9 m-3 group-hover:hidden absolute" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Netflix_2016_N_logo.svg" alt="Logo" />
                            <div className="flex justify-center flex-col p-2 z-60 opacity-0 hover:opacity-100 transition-all duration-300">
                                <p className="text-white ml-3 text-[20px] z-50">{item.title}</p>
                                <p className="text-white ml-3 text-[12px] z-50">{item.description}</p> 
                                <p className="text-white ml-3 text-[12px] z-50">{item.year}</p>                                                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
