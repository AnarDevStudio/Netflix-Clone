import Carousel from "../Components/Carousel";

export default function MoviesPage() {
  return (
    <div className="m-6 ml-16 mr-16">
        <div data-aos="fade-right" className="flex items-center mb-4">
            <p className="text-2xl font-bold mr-7 text-white" >Movies</p>
            <select className="border-2 p-0.5 border-white text-white bg-black">
                <option>Popular on Netflix</option>
                <option>Trending Now</option>
                <option>Top Rated</option>
            </select>      
        </div>
        <div>
            <Carousel />
        </div>
    </div>
  );
}