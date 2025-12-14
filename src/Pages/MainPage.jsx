import Navbar from "../Components/Navbar";
import NSeries from "../Components/NSeries";
import Carousel from "../Components/Carousel";
export default function MainPage() {
    return (
        <div className="m-6 ml-16 mr-16">
            <NSeries />
            <Carousel />
        </div>
    );
}