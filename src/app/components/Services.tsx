import { useState } from "react";
import { motion } from "motion/react";
import {
  Monitor,
  Eye,
  Siren,
  Cloud,
  TestTube2,
  ShieldAlert,
  GraduationCap,
  Search,
  Check,
  X,
  Zap,
  Building2,
  Crown,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Endpoint Detection & Response",
    description:
      "AI-powered protection for every endpoint across your organization. Real-time threat detection with sub-second response for laptops, servers, and mobile devices.",
    tag: "Core Platform",
    highlight: true,
  },
  {
    icon: Eye,
    title: "Threat Intelligence & Monitoring",
    description:
      "24/7 visibility into the Philippine and Asia-Pacific threat landscape. Curated intelligence feeds with contextual analysis from our expert analysts.",
    tag: "Intelligence",
  },
  {
    icon: Siren,
    title: "SOC as a Service",
    description:
      "Our Manila-based Security Operations Center monitors your environment around the clock. Certified analysts triage, investigate, and escalate with precision.",
    tag: "Managed Service",
  },
  {
    icon: ShieldAlert,
    title: "Incident Response & Forensics",
    description:
      "Rapid deployment of our elite response team during a breach. We contain threats, recover operations, and uncover root cause within hours — not days.",
    tag: "Response",
  },
  {
    icon: Cloud,
    title: "Cloud Security & Compliance",
    description:
      "Secure your AWS, Azure, and GCP environments while meeting BSP, NPC, and ISO 27001 compliance requirements specific to Philippine regulations.",
    tag: "Cloud",
  },
  {
    icon: TestTube2,
    title: "Penetration Testing & Red Team",
    description:
      "Our certified offensive security team simulates real-world attacks to expose vulnerabilities before malicious actors do. Full red team engagements available.",
    tag: "Offensive Security",
  },
  {
    icon: Search,
    title: "Vulnerability Assessment",
    description:
      "Continuous scanning and prioritized remediation across your entire attack surface — from web apps to network infrastructure and OT systems.",
    tag: "Assessment",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    description:
      "Localized Filipino-language training programs that transform your employees into a human firewall. Phishing simulations and interactive courses included.",
    tag: "Training",
  },
];

const plans = [
  {
    id: "starter",
    icon: Zap,
    name: "Sentinel",
    tagline: "For small businesses & startups",
    priceMonthly: 9900,
    priceAnnual: 7900,
    color: "#3b82f6",
    badge: null,
    description: "Core protection to get your business secured fast — endpoint defense, basic monitoring, and compliance essentials.",
    features: [
      { label: "Endpoint Detection & Response", included: true, note: "Up to 50 devices" },
      { label: "24/7 Threat Monitoring", included: true, note: "Dashboard access" },
      { label: "Weekly Threat Reports", included: true },
      { label: "BSP / NPC Compliance Templates", included: true },
      { label: "Security Awareness Training", included: true, note: "5 users" },
      { label: "SOC as a Service", included: false },
      { label: "Incident Response Retainer", included: false },
      { label: "Penetration Testing", included: false },
      { label: "Dedicated Account Manager", included: false },
      { label: "Custom Threat Intelligence", included: false },
    ],
    cta: "Start Free Trial",
    ctaSecondary: false,
  },
  {
    id: "professional",
    icon: Building2,
    name: "Kalasag Pro",
    tagline: "For growing enterprises",
    priceMonthly: 29900,
    priceAnnual: 23900,
    color: "#e01b24",
    badge: "Most Popular",
    description: "Full-spectrum protection with our Manila SOC team, active threat hunting, and quarterly pen tests.",
    features: [
      { label: "Endpoint Detection & Response", included: true, note: "Unlimited devices" },
      { label: "24/7 Threat Monitoring", included: true, note: "SOC-backed alerts" },
      { label: "Daily Threat Reports", included: true },
      { label: "BSP / NPC Compliance Templates", included: true },
      { label: "Security Awareness Training", included: true, note: "Unlimited users" },
      { label: "SOC as a Service", included: true, note: "8/5 coverage" },
      { label: "Incident Response Retainer", included: true, note: "4 hrs/quarter" },
      { label: "Penetration Testing", included: true, note: "1× / year" },
      { label: "Dedicated Account Manager", included: true },
      { label: "Custom Threat Intelligence", included: false },
    ],
    cta: "Get Protected",
    ctaSecondary: false,
  },
  {
    id: "enterprise",
    icon: Crown,
    name: "Fortress",
    tagline: "For large orgs & government",
    priceMonthly: null,
    priceAnnual: null,
    color: "#a855f7",
    badge: "Custom",
    description: "Tailored, white-glove cybersecurity operations including dedicated analysts, custom threat intel, and unlimited IR engagements.",
    features: [
      { label: "Endpoint Detection & Response", included: true, note: "Unlimited + OT/ICS" },
      { label: "24/7 Threat Monitoring", included: true, note: "Dedicated analysts" },
      { label: "Real-Time Threat Reports", included: true },
      { label: "BSP / NPC Compliance Templates", included: true },
      { label: "Security Awareness Training", included: true, note: "Unlimited + localized" },
      { label: "SOC as a Service", included: true, note: "24/7 dedicated SOC" },
      { label: "Incident Response Retainer", included: true, note: "Unlimited" },
      { label: "Penetration Testing", included: true, note: "Quarterly red team" },
      { label: "Dedicated Account Manager", included: true },
      { label: "Custom Threat Intelligence", included: true, note: "PH-specific APT feed" },
    ],
    cta: "Contact Sales",
    ctaSecondary: true,
  },
];

export function Services() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="services" className="py-28 bg-[#060d1f] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(224,27,36,0.06)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e01b24]/10 border border-[#e01b24]/20 rounded-full text-[#e01b24] text-xs font-semibold uppercase tracking-widest mb-5"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-white mb-5"
            style={{ fontWeight: 800 }}
          >
            Comprehensive Security
            <br />
            <span className="text-[#e01b24]">For Every Threat Vector</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From prevention to response, our integrated platform gives your organization the
            full-spectrum protection it needs to stay resilient.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl ${
                  service.highlight
                    ? "bg-[#e01b24]/10 border-[#e01b24]/40 hover:border-[#e01b24] hover:shadow-[#e01b24]/10"
                    : "bg-[#0b1424] border-gray-800/60 hover:border-gray-600 hover:shadow-black/40"
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 text-[10px] font-bold text-[#e01b24] bg-[#e01b24]/10 px-2 py-0.5 rounded-full border border-[#e01b24]/30">
                    FEATURED
                  </div>
                )}

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    service.highlight ? "bg-[#e01b24]" : "bg-[#e01b24]/10 group-hover:bg-[#e01b24]/20"
                  } transition-colors duration-300`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      service.highlight ? "text-white" : "text-[#e01b24]"
                    }`}
                  />
                </div>

                <div className="text-[10px] font-semibold text-[#e01b24] uppercase tracking-widest mb-2">
                  {service.tag}
                </div>

                <h3 className="text-white mb-3 leading-snug" style={{ fontWeight: 700 }}>
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                <div className="mt-5 flex items-center gap-1 text-[#e01b24] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more
                  <span className="text-lg leading-none">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Subscription Plans ───────────────────────────── */}
        <div className="mt-28">
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e01b24]/10 border border-[#e01b24]/20 rounded-full text-[#e01b24] text-xs font-semibold uppercase tracking-widest mb-5"
            >
              Subscription Plans
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl text-white mb-4"
              style={{ fontWeight: 800 }}
            >
              Pick Your
              <span className="text-[#e01b24]"> Shield</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-xl mx-auto mb-8"
            >
              Transparent pricing. No hidden fees. Cancel anytime. All plans include our Philippine-compliant security baseline.
            </motion.p>

            {/* Billing toggle */}
            <div className="inline-flex items-center gap-1 bg-[#0b1424] border border-gray-800/60 rounded-full p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  !annual ? "bg-[#e01b24] text-white shadow-md" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  annual ? "bg-[#e01b24] text-white shadow-md" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Annual
                <span className="text-[10px] bg-green-500/20 text-green-400 border border-green-600/30 px-1.5 py-0.5 rounded-full font-bold">
                  −20%
                </span>
              </button>
            </div>
          </div>

          {/* Plan cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              const price = annual ? plan.priceAnnual : plan.priceMonthly;
              const isPopular = plan.badge === "Most Popular";

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    isPopular
                      ? "bg-[#0e1628] border-[#e01b24]/60 shadow-2xl shadow-[#e01b24]/10 scale-[1.02]"
                      : "bg-[#0b1424] border-gray-800/60 hover:border-gray-600"
                  }`}
                >
                  {/* Top accent line */}
                  <div className="h-1 w-full" style={{ backgroundColor: plan.color }} />

                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className="absolute top-5 right-5 text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${plan.color}20`,
                        color: plan.color,
                        border: `1px solid ${plan.color}50`,
                      }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div className="p-7">
                    {/* Icon + name */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${plan.color}18` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: plan.color }} />
                    </div>

                    <h3 className="text-white mb-0.5" style={{ fontWeight: 800 }}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 text-xs mb-5">{plan.tagline}</p>

                    {/* Price */}
                    <div className="mb-5">
                      {price ? (
                        <div className="flex items-end gap-1.5">
                          <span className="text-gray-400 text-sm">₱</span>
                          <span className="text-4xl text-white" style={{ fontWeight: 800 }}>
                            {price.toLocaleString()}
                          </span>
                          <span className="text-gray-500 text-sm mb-1">/mo</span>
                        </div>
                      ) : (
                        <div className="text-3xl text-white" style={{ fontWeight: 800 }}>
                          Custom
                        </div>
                      )}
                      {annual && price && (
                        <p className="text-green-400 text-xs mt-1">
                          Save ₱{((plan.priceMonthly! - price) * 12).toLocaleString()} per year
                        </p>
                      )}
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    {/* CTA */}
                    <a
                      href="#contact"
                      className={`block w-full text-center py-3 rounded-xl text-sm font-semibold mb-6 transition-all duration-200 hover:scale-[1.02] ${
                        plan.ctaSecondary
                          ? "border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
                          : "text-white"
                      }`}
                      style={
                        !plan.ctaSecondary
                          ? {
                              backgroundColor: plan.color,
                              boxShadow: `0 8px 24px ${plan.color}30`,
                            }
                          : {}
                      }
                    >
                      {plan.cta}
                    </a>

                    {/* Feature list */}
                    <div className="space-y-3 border-t border-gray-800/60 pt-5">
                      {plan.features.map((feature) => (
                        <div key={feature.label} className="flex items-start gap-2.5">
                          <div className="mt-0.5 flex-shrink-0">
                            {feature.included ? (
                              <Check className="w-4 h-4" style={{ color: plan.color }} />
                            ) : (
                              <X className="w-4 h-4 text-gray-700" />
                            )}
                          </div>
                          <div>
                            <span
                              className={`text-xs ${
                                feature.included ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {feature.label}
                            </span>
                            {feature.note && feature.included && (
                              <span className="ml-1.5 text-[10px] text-gray-500 font-medium">
                                ({feature.note})
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-600 text-xs mt-8"
          >
            All prices in Philippine Peso (PHP), exclusive of VAT. Annual plans billed upfront. Need a custom quote?{" "}
            <a href="#contact" className="text-[#e01b24] hover:underline">
              Talk to our team →
            </a>
          </motion.p>
        </div>
        {/* ── End Subscription Plans ───────────────────────── */}

      </div>
    </section>
  );
}
