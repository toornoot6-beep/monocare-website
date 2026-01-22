import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    children: [
      { name: 'Divisions', path: '/divisions' },
      { name: 'Product Portfolio', path: '/products' },
      { name: 'Regulatory Affairs', path: '/regulatory' },
      { name: 'Quality Assurance', path: '/quality' },
      { name: 'Supply Chain', path: '/supply-chain' },
    ]
  },
  { name: 'Partners', path: '/partners' },
  { name: 'Aesthetic & Wellness', path: '/aesthetic' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">MC</span>
            </div>
            <span className="font-display font-semibold text-xl text-foreground">MonoCare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              item.children ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="nav-link px-4 py-2 flex items-center gap-1 text-sm font-medium">
                    {item.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      openDropdown === item.name && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "absolute top-full left-0 pt-2 opacity-0 invisible transition-all duration-200",
                    openDropdown === item.name && "opacity-100 visible"
                  )}>
                    <div className="bg-card rounded-lg shadow-xl border border-border py-2 min-w-[200px] animate-slide-down">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors duration-200",
                            isActive(child.path) 
                              ? "text-primary bg-secondary" 
                              : "text-foreground/80 hover:text-primary hover:bg-secondary"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={cn(
                    "nav-link px-4 py-2 text-sm font-medium",
                    isActive(item.path!) && "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-[600px] pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              item.children ? (
                <div key={item.name}>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 text-foreground/80 hover:text-primary"
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      openDropdown === item.name && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-200",
                    openDropdown === item.name ? "max-h-[300px]" : "max-h-0"
                  )}>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-8 py-2 text-sm text-foreground/70 hover:text-primary"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-foreground/80 hover:text-primary",
                    isActive(item.path!) && "text-primary font-medium"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="px-4 pt-4">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
