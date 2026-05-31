import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

function App() {
  const [route, setRoute] = useState(() => window.location.hash || "#home");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const renderRoute = () => {
    if (route === "#contact") return <Contact />;
    if (route === "#about")
      return (
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            About Jamuna Career Sites
          </h2>
          <p className="text-slate-300">
            This is a simple job portal built for demonstration purposes.
          </p>
        </div>
      );
    // default home
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Welcome</h2>
        <p className="text-slate-300">
          Find jobs, internships and career resources.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />
      <main className="flex-1">{renderRoute()}</main>
      <Footer />
    </div>
  );
}

export default App;
