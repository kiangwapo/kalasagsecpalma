import { motion } from "motion/react";

const platformStats = [
  { value: "2.4B+", label: "Threats blocked in 2024" },
  { value: "500+", label: "Enterprise clients secured" },
  { value: "15 min", label: "Average response time" },
  { value: "99.99%", label: "Platform uptime SLA" },
  { value: "60+", label: "Countries monitored" },
  { value: "0 days", label: "Successful ransomware encryptions" },
];

export function Platform() {
  return (
    <section className="py-16 bg-[#e01b24] relative overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.1) 20px,
            rgba(255,255,255,0.1) 21px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {platformStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl text-white mb-2" style={{ fontWeight: 800 }}>
                {stat.value}
              </div>
              <div className="text-red-200 text-xs leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
