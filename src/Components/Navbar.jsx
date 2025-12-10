export default function Navbar() {
    return (
        <nav>
            <div className="flex items-center">
                <div className="h-20 flex items-center mr-10" data-aos="fade-down">
                    <img className="h-10 " src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                </div>
                <div className="text-white font-normal" data-aos="fade-down">
                    <ul className="space-x-3 font-normal select-none">
                        <i className="cursor-pointer">Home</i>
                        <i className="cursor-pointer">TV Shows</i>
                        <i className="cursor-pointer">Movies</i>
                        <i className="cursor-pointer">New & Popular</i>
                        <i className="cursor-pointer">My List</i>
                        <i className="cursor-pointer">Browse By Laungues</i>
                    </ul>
                </div>
            </div>
        </nav>
    );
}