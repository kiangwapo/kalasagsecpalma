import { motion } from "motion/react";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060d1f]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5JTIwZGFyayUyMHRlY2hub2xvZ3klMjBoYWNrZXJ8ZW58MXx8fHwxNzgxMzM3NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(224,27,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(224,27,36,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#e01b24]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#e01b24]/10 border border-[#e01b24]/30 rounded-full text-[#e01b24] text-sm font-medium mb-8"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Philippines' Premier Cybersecurity Partner</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#e01b24] animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Stop Breaches
          <br />
          <span className="text-[#e01b24]">Before They Strike.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          KalasagSec delivers world-class cybersecurity intelligence, endpoint protection, and 24/7
          threat monitoring — purpose-built for Philippine enterprises, government agencies, and
          critical infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-[#e01b24] hover:bg-[#c01620] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-[#e01b24]/20 hover:shadow-[#e01b24]/40 hover:scale-105"
          >
            Start Free Assessment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200">
            <Play className="w-4 h-4 fill-current" />
            Watch Demo
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { label: "Threats Blocked", value: "2.4B+" },
            { label: "Enterprise Clients", value: "500+" },
            { label: "Response Time", value: "<15 min" },
            { label: "Uptime SLA", value: "99.99%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl text-white mb-1" style={{ fontWeight: 700 }}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060d1f] to-transparent" />
    </section>
  );
}
