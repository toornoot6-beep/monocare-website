import { motion } from "framer-motion";
import { Handshake, Globe, Award, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Partners = () => {
  const partnershipBenefits = [
    {
      icon: Globe,
      title: "Market Access",
      description: "Facilitate entry into Iraq and Middle Eastern markets with full regulatory support",
    },
    {
      icon: Award,
      title: "Local Expertise",
      description: "Deep understanding of regional healthcare systems and regulatory requirements",
    },
    {
      icon: CheckCircle,
      title: "Compliance Support",
      description: "Complete documentation and registration assistance for product approval",
    },
    {
      icon: Handshake,
      title: "Long-term Partnership",
      description: "Committed to building sustainable business relationships with manufacturers",
    },
  ];

  return (
    <Layout>
      <PageHero
        badge="Partners & Manufacturers"
        title="Trusted Partnerships"
        subtitle="Authorized local agent and distributor for international pharmaceutical, medical device, and diagnostic manufacturers."
      />

      {/* Partnership Model */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <motion.div
                  className="card-premium h-full flex gap-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
              Industries We Serve
            </span>
            <h2 className="heading-section">Across Healthcare Sectors</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Pharmaceutical",
                description: "Branded and generic medicines, prescription and OTC products",
              },
              {
                title: "Medical Devices",
                description: "Surgical equipment, monitoring devices, and hospital supplies",
              },
              {
                title: "Diagnostics",
                description: "Laboratory equipment, reagents, and diagnostic solutions",
              },
            ].map((industry, index) => (
              <AnimatedSection key={industry.title} delay={index * 0.1}>
                <motion.div
                  className="p-8 rounded-2xl bg-background border border-border/50 text-center h-full"
                  whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-section mb-6">Become a Partner</h2>
              <p className="text-body mb-8">
                Interested in expanding your reach in Iraq and the Middle East? Contact us to explore partnership opportunities.
              </p>
              <a href="/contact" className="btn-primary">
                Contact Our Team
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
