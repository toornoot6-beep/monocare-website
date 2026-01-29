import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const About = () => {
  return (
    <Layout>
      <PageHero
        badge="About MonoCare"
        title="Building Trust in Healthcare"
        subtitle="MonoCare specializes in the importation, registration, marketing, and distribution of pharmaceutical products and medical supplies across Iraq and selected Middle Eastern markets."
      />

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <p className="text-body text-lg leading-relaxed">
                We act as an authorized local partner for reputable international manufacturers, facilitating regulatory approvals and market access in compliance with Iraqi MOH, KRG authorities, and regional frameworks.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="card-premium h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a trusted regional leader recognized for regulatory excellence and quality assurance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card-premium h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To improve healthcare delivery through safe, effective, and compliant products.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
