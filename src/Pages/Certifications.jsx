const certifications = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon",
    level: "Beginner",
    duration: "6 Weeks",
  },
  {
    id: 2,
    title: "Google Data Analytics",
    issuer: "Google",
    level: "Intermediate",
    duration: "8 Weeks",
  },
  {
    id: 3,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    level: "Beginner",
    duration: "5 Weeks",
  },
  {
    id: 4,
    title: "Meta Front-End Developer",
    issuer: "Meta",
    level: "Intermediate",
    duration: "10 Weeks",
  },
  {
    id: 5,
    title: "Cisco CCNA",
    issuer: "Cisco",
    level: "Advanced",
    duration: "12 Weeks",
  },
  {
    id: 6,
    title: "Oracle Java Certification",
    issuer: "Oracle",
    level: "Intermediate",
    duration: "8 Weeks",
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
        Professional Certifications
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full mb-4">
              {cert.level}
            </span>

            <h2 className="text-xl font-bold text-slate-800 mb-4">
              {cert.title}
            </h2>

            <div className="space-y-2 text-slate-600">
              <p>
                🏢 <span className="font-medium">Issuer:</span>{" "}
                {cert.issuer}
              </p>

              <p>
                ⏳ <span className="font-medium">Duration:</span>{" "}
                {cert.duration}
              </p>
            </div>

            <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}