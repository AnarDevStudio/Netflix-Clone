import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navItems = [
        "Home",
        "TV Shows",
        "Movies",
        "New & Popular",
        "My List",
        "Browse By Laungues"
    ];

    const navigate = useNavigate();
    return (
        <nav>
            <div className="flex items-center">
                <div className="h-20 flex items-center mr-10" data-aos="fade-down">
                    <img className="h-10 " src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                </div>
                <div className="text-white font-normal" data-aos="fade-down">
                    <ul className="space-x-3 font-normal select-none">
                        {navItems.map((item) => (
                            <i key={item} className="cursor-pointer hover:underline" onClick={() => {navigate(`${items}`)}}>{item}</i>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}