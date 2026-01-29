import { motion } from "framer-motion";
import { Building2, HeartPulse, Pill, Microscope, Users, FileText, Handshake } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Portfolio = () => {
  const clientTypes = [
    { icon: Building2, label: "Government Hospitals" },
    { icon: HeartPulse, label: "Private Hospitals" },
    { icon: Building2, label: "Clinics" },
    { icon: Pill, label: "Pharmacies" },
    { icon: Microscope, label: "Laboratories" },
    { icon: Users, label: "NGO Healthcare Programs" },
  ];

  return (
    <Layout>
      <PageHero
        badge="Product Portfolio"
        title="Serving Healthcare Institutions"
        subtitle="Serving government and private hospitals, clinics, pharmacies, laboratories, and NGO healthcare programs."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
              Who We Serve
            </span>
            <h2 className="heading-section">Our Client Network</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {clientTypes.map((client, index) => (
              <AnimatedSection key={client.label} delay={index * 0.1}>
                <motion.div
                  className="text-center p-8 rounded-2xl bg-background border border-border/50"
                  whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <client.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{client.label}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="card-premium h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Institutional Tenders</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We participate in government and institutional tenders, providing comprehensive documentation and competitive pricing for large-scale healthcare procurement needs.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card-premium h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Handshake className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Long-term Contracts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customized procurement solutions for long-term contracts, ensuring reliable supply chains, consistent quality, and competitive pricing for our institutional partners.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
