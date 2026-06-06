export default function Login() {
  return (
    <div className="min-h-screen flex bg-stone-200">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 text-white flex-col justify-center items-center p-10">

        <h1 className="text-4xl font-bold mb-4 text-center">
          Find Your Next Opportunity
        </h1>

        <p className="text-center text-stone-300 mb-10">
          Stand out to 40,000+ top employers today
        </p>

        <img
          src="https://www.kathrynsollmann.com/wp-content/uploads/2017/04/ID-10091682.jpg"
          alt="login-illustration"
          className="w-96"
        />
      </div>

      {/* RIGHT SIDE (NO WHITE - SOFT WARM BACKGROUND) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-stone-200">

        <div className="w-full max-w-md bg-stone-100 p-8 rounded-2xl shadow-lg border border-stone-300">

          <h2 className="text-2xl font-bold text-stone-900 mb-2">
            Candidate Login
          </h2>

          <p className="text-sm text-stone-600 mb-6">
            Login with your registered Email & Password
          </p>

          {/* EMAIL */}
          <label className="text-sm font-medium text-stone-700">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full bg-stone-50 border border-stone-300 rounded-lg p-3 mt-1 mb-4 outline-none focus:ring-2 focus:ring-stone-700 focus:border-stone-700"
          />

          {/* PASSWORD */}
          <label className="text-sm font-medium text-stone-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-stone-50 border border-stone-300 rounded-lg p-3 mt-1 mb-4 outline-none focus:ring-2 focus:ring-stone-700 focus:border-stone-700"
          />

          {/* OPTIONS */}
          <div className="flex justify-between text-sm mb-6">
            <label className="flex items-center gap-2 text-stone-600">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-stone-800 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* LOGIN BUTTON */}
          <button className="w-full bg-stone-900 hover:bg-stone-800 active:scale-[0.99] transition text-white py-3 rounded-lg font-semibold">
            Login
          </button>

          {/* OR */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-stone-300"></div>
            <p className="px-3 text-sm text-stone-500">OR</p>
            <div className="flex-1 h-px bg-stone-300"></div>
          </div>

          {/* GOOGLE LOGIN */}
          <button className="w-full bg-stone-50 border border-stone-300 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-stone-200 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5"
              alt="google"
            />
            Login with Google
          </button>

          {/* REGISTER */}
          <p className="text-center text-sm mt-6 text-stone-700">
            Don’t have an account?{" "}
            <a href="/register" className="text-stone-900 font-medium hover:underline">
              Register Now
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}