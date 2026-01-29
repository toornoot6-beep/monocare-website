import { motion } from "framer-motion";
import { FileCheck, ClipboardList, FileText, AlertCircle, Globe, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Regulatory = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Product Registration",
      description: "Complete product registration and dossier preparation for market authorization",
    },
    {
      icon: ClipboardList,
      title: "MOH Correspondence",
      description: "Professional liaison with Ministry of Health for all regulatory matters",
    },
    {
      icon: FileText,
      title: "Import Permits",
      description: "Import permits and clearance documentation processing",
    },
    {
      icon: AlertCircle,
      title: "Pharmacovigilance",
      description: "Pharmacovigilance coordination and adverse event reporting",
    },
  ];

  const alignments = [
    "Iraqi MOH",
    "KRG MOH", 
    "WHO Guidelines",
    "Regional Regulatory Practices",
  ];

  return (
    <Layout>
      <PageHero
        badge="Regulatory Affairs & Compliance"
        title="Regulatory Excellence"
        subtitle="Comprehensive regulatory support for market access and compliance across Iraq and the Middle East."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  className="card-premium h-full flex gap-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mono-navy text-primary-foreground">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Regulatory Alignment
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
                Our operations are fully aligned with leading regulatory bodies and international standards
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {alignments.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-6 py-3 rounded-full border border-primary-foreground/20 text-sm font-medium"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Regulatory;
