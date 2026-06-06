

import { useState, useEffect } from "react";
import portal from "../assets/portal.webp";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenu = () => setOpenMenu(null);

  useEffect(() => {
    const handleClickOutside = () => setOpenMenu(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="relative z-[999] bg-gradient-to-r from-indigo-100 via-white to-cyan-100 text-gray-900 px-6 py-4 flex justify-between items-center shadow-md">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-10">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={portal}
            alt="portal logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <h1 className="text-xl font-bold text-cyan-500 flex items-center gap-1">
            Jamuna Career Sites
          </h1>
        </div>

        {/* MENU */}
        <ul className="flex gap-8 text-sm md:text-base">

          {/* JOBS */}
          <li
            className="relative cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu("jobs");
            }}
          >
            <div className="flex items-center gap-1 hover:text-cyan-600">
              Browse Jobs <FaChevronDown size={12} />
            </div>

            {openMenu === "jobs" && (
              <div className="absolute top-10 left-0 bg-white p-3 rounded-md shadow-lg w-96 grid grid-cols-2 gap-2 z-[1000]">

                <Link to="/it-jobs" onClick={closeMenu}>IT Jobs</Link>
                <Link to="/market-jobs" onClick={closeMenu}>Marketing Jobs</Link>
                <Link to="/finance-jobs" onClick={closeMenu}>Finance Jobs</Link>
                <Link to="/engineer-jobs" onClick={closeMenu}>Engineering Jobs</Link>
                <Link to="/remote-jobs" onClick={closeMenu}>Remote Jobs</Link>
                <Link to="/internship-jobs" onClick={closeMenu}>Internships</Link>
                <Link to="/fresher-jobs" onClick={closeMenu}>Fresher Jobs</Link>
                <Link to="/part-time-jobs" onClick={closeMenu}>Part-time Jobs</Link>
                <Link to="/full-time-jobs" onClick={closeMenu}>Full-time Jobs</Link>
                <Link to="/healthcare-jobs" onClick={closeMenu}>Healthcare Jobs</Link>
                <Link to="/banking-jobs" onClick={closeMenu}>Banking & Finance</Link>
                <Link to="/sales-jobs" onClick={closeMenu}>Sales & Marketing</Link>
                <Link to="/freelance-jobs" onClick={closeMenu}>Freelance Jobs</Link>
                <Link to="/international-jobs" onClick={closeMenu}>International Jobs</Link>

              </div>
            )}
          </li>

          {/* TRAININGS */}
          <li
            className="relative cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu("trainings");
            }}
          >
            <div className="flex items-center gap-1 hover:text-cyan-600">
              Trainings <FaChevronDown size={12} />
            </div>

            {openMenu === "trainings" && (
              <div className="absolute top-10 left-0 bg-gray-800 text-white p-3 rounded-md shadow-lg w-48 z-[1000]">

                <Link to="/training/online" onClick={closeMenu} className="block py-2 hover:text-cyan-400">
                  Online Training
                </Link>

                <Link to="/training/offline" onClick={closeMenu} className="block py-2 hover:text-cyan-400">
                  Offline Training
                </Link>

                <Link to="/training/certifications" onClick={closeMenu} className="block py-2 hover:text-cyan-400">
                  Certifications
                </Link>

              </div>
            )}
          </li>

          {/* CONTACT */}
          <li
            className="relative cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu("contact");
            }}
          >
            <div className="flex items-center gap-1 hover:text-cyan-600">
              Contact <FaChevronDown size={12} />
            </div>

            {openMenu === "contact" && (
              <div className="absolute top-10 left-0 bg-white text-gray-900 p-3 rounded-md shadow-lg w-48 z-[1000]">

                <Link to="/contact" onClick={closeMenu} className="block py-2 hover:text-cyan-600">
                  Contact Us
                </Link>

                <Link to="/support" onClick={closeMenu} className="block py-2 hover:text-cyan-600">
                  Support
                </Link>

              </div>
            )}
          </li>

        </ul>
      </div>

      {/* RIGHT SIDE */}
      <ul className="flex gap-5 text-sm md:text-base">

        <li>
          <Link to="/login" className="hover:text-cyan-600 transition">
            Login
          </Link>
        </li>

        <li>
          <Link to="/register" className="hover:text-cyan-600 transition">
            Register
          </Link>
        </li>

        <li className="hover:text-cyan-600 cursor-pointer">
          For Employers
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;