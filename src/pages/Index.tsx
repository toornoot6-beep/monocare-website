import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export default function Index() {
  const heroRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div 
            ref={heroRef.ref}
            className={cn(
              "max-w-4xl transition-all duration-700",
              heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
              MonoCare
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
              MonoCare is a licensed pharmaceutical and medical supplies company operating in Iraq and the Middle East. We support healthcare systems through the reliable supply of high-quality medicines, medical devices, and healthcare solutions.
            </p>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
              Our operations are built on regulatory compliance, quality assurance, and ethical business conduct, ensuring patient safety and institutional trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Overview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={contentRef.ref}
            className={cn(
              "max-w-3xl mx-auto text-center transition-all duration-700",
              contentRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Button asChild>
              <Link to="/divisions">
                Explore Our Divisions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
