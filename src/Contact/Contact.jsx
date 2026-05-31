import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // Simulate send
    setTimeout(() => {
      console.log("Contact form submitted:", form);
      setStatus("Message sent — thank you!");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact Us</h2>
      <p className="text-slate-300 mb-6">
        Have a question or want to collaborate? Send us a message.
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-cyan-400"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-cyan-400"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={6}
            required
            className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-cyan-400"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="bg-cyan-500 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-cyan-600 transition"
          >
            Send Message
          </button>
          {status && <span className="text-sm text-slate-400">{status}</span>}
        </div>
      </form>
    </section>
  );
};

export default Contact;
