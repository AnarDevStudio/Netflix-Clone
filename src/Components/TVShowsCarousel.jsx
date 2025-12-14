import React, { useEffect, useState } from "react";


export default function TVShowsCarousel(){
     const [data, setData] = useState([]);
    
        useEffect(() => {
            fetch("/data.json")
                .then((response) => response.json())
                .then((json) => setData(json.film2)) 
                .catch((err) => console.error(err));
        }, []);

    return(
        <div className="flex gap-20">
        {data.map((item) => (
            <div
            data-aos="fade-right"
            key={item.id}
            className="relative flex items-center select-none mt-10 ml-20 group cursor-pointer"
            >
            <p className="absolute -left-30 text-[350px] font-bold text-black leading-none">
                <span className="[-webkit-text-stroke:4px_#393939] text-[#141414]">
                {item.id}
                </span>
            </p>

            <img
                className="z-20 h-70 w-60 group-hover:translate-3 transition-all"
                src={item.poster}
                alt={`Top ${item.id} TV Show`}
            />
            </div>
        ))}
        </div>

    );
}