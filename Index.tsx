import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 0.6, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/4 right-0 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-primary/8 to-primary/3 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          />
          {/* Floating Shapes */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-primary/30"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-primary/20"
          />
        </div>

        <div className="container-narrow section-padding !py-0 relative">
          <div className="max-w-3xl">
            <AnimatedSection delay={0.2}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                Trusted Healthcare Partner
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h1 className="heading-display mb-8">
                Advancing Healthcare
                <span className="block text-primary">Across the Middle East</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-body text-lg md:text-xl max-w-2xl mb-6">
                MonoCare is a licensed pharmaceutical and medical supplies company operating in Iraq and the Middle East. We support healthcare systems through the reliable supply of high‑quality medicines, medical devices, and healthcare solutions.
              </p>
              <p className="text-body text-lg md:text-xl max-w-2xl mb-10">
                Our operations are built on regulatory compliance, quality assurance, and ethical business conduct, ensuring patient safety and institutional trust.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary group">
                  Discover More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="bg-mono-navy text-primary-foreground">
        <div className="container-narrow section-padding !py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, label: "Regulatory Compliance" },
              { icon: Heart, label: "Patient Safety" },
              { icon: Globe, label: "Regional Excellence" },
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <div className="flex items-center justify-center gap-4">
                  <item.icon className="w-5 h-5 text-primary-foreground/70" />
                  <span className="font-medium">{item.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="heading-section max-w-2xl mx-auto">
              Comprehensive Healthcare Solutions
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pharmaceuticals",
                description: "Prescription, OTC, hospital, injectable, oral, topical, branded and generic medicines.",
                icon: "💊",
              },
              {
                title: "Medical Supplies",
                description: "Surgical instruments, ICU/OR supplies, infection control, monitoring equipment.",
                icon: "🏥",
              },
              {
                title: "Diagnostics & Laboratory Solutions",
                description: "Diagnostic kits, reagents, consumables, sample systems.",
                icon: "🔬",
              },
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="card-premium h-full group">
                  <motion.span
                    className="text-4xl block mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.span>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link to="/divisions" className="btn-outline">
              Explore All Divisions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="relative rounded-3xl bg-gradient-to-br from-primary to-mono-blue-dark overflow-hidden p-12 md:p-16 text-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_white_1px,_transparent_1px)] bg-[length:30px_30px]" />
              </div>

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
                  Partner with MonoCare
                </h2>
                <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                  Join us in advancing healthcare across Iraq and the Middle East. Contact us to discuss partnership opportunities.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-full font-medium text-sm transition-all duration-300 hover:bg-primary-foreground/90 hover:shadow-lg"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
