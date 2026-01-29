import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Building2, Pill, Shield, Handshake } from "lucide-react";

const megaMenuGroups = [
  {
    title: "Company",
    icon: Building2,
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About MonoCare" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Products & Divisions",
    icon: Pill,
    links: [
      { href: "/divisions", label: "Divisions" },
      { href: "/portfolio", label: "Product Portfolio" },
    ],
  },
  {
    title: "Quality & Compliance",
    icon: Shield,
    links: [
      { href: "/regulatory", label: "Regulatory Affairs & Compliance" },
      { href: "/quality-assurance", label: "Quality Assurance & Storage" },
      { href: "/supply-chain", label: "Supply Chain & Distribution" },
    ],
  },
  {
    title: "Partnerships",
    icon: Handshake,
    links: [
      { href: "/partners", label: "Partners & Manufacturers" },
      { href: "/aesthetics", label: "Aesthetic & Wellness Division" },
    ],
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/divisions", label: "Divisions" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mega-menu-container')) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-background"
        }`}
      >
        <div className="container-narrow section-padding !py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-sm">MC</span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              MonoCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Quick Links */}
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${
                  location.pathname === link.href ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mega Menu Trigger */}
            <div className="mega-menu-container relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMegaMenuOpen(!isMegaMenuOpen);
                }}
                className={`nav-link flex items-center gap-1.5 ${isMegaMenuOpen ? 'text-primary' : ''}`}
              >
                All Pages
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-4 w-[700px] bg-background rounded-2xl shadow-lg border border-border overflow-hidden z-50"
                    style={{ boxShadow: 'var(--shadow-lg)' }}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-8">
                        {megaMenuGroups.map((group) => (
                          <div key={group.title}>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <group.icon className="w-4 h-4 text-primary" />
                              </div>
                              <h3 className="font-semibold text-sm text-foreground">
                                {group.title}
                              </h3>
                            </div>
                            <ul className="space-y-1">
                              {group.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    to={link.href}
                                    className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                                      location.pathname === link.href
                                        ? "bg-accent text-primary font-medium"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Footer CTA */}
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">
                            Need assistance? Get in touch with our team.
                          </p>
                          <Link
                            to="/contact"
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            Contact Us →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-background shadow-2xl pt-24 px-6 overflow-y-auto"
            >
              <div className="space-y-8">
                {megaMenuGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: groupIndex * 0.1, duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <group.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="space-y-1 ml-10">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className={`block py-2 text-sm transition-colors ${
                              location.pathname === link.href
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
