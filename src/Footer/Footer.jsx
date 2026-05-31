const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold text-cyan-400 mb-3">
            Jamuna Career Sites
          </h2>
          <p className="text-sm leading-6 text-slate-400 max-w-sm">
            A simple job portal footer for jobs, internships, and career
            updates.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-cyan-400 transition" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 mb-3">
            Contact
          </h3>
          <div className="space-y-2 text-sm text-slate-400">
            <p>Email: support@jamunacareers.com</p>
            <p>Phone: +977 9800000000</p>
            <p>Location: Nepal</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-4 text-center text-sm text-slate-500">
        © 2026 Jamuna Career Sites. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
