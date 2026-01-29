import { motion } from "framer-motion";
import { Shield, Thermometer, Package, RotateCcw, Clock, ClipboardCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const QualityAssurance = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Temperature & Humidity Monitoring",
      description: "Continuous monitoring systems to maintain optimal storage conditions for all products",
    },
    {
      icon: Package,
      title: "Batch Traceability",
      description: "Complete batch tracking from manufacturer to end-user for full product accountability",
    },
    {
      icon: RotateCcw,
      title: "Recall Readiness",
      description: "Established protocols for rapid response to product recalls when necessary",
    },
    {
      icon: Clock,
      title: "Shelf-life Management",
      description: "Systematic monitoring of expiry dates to ensure product efficacy and safety",
    },
    {
      icon: Shield,
      title: "GSP-Compliant Facilities",
      description: "Controlled storage facilities meeting Good Storage Practice standards",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Documentation",
      description: "Comprehensive quality control documentation for all stored products",
    },
  ];

  return (
    <Layout>
      <PageHero
        badge="Quality Assurance & Storage"
        title="Uncompromising Quality Standards"
        subtitle="Controlled storage facilities meeting GSP standards with comprehensive quality assurance protocols."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.08}>
                <motion.div
                  className="card-premium h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="card-premium text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">GSP Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our storage facilities are designed and operated in full compliance with Good Storage Practice (GSP) guidelines, ensuring that all pharmaceutical products and medical supplies maintain their quality, safety, and efficacy throughout the storage period.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default QualityAssurance;
