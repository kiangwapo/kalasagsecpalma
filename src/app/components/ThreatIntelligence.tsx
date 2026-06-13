import { motion } from "motion/react";
import { Activity, AlertTriangle, Globe2, Zap } from "lucide-react";

const threats = [
  { name: "APT-PH-2024-LOTUS", type: "Advanced Persistent Threat", severity: "Critical", origin: "East Asia", status: "Active", time: "2m ago" },
  { name: "RANSOMWARE-MANILA-3X", type: "Ransomware Campaign", severity: "High", origin: "Eastern Europe", status: "Monitoring", time: "14m ago" },
  { name: "PHISH-BSP-CLONE-91", type: "Phishing / BEC", severity: "High", origin: "West Africa", status: "Contained", time: "32m ago" },
  { name: "SUPPLY-CHAIN-NODEJS", type: "Supply Chain Attack", severity: "Medium", origin: "Unknown", status: "Analyzing", time: "1h ago" },
  { name: "DDOS-GOV-PHL-0X7", type: "DDoS Attack", severity: "Medium", origin: "Multiple", status: "Mitigated", time: "2h ago" },
];

const severityColor: Record<string, string> = {
  Critical: "text-red-400 bg-red-900/30 border-red-800",
  High: "text-orange-400 bg-orange-900/20 border-orange-800",
  Medium: "text-yellow-400 bg-yellow-900/20 border-yellow-800",
  Low: "text-green-400 bg-green-900/20 border-green-800",
};

const statusColor: Record<string, string> = {
  Active: "bg-red-500",
  Monitoring: "bg-yellow-500",
  Contained: "bg-blue-500",
  Analyzing: "bg-purple-500",
  Mitigated: "bg-green-500",
};

export function ThreatIntelligence() {
  return (
    <section className="py-28 bg-[#08111f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(224,27,36,0.07)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e01b24]/10 border border-[#e01b24]/20 rounded-full text-[#e01b24] text-xs font-semibold uppercase tracking-widest mb-6">
                Live Intelligence
              </div>

              <h2
                className="text-4xl md:text-5xl text-white mb-6 leading-tight"
                style={{ fontWeight: 800 }}
              >
                Real-Time Philippine
                <br />
                <span className="text-[#e01b24]">Threat Landscape</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our Threat Intelligence Center continuously monitors threat actors targeting
                Philippine government agencies, BPO companies, banks, and critical infrastructure —
                giving you actionable intelligence before attacks land.
              </p>

              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { icon: Activity, label: "Threats Tracked", value: "1,200+", sub: "Active IOCs today" },
                  { icon: AlertTriangle, label: "Alerts Issued", value: "48", sub: "Last 24 hours" },
                  { icon: Globe2, label: "Countries Monitored", value: "60+", sub: "Attack origins" },
                  { icon: Zap, label: "Avg. Detection", value: "0.3s", sub: "Time to alert" },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <div
                    key={label}
                    className="bg-[#0b1424] border border-gray-800/60 rounded-xl p-4"
                  >
                    <Icon className="w-5 h-5 text-[#e01b24] mb-2" />
                    <div className="text-xl text-white mb-0.5" style={{ fontWeight: 700 }}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="text-[10px] text-gray-600 mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#e01b24] hover:bg-[#c01620] text-white font-semibold rounded-lg transition-colors duration-200"
              >
                View Threat Feed →
              </a>
            </motion.div>
          </div>

          {/* Right — live threat table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-[#0b1424] border border-gray-800/60 rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e01b24] animate-pulse" />
                  <span className="text-sm text-white font-semibold">LIVE Threat Feed</span>
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                  Updated 2s ago
                </span>
              </div>

              <div className="divide-y divide-gray-800/40">
                {threats.map((threat, i) => (
                  <motion.div
                    key={threat.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    className="px-5 py-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="text-white text-sm font-mono font-semibold mb-0.5">
                          {threat.name}
                        </div>
                        <div className="text-gray-500 text-xs">{threat.type}</div>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          severityColor[threat.severity]
                        }`}
                      >
                        {threat.severity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${statusColor[threat.status]}`}
                        />
                        <span className="text-xs text-gray-500">{threat.status}</span>
                        <span className="text-gray-700">·</span>
                        <span className="text-xs text-gray-600">{threat.origin}</span>
                      </div>
                      <span className="text-[10px] text-gray-600">{threat.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="px-5 py-3 bg-[#060d1f] border-t border-gray-800/60 text-center">
                <a href="#" className="text-xs text-[#e01b24] hover:text-red-300 font-medium">
                  View full threat intelligence dashboard →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
