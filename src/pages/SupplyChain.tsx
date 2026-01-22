import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/shared/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export default function SupplyChain() {
  const contentRef = useScrollAnimation();

  return (
    <Layout>
      <PageHero 
        title="Supply Chain & Distribution"
        breadcrumb="Services"
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
            <p className="text-foreground text-lg leading-relaxed">
              Secure and timely delivery, cold-chain management where required, full traceability, and risk-managed logistics across Iraq and the Middle East.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
