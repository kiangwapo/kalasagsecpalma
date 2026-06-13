import { motion } from "motion/react";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Kian Palma",
    role: "Chief Executive Officer",
    credentials: "CISSP · MBA",
    bio: "15+ years in cybersecurity leadership. Former CISO at BDO Unibank and principal security advisor to the Department of Information and Communications Technology.",
    avatar:
      "https://images.preview.ph/preview/images/2022/03/29/277536102_506770490828280_2861017802425857804_n.jpg?w=300&h=300&fit=crop&crop=face",
    color: "#e01b24",
  },
  {
    name: "Jose Rafael Cruz",
    role: "Chief Technology Officer",
    credentials: "OSCP · GREM",
    bio: "Security researcher and malware analyst. Discovered three CVEs in Philippine government portals and led red team operations for DICT's national cyber readiness program.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    color: "#3b82f6",
  },
  {
    name: "Ana Reyes",
    role: "Head of Threat Intelligence",
    credentials: "CEH · GCTI",
    bio: "Former AFP-AFPCERT analyst specializing in APT tracking and nation-state cyber operations. Named one of Asia's Top 40 Cybersecurity Leaders by CSO Asia.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    color: "#a855f7",
  },
  {
    name: "Miguel Dela Rosa",
    role: "Director of SOC Operations",
    credentials: "CISM · GCIH",
    bio: "Built and led the SOC for two major Philippine telco companies. Expert in security operations at enterprise scale with 24/7 team management across Manila and Cebu.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    color: "#10b981",
  },
];

export function Team() {
  return (
    <section id="team" className="py-28 bg-[#08111f] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(224,27,36,0.05)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e01b24]/10 border border-[#e01b24]/20 rounded-full text-[#e01b24] text-xs font-semibold uppercase tracking-widest mb-5"
          >
            Our Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-white mb-5"
            style={{ fontWeight: 800 }}
          >
            Defenders Who've
            <br />
            <span className="text-[#e01b24]">Seen It All</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Our leadership team brings elite experience from
            government, banking, telco, and international
            cybersecurity firms — proudly Filipino, globally
            capable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#0b1424] border border-gray-800/60 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: member.color }}
              />

              <div className="p-6">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 border-2 border-gray-700/60 group-hover:border-gray-500 transition-colors duration-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3
                  className="text-white mb-0.5"
                  style={{ fontWeight: 700 }}
                >
                  {member.name}
                </h3>
                <div className="text-sm text-gray-400 mb-1">
                  {member.role}
                </div>
                <div className="text-[10px] font-semibold text-[#e01b24] mb-4 tracking-wider">
                  {member.credentials}
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-5">
                  {member.bio}
                </p>

                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-lg bg-[#1a2a40] hover:bg-[#243450] flex items-center justify-center transition-colors">
                    <Linkedin className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[#1a2a40] hover:bg-[#243450] flex items-center justify-center transition-colors">
                    <Twitter className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}