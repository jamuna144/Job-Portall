import portal from "../assets/portal.webp";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <img
          src={portal}
          alt="portal logo"
          className="w-20 h-20 object-cover rounded-full"
        />

        <h1 className="text-xl font-bold text-cyan-400 tracking-wide">
          Jamuna Career Sites
        </h1>
      </div>

      <ul className="flex gap-6 text-sm md:text-base">
        <li>
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
