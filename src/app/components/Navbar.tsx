import { useState, useEffect } from "react";
import { Shield, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Platform",
    children: ["Endpoint Protection", "Threat Intelligence", "SOC as a Service", "Cloud Security"],
  },
  {
    label: "Services",
    children: ["Incident Response", "Penetration Testing", "Vulnerability Assessment", "Security Training"],
  },
  { label: "Industries", children: ["Banking & Finance", "Government", "Healthcare", "Telco & Utilities"] },
  { label: "Resources", children: ["Blog", "Reports", "Webinars", "Case Studies"] },
  { label: "About", children: ["Company", "Leadership", "Careers", "Contact"] },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#060d1f]/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-[#e01b24] rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#e01b24] rounded-full opacity-60 animate-pulse" />
          </div>
          <div>
            <span className="text-white text-xl font-bold tracking-tight">KALASAG</span>
            <span className="text-[#e01b24] text-xl font-bold tracking-tight">SEC</span>
            <div className="text-[10px] text-gray-400 tracking-widest uppercase -mt-1">Philippines</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
                {item.label}
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-[#0e1628] border border-gray-700/50 rounded-xl shadow-2xl py-2 z-50">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#e01b24]/10 transition-colors duration-150"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#" className="text-sm text-gray-300 hover:text-white font-medium transition-colors">
            Log In
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#e01b24] hover:bg-[#c01620] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
          >
            Get Protected
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#060d1f]/98 border-t border-gray-800 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="text-gray-300 font-medium text-sm w-full text-left py-2"
                onClick={() =>
                  setActiveDropdown(activeDropdown === item.label ? null : item.label)
                }
              >
                {item.label}
              </button>
              {activeDropdown === item.label && (
                <div className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <a key={child} href="#" className="block text-sm text-gray-400 py-1.5 hover:text-white">
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contact"
            className="block w-full text-center px-5 py-3 bg-[#e01b24] text-white text-sm font-semibold rounded-lg mt-4"
          >
            Get Protected
          </a>
        </div>
      )}
    </nav>
  );
}
