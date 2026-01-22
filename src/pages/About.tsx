import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/shared/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export default function About() {
  const contentRef = useScrollAnimation();
  const visionRef = useScrollAnimation();

  return (
    <Layout>
      <PageHero 
        title="About MonoCare"
        breadcrumb="Company"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={contentRef.ref}
            className={cn(
              "max-w-3xl mx-auto transition-all duration-700",
              contentRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-foreground text-lg leading-relaxed mb-6">
              MonoCare specializes in the importation, registration, marketing, and distribution of pharmaceutical products and medical supplies across Iraq and selected Middle Eastern markets.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-12">
              We act as an authorized local partner for reputable international manufacturers, facilitating regulatory approvals and market access in compliance with Iraqi MOH, KRG authorities, and regional frameworks.
            </p>

            <div 
              ref={visionRef.ref}
              className={cn(
                "space-y-6 transition-all duration-700 delay-100",
                visionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">Vision</h2>
                <p className="text-muted-foreground">
                  To become a trusted regional leader recognized for regulatory excellence and quality assurance.
                </p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">Mission</h2>
                <p className="text-muted-foreground">
                  To improve healthcare delivery through safe, effective, and compliant products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
