import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "KalasagSec detected and contained a ransomware attack within 8 minutes — before a single file was encrypted. Their SOC team is exceptional, truly best-in-class for the Philippines.",
    author: "Carlos Mendoza",
    role: "CISO, BancoPilipino",
    industry: "Banking & Finance",
    stars: 5,
  },
  {
    quote:
      "After a targeted phishing campaign hit three of our executives, KalasagSec overhauled our entire security posture. Six months later, we passed our BSP cybersecurity audit with zero findings.",
    author: "Ria Gonzalez",
    role: "VP Technology, PhilTelco Group",
    industry: "Telecommunications",
    stars: 5,
  },
  {
    quote:
      "The localized threat intelligence is invaluable — we get reports on attacks targeting Philippine government portals before they're public knowledge. No other vendor offers this depth.",
    author: "Dir. Ramon Aquino",
    role: "Director, DICT Regional Office",
    industry: "Government",
    stars: 5,
  },
];

const sectors = [
  "BDO Unibank",
  "Globe Telecom",
  "PLDT Enterprise",
  "Ayala Corporation",
  "SM Investments",
  "DICT Philippines",
  "PSEi Listed Firms",
  "Metrobank",
];

export function Clients() {
  return (
    <section className="py-28 bg-[#060d1f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.05)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Trusted by */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">
            Trusted by Leading Philippine Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {sectors.map((name) => (
              <div
                key={name}
                className="px-5 py-2.5 bg-[#0b1424] border border-gray-800/60 rounded-lg text-gray-500 text-sm font-medium hover:text-gray-300 hover:border-gray-600 transition-all duration-200 cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-16" />

        {/* Testimonials */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e01b24]/10 border border-[#e01b24]/20 rounded-full text-[#e01b24] text-xs font-semibold uppercase tracking-widest mb-5"
          >
            Client Success Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-white"
            style={{ fontWeight: 800 }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#0b1424] border border-gray-800/60 rounded-2xl p-7 flex flex-col justify-between hover:border-gray-600 transition-all duration-300"
            >
              {/* Stars */}
              <div>
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#e01b24] text-[#e01b24]" />
                  ))}
                </div>

                <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="border-t border-gray-800/60 pt-5">
                <div className="text-white text-sm font-semibold">{t.author}</div>
                <div className="text-gray-500 text-xs mt-0.5">{t.role}</div>
                <div className="mt-2 inline-block text-[10px] font-semibold text-[#e01b24] bg-[#e01b24]/10 px-2 py-0.5 rounded-full border border-[#e01b24]/20">
                  {t.industry}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
