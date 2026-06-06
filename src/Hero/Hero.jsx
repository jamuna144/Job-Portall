import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Find Your <span className="text-cyan-400">Dream Job</span> Easily 🚀
      </h1>

      <p className="text-gray-400 mt-5 text-lg md:text-xl">
        Search thousands of jobs from top companies and apply instantly
      </p>

      <div className="mt-10 flex justify-center">
        <div className="flex w-full md:w-2/3 lg:w-1/2 shadow-lg">

          <input
            type="text"
            placeholder="Search jobs, companies, skills..."
            className="w-full px-5 py-3 bg-gray-700 text-white outline-none rounded-l-lg"
          />

          <button className="bg-cyan-500 px-6 py-3 rounded-r-lg hover:bg-cyan-600">
            Search
          </button>

        </div>
      </div>


      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 text-gray-300">

        <div>
          <h3 className="text-2xl font-bold text-white">10K+</h3>
          <p>Active Jobs</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">5K+</h3>
          <p>Companies</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">20K+</h3>
          <p>Job Seekers</p>
        </div>

      </div>

    </section>
  );
}