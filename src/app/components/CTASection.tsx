import { motion } from "motion/react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#08111f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(224,27,36,0.08)_0%,_transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(224,27,36,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(224,27,36,0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — contact info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e01b24]/10 border border-[#e01b24]/20 rounded-full text-[#e01b24] text-xs font-semibold uppercase tracking-widest mb-6">
                Contact Us
              </div>

              <h2
                className="text-4xl md:text-5xl text-white mb-6 leading-tight"
                style={{ fontWeight: 800 }}
              >
                Ready to Secure
                <br />
                <span className="text-[#e01b24]">Your Organization?</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Get a free security assessment from our team. We'll evaluate your current posture
                and provide a tailored roadmap to protect what matters most.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    label: "24/7 Hotline",
                    value: "+63 (2) 8888-SAFE",
                    sub: "Emergency: +63 917-KALASAG",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "protect@kalasagsec.ph",
                    sub: "Response within 1 hour",
                  },
                  {
                    icon: MapPin,
                    label: "Headquarters",
                    value: "6788 Ayala Ave, Makati City",
                    sub: "Metro Manila, Philippines 1226",
                  },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#e01b24]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#e01b24]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                        {label}
                      </div>
                      <div className="text-white text-sm font-semibold">{value}</div>
                      <div className="text-gray-500 text-xs">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-[#0b1424] border border-gray-800/60 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#e01b24]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <ArrowRight className="w-8 h-8 text-[#e01b24]" />
                  </div>
                  <h3 className="text-white mb-3" style={{ fontWeight: 700 }}>
                    Request Received!
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Our team will contact you within 1 business hour. Check your email for a
                    confirmation and preliminary security checklist.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-white mb-6" style={{ fontWeight: 700 }}>
                    Request Free Assessment
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#060d1f] border border-gray-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e01b24]/60 transition-colors placeholder-gray-600"
                        placeholder="Maria Santos"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#060d1f] border border-gray-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e01b24]/60 transition-colors placeholder-gray-600"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-[#060d1f] border border-gray-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e01b24]/60 transition-colors placeholder-gray-600"
                      placeholder="BancoPilipino Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Service of Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#060d1f] border border-gray-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e01b24]/60 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option>Endpoint Detection & Response</option>
                      <option>SOC as a Service</option>
                      <option>Threat Intelligence</option>
                      <option>Incident Response</option>
                      <option>Penetration Testing</option>
                      <option>Vulnerability Assessment</option>
                      <option>Cloud Security</option>
                      <option>Security Training</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Tell Us About Your Needs
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#060d1f] border border-gray-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e01b24]/60 transition-colors resize-none placeholder-gray-600"
                      placeholder="Describe your security challenges or what you're looking to protect..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e01b24] hover:bg-[#c01620] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#e01b24]/20 hover:shadow-[#e01b24]/30 hover:scale-[1.02]"
                  >
                    Request Free Assessment
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-gray-600 text-center">
                    Your information is secured with 256-bit encryption. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
