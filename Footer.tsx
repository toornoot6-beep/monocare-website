import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "About MonoCare" },
      { href: "/divisions", label: "Divisions" },
      { href: "/portfolio", label: "Product Portfolio" },
      { href: "/partners", label: "Partners & Manufacturers" },
    ],
    services: [
      { href: "/regulatory", label: "Regulatory Affairs" },
      { href: "/quality-assurance", label: "Quality Assurance" },
      { href: "/supply-chain", label: "Supply Chain" },
      { href: "/aesthetics", label: "Aesthetic & Wellness" },
    ],
    connect: [
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  };

  return (
    <footer className="bg-mono-navy text-primary-foreground">
      <div className="container-narrow section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-mono-navy font-bold text-sm">MC</span>
              </div>
              <span className="text-xl font-semibold">MonoCare</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Licensed pharmaceutical and medical supplies company operating in Iraq and the Middle East.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+9647504272042"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone size={16} />
                +9647504272042
              </a>
              <a
                href="tel:+9647748888085"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone size={16} />
                +9647748888085
              </a>
              <a
                href="mailto:info@monocare.health"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail size={16} />
                info@monocare.health
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3 text-primary-foreground/70 text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>MonoCare – Iraq & Middle East</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} MonoCare. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Regulatory Compliant • Quality Assured • Patient First
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
