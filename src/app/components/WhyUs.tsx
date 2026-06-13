import { motion } from "motion/react";
import { CheckCircle2, Clock, Users2, Award, MapPin, Headphones } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Philippine-First Focus",
    description:
      "Deep expertise in local regulations — BSP Circular 982, NPC Act 10173, and DICT cybersecurity frameworks. Our team understands the unique threat landscape facing Filipino businesses.",
  },
  {
    icon: Clock,
    title: "24/7/365 Local SOC",
    description:
      "Our Security Operations Center in Makati City never sleeps. Philippine-time analysts with deep local context — no offshore handoffs, no language barriers.",
  },
  {
    icon: Users2,
    title: "Elite Certified Team",
    description:
      "CISSP, CEH, OSCP, and CISM certified professionals with decades of combined experience securing government, banking, telco, and enterprise environments.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Trusted by 500+ Philippine organizations including government agencies, BSP-regulated banks, and Fortune 500 local subsidiaries. Verified breach prevention record.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Support",
    description:
      "Every client gets a dedicated Security Account Manager and direct escalation line. We're partners in your security journey — not just a vendor you call during emergencies.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance Guaranteed",
    description:
      "We help you meet and maintain compliance with Philippine regulations and global standards including PCI-DSS, ISO 27001, SOC 2, and the NPC's Personal Data Protection Act.",
  },
];

export function WhyUs() {
  return (
    <section className="py-28 bg-[#060d1f] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,22,40,0.8)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e01b24]/10 border border-[#e01b24]/20 rounded-full text-[#e01b24] text-xs font-semibold uppercase tracking-widest mb-5"
          >
            Why KalasagSec
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-white mb-5"
            style={{ fontWeight: 800 }}
          >
            Built for the Philippine
            <br />
            <span className="text-[#e01b24]">Security Landscape</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We don't just resell global products — we build solutions that address the specific
            needs and regulations of Philippine organizations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-7 bg-[#0b1424] border border-gray-800/60 rounded-2xl hover:border-[#e01b24]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#e01b24]/10 group-hover:bg-[#e01b24]/20 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#e01b24]" />
                </div>
                <h3 className="text-white mb-3" style={{ fontWeight: 700 }}>
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
