import TVShowsCarousel from "../Components/TVShowsCarousel";
import Carousel from "../Components/Carousel";

export default function TVShows() {
    return (
        <div className="m-6 ml-16 mr-16">
            <div data-aos="fade-right">
                <div className="text-white flex items-center" >
                    <p className="text-2xl font-bold mr-7">TV Shows</p>
                    <select className="bg-black border-2 p-0.5">
                        <option>Popular on Netflix</option>
                        <option>Trending Now</option>
                        <option>Top Rated</option>
                    </select>
                </div>
                <div className="mt-4">
                   <p className="text-white text-[20px]">Top 10 TV Shows in the U.S. Today</p> 
                   <div>
                        <TVShowsCarousel/>
                   </div>
                </div>
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    );
}