import { useState } from "react";
import portal from "../assets/portal.webp";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenu = () => setOpenMenu(null);

  return (
    <nav className="relative z-[999] bg-gradient-to-r from-indigo-100 via-white to-cyan-100 text-gray-900 px-6 py-4 flex justify-between items-center shadow-md">

      <div className="flex items-center gap-10">

        <div className="flex items-center gap-3">
          <img
            src={portal}
            alt="portal logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <h1 className="text-xl font-bold text-cyan-500 tracking-wide flex items-center gap-1">
            Jamuna Career Sites
            <FaChevronDown size={12} />
          </h1>
        </div>

        <ul className="flex gap-8 text-sm md:text-base">

          <li className="relative cursor-pointer" onClick={() => toggleMenu("jobs")}>
            <div className="flex items-center gap-1 hover:text-cyan-600">
              Browse Jobs <FaChevronDown size={12} />
            </div>

            {openMenu === "jobs" && (
              <div className="absolute top-10 left-0 bg-white p-3 rounded-md shadow-lg w-96 grid grid-cols-2 gap-2 z-[1000]">

                <Link to="/it-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  IT Jobs
                </Link>

                <Link to="/market-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Marketing Jobs
                </Link>

                <Link to="/finance-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Finance Jobs
                </Link>

                <Link to="/engineer-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Engineering Jobs
                </Link>

                <Link to="/remote-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Remote Jobs
                </Link>

                <Link to="/internships" onClick={closeMenu} className="hover:text-cyan-600">
                  Internships
                </Link>

                <Link to="/fresher-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Fresher Jobs
                </Link>

                <Link to="/part-time-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Part-time Jobs
                </Link>

                <Link to="/full-time-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Full-time Jobs
                </Link>

                <Link to="/healthcare-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Healthcare Jobs
                </Link>

                <Link to="/banking-finance-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Banking & Finance
                </Link>

                <Link to="/sales-marketing-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Sales & Marketing
                </Link>

                <Link to="/freelance-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  Freelance Jobs
                </Link>

                <Link to="/international-jobs" onClick={closeMenu} className="hover:text-cyan-600">
                  International Jobs
                </Link>

              </div>
            )}
          </li>

          <li className="relative cursor-pointer" onClick={() => toggleMenu("trainings")}>
            <div className="flex items-center gap-1 hover:text-cyan-600">
              Trainings <FaChevronDown size={12} />
            </div>

            { openMenu === "trainings" && (
              <div className="absolute top-10 left-0 bg-gray-800 text-white p-3 rounded-md shadow-lg w-48 z-[1000]">

                <Link
                  to="/training/online"
                  onClick={closeMenu}
                  className="block py-2 hover:text-cyan-400"
                >
                  Online Training
                </Link>

                <Link
                  to="/training/offline"
                  onClick={closeMenu}
                  className="block py-2 hover:text-cyan-400"
                >
                  Offline Training
                </Link>

                <Link
                  to="/training/certifications"
                  onClick={closeMenu}
                  className="block py-2 hover:text-cyan-400"
                >
                  Certifications
                </Link>

              </div>
            )}

          </li>

          <li className="relative cursor-pointer" onClick={() => toggleMenu("services")}>
            <div className="flex items-center gap-1 hover:text-cyan-600">
              Services <FaChevronDown size={12} />
            </div>

            {openMenu === "services" && (
              <div className="absolute top-10 left-0 bg-gray-800 text-white p-3 rounded-md shadow-lg w-40 z-[1000]">
                <p className="hover:text-cyan-400">Resume Help</p>
                <p className="hover:text-cyan-400">Career Advice</p>
                <p className="hover:text-cyan-400">Interview Prep</p>
              </div>
            )}
          </li>

          <li className="relative cursor-pointer" onClick={() => toggleMenu("blogs")}>
            <div className="flex items-center gap-1 hover:text-cyan-600">
              Blogs <FaChevronDown size={12} />
            </div>

            {openMenu === "blogs" && (
              <div className="absolute top-10 left-0 bg-gray-800 text-white p-3 rounded-md shadow-lg w-40 z-[1000]">
                <p className="hover:text-cyan-400">Tech</p>
                <p className="hover:text-cyan-400">Career Tips</p>
                <p className="hover:text-cyan-400">News</p>
              </div>
            )}
          </li>

        </ul>
      </div>

      <ul className="flex gap-5 text-sm md:text-base">
        <li className="hover:text-cyan-600 cursor-pointer">Login</li>
        <li className="hover:text-cyan-600 cursor-pointer">Register</li>
        <li className="hover:text-cyan-600 cursor-pointer">For Employers</li>
      </ul>

    </nav>
  );
};

export default Navbar;