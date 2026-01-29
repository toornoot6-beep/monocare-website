import { motion } from "framer-motion";
import { Truck, Snowflake, MapPin, ShieldCheck, Clock, BarChart3 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SupplyChain = () => {
  const capabilities = [
    {
      icon: Clock,
      title: "Secure & Timely Delivery",
      description: "Reliable delivery schedules ensuring products reach their destination on time",
    },
    {
      icon: Snowflake,
      title: "Cold-Chain Management",
      description: "Temperature-controlled logistics for products requiring cold storage",
    },
    {
      icon: MapPin,
      title: "Full Traceability",
      description: "Complete tracking systems from origin to final destination",
    },
    {
      icon: ShieldCheck,
      title: "Risk-Managed Logistics",
      description: "Comprehensive risk assessment and mitigation strategies",
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Live shipment tracking and condition monitoring",
    },
    {
      icon: Truck,
      title: "Regional Coverage",
      description: "Extensive distribution network across Iraq and the Middle East",
    },
  ];

  return (
    <Layout>
      <PageHero
        badge="Supply Chain & Distribution"
        title="Reliable Distribution Network"
        subtitle="Secure and timely delivery with full traceability and risk-managed logistics across Iraq and the Middle East."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <AnimatedSection key={capability.title} delay={index * 0.08}>
                <motion.div
                  className="card-premium h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mono-navy text-primary-foreground">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { label: "Iraq", description: "Nationwide coverage" },
                { label: "Kurdistan Region", description: "Complete distribution" },
                { label: "Middle East", description: "Regional expansion" },
              ].map((region, index) => (
                <motion.div
                  key={region.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{region.label}</h3>
                  <p className="text-primary-foreground/70 text-sm">{region.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default SupplyChain;
