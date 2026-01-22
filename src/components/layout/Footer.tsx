import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Divisions', path: '/divisions' },
    { name: 'Product Portfolio', path: '/products' },
    { name: 'Regulatory Affairs', path: '/regulatory' },
    { name: 'Quality Assurance', path: '/quality' },
  ],
  operations: [
    { name: 'Supply Chain', path: '/supply-chain' },
    { name: 'Aesthetic & Wellness', path: '/aesthetic' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-lg">MC</span>
              </div>
              <span className="font-display font-semibold text-xl">MonoCare</span>
            </Link>
            <div className="space-y-3">
              <a href="tel:+9647504272042" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>+9647504272042</span>
              </a>
              <a href="tel:+9647748888085" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>+9647748888085</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>Iraq & Middle East</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Operations</h4>
            <ul className="space-y-3">
              {footerLinks.operations.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © MonoCare – All Rights Reserved
          </p>
          <div className="flex gap-6">
            <span className="text-primary-foreground/60 text-sm">
              Privacy Policy
            </span>
            <span className="text-primary-foreground/60 text-sm">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
