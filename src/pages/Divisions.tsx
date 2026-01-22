import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/shared/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const divisions = [
  {
    title: "Pharmaceuticals",
    description: "Prescription, OTC, hospital, injectable, oral, topical, branded and generic medicines."
  },
  {
    title: "Medical Supplies",
    description: "Surgical instruments, ICU/OR supplies, infection control, monitoring equipment."
  },
  {
    title: "Diagnostics & Laboratory Solutions",
    description: "Diagnostic kits, reagents, consumables, sample systems."
  }
];

export default function Divisions() {
  return (
    <Layout>
      <PageHero 
        title="Divisions"
        breadcrumb="Services"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {divisions.map((division, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div 
                  key={division.title}
                  ref={ref}
                  className={cn(
                    "bg-card rounded-xl p-6 shadow-card border border-border transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                    {division.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {division.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
