export default function Carousel() {
    var list = [1, 2, 3, 4, 5,6];
    return (
        <div className="mt-20 ">
            <div>
                <p className="font-bold text-2xl text-white mb-6" data-aos="fade-right">Popular on Netflix</p>
                <div className="flex space-x-2">
                    {list.map((item) => (
                       <div key={item} className="h-35 bg-red-500 w-70 rounded-[5px]" data-aos="fade-up">
                            <img className="h-9 m-3" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Netflix_2016_N_logo.svg" alt="Logo" />
                        </div> 
                    ))}
                </div>
                <p className="font-bold text-2xl text-white mb-4 mt-20" data-aos="fade-right">Popular on Netflix</p>
                <div className="flex space-x-2">
                    {list.map((item) => (
                       <div key={item} className="h-35 bg-red-500 w-70 rounded-[5px]" data-aos="fade-up">
                            <img className="h-9 m-3" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Netflix_2016_N_logo.svg" alt="Logo" />
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    );
}