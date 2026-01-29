import { motion } from "framer-motion";
import { Pill, Stethoscope, Microscope } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Divisions = () => {
  const divisions = [
    {
      icon: Pill,
      title: "Pharmaceuticals",
      description: "Prescription, OTC, hospital, injectable, oral, topical, branded and generic medicines.",
      features: ["Prescription Medications", "Over-the-Counter Products", "Hospital & Injectable", "Oral & Topical", "Branded & Generic"],
    },
    {
      icon: Stethoscope,
      title: "Medical Supplies",
      description: "Surgical instruments, ICU/OR supplies, infection control, monitoring equipment.",
      features: ["Surgical Instruments", "ICU/OR Supplies", "Infection Control", "Monitoring Equipment"],
    },
    {
      icon: Microscope,
      title: "Diagnostics & Laboratory Solutions",
      description: "Diagnostic kits, reagents, consumables, sample systems.",
      features: ["Diagnostic Kits", "Reagents", "Consumables", "Sample Systems"],
    },
  ];

  return (
    <Layout>
      <PageHero
        badge="Divisions"
        title="Our Core Divisions"
        subtitle="Comprehensive healthcare solutions across pharmaceuticals, medical supplies, and diagnostic services."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-8">
            {divisions.map((division, index) => (
              <AnimatedSection key={division.title} delay={index * 0.1}>
                <motion.div
                  className="card-premium grid md:grid-cols-[auto_1fr] gap-8 items-start"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <division.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{division.title}</h3>
                    <p className="text-muted-foreground mb-6">{division.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {division.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Divisions;
