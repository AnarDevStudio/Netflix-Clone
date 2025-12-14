import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse By Laungues",
  ];

  return (
    <nav>
      <div className="flex items-center">
        <div className="h-20 flex items-center mr-10" data-aos="fade-down">
          <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </div>

        <ul className="flex space-x-4 text-white select-none" data-aos="fade-down">
          {navItems.map((item) => {
            const path = `/${item.replace(/\s+/g, "").toLowerCase()}`;

            return (
              <NavLink
                key={item}
                to={path}
                className={({ isActive }) =>
                  `cursor-pointer transition-all hover:underline ${
                    isActive ? "font-bold" : "font-normal"
                  }`
                }
              >
                {item}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
