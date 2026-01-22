import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/shared/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export default function Regulatory() {
  const contentRef = useScrollAnimation();

  return (
    <Layout>
      <PageHero 
        title="Regulatory Affairs & Compliance"
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
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Product registration and dossier preparation, MOH correspondence, import permits, clearance documentation, and pharmacovigilance coordination.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              Aligned with Iraqi MOH, KRG MOH, WHO guidelines, and regional regulatory practices.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
