const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-100 via-white to-cyan-100 text-gray-800 border-t border-indigo-200">

            <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

                <div>
                    <h2 className="text-xl font-bold text-indigo-600 mb-3">
                        Jamuna Career Sites
                    </h2>
                    <p className="text-sm leading-6 text-gray-600 max-w-sm">
                        A simple job portal footer for jobs, internships, and career updates.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700 mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                            <a className="hover:text-cyan-600 transition" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-cyan-600 transition" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-cyan-600 transition" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700 mb-3">
                        Contact
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                        <p>Email: support@jamunacareers.com</p>
                        <p>Phone: +977 9800000000</p>
                        <p>Location: Nepal</p>
                    </div>
                </div>

            </div>

            <div className="border-t border-indigo-200 px-6 py-4 text-center text-sm text-gray-500">
                © 2026 Jamuna Career Sites. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;