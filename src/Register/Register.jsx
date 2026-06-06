import { useState } from "react";

export default function Register() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex bg-stone-200">

      {/* LEFT SIDE (Marketing Panel) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 text-white flex-col justify-center items-center p-10">

        <h1 className="text-4xl font-bold mb-4 text-center">
          Build Your Career Faster
        </h1>

        <p className="text-center text-stone-300 mb-8">
          Join thousands of job seekers and get discovered by top employers
        </p>

        <ul className="text-stone-300 space-y-2 text-sm">
          <li>✔ 600+ daily job updates</li>
          <li>✔ Verified employers</li>
          <li>✔ Easy application tracking</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-stone-100 p-8 rounded-2xl shadow-lg border border-stone-300">

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-stone-900 mb-1">
            Register as Jobseeker
          </h2>

          <p className="text-sm text-stone-600 mb-6">
            Step {step} of 2 — Complete your profile
          </p>

          {/* PROGRESS BAR */}
          <div className="w-full bg-stone-300 h-2 rounded-full mb-6">
            <div
              className="h-2 bg-stone-800 rounded-full transition-all"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <label className="text-sm text-stone-700">Full Name</label>
              <input className="w-full p-3 mb-4 mt-1 rounded-lg bg-stone-50 border border-stone-300 focus:ring-2 focus:ring-stone-700 outline-none"
                placeholder="Enter your full name"
              />

              <label className="text-sm text-stone-700">Mobile Number</label>
              <input className="w-full p-3 mb-4 mt-1 rounded-lg bg-stone-50 border border-stone-300 focus:ring-2 focus:ring-stone-700 outline-none"
                placeholder="Enter mobile number"
              />

              <button
                onClick={() => setStep(2)}
                className="w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800 transition"
              >
                Continue
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <label className="text-sm text-stone-700">Email</label>
              <input className="w-full p-3 mb-4 mt-1 rounded-lg bg-stone-50 border border-stone-300 focus:ring-2 focus:ring-stone-700 outline-none"
                placeholder="Enter email"
              />

              <label className="text-sm text-stone-700">Password</label>
              <input type="password"
                className="w-full p-3 mb-4 mt-1 rounded-lg bg-stone-50 border border-stone-300 focus:ring-2 focus:ring-stone-700 outline-none"
                placeholder="Create password"
              />

              <label className="text-sm text-stone-700">Confirm Password</label>
              <input type="password"
                className="w-full p-3 mb-4 mt-1 rounded-lg bg-stone-50 border border-stone-300 focus:ring-2 focus:ring-stone-700 outline-none"
                placeholder="Confirm password"
              />

              <div className="flex gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/2 bg-stone-400 text-white py-3 rounded-lg hover:bg-stone-500"
                >
                  Back
                </button>

                <button className="w-1/2 bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800">
                  Register
                </button>
              </div>
            </>
          )}

          {/* LOGIN LINK */}
          <p className="text-center text-sm mt-6 text-stone-600">
            Already have an account?{" "}
            <a href="/login" className="text-stone-900 font-medium hover:underline">
              Login here
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}