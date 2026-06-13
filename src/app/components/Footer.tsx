import { Shield, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  Platform: ["Endpoint Protection", "Threat Intelligence", "SOC as a Service", "Cloud Security", "Identity Protection"],
  Services: ["Incident Response", "Penetration Testing", "Vulnerability Assessment", "Security Training", "DFIR Retainer"],
  Industries: ["Banking & Finance", "Government & Public Sector", "Healthcare", "Telecommunications", "BPO & Outsourcing"],
  Company: ["About KalasagSec", "Leadership Team", "Careers", "Press & Media", "Partner Program"],
  Resources: ["Blog & Insights", "Threat Reports", "Webinars", "Case Studies", "Documentation"],
};

export function Footer() {
  return (
    <footer className="bg-[#03080f] border-t border-gray-900">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#e01b24] rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-white font-bold tracking-tight">KALASAG</span>
                <span className="text-[#e01b24] font-bold tracking-tight">SEC</span>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-5">
              Philippines' leading cybersecurity firm. Protecting enterprises, government agencies,
              and critical infrastructure since 2015.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-[#0b1424] hover:bg-[#152035] border border-gray-800 hover:border-gray-600 rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5 text-gray-400 hover:text-gray-200" />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-6 space-y-1.5">
              {["ISO 27001 Certified", "BSP Accredited", "PCI-DSS Compliant", "SOC 2 Type II"].map(
                (cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e01b24]" />
                    <span className="text-[10px] text-gray-500">{cert}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency banner */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#e01b24] animate-pulse" />
              <span className="text-xs text-gray-400">
                <span className="font-semibold text-white">24/7 Cyber Emergency Line:</span>{" "}
                +63 (2) 8888-SAFE • Emergency: +63 917-KALASAG
              </span>
            </div>
            <a
              href="#contact"
              className="px-5 py-2 bg-[#e01b24] hover:bg-[#c01620] text-white text-xs font-semibold rounded-lg transition-colors duration-200"
            >
              Report an Incident
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © 2024 KalasagSec Philippines, Inc. All rights reserved. Makati City, Metro Manila.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Responsible Disclosure"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
