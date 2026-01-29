import { motion } from "framer-motion";
import { Sparkles, Syringe, Leaf, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Aesthetics = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Dermal Aesthetic Products",
      description: "Professional-grade dermal aesthetic products for licensed medical professionals and aesthetic practitioners.",
    },
    {
      icon: Syringe,
      title: "Intravenous Vitamin Therapy",
      description: "Medical-grade IV vitamin therapy solutions administered under proper medical supervision.",
    },
    {
      icon: Leaf,
      title: "Nutritional Supplements",
      description: "Regulated nutritional supplements compliant with MOH regulations for health and wellness.",
    },
  ];

  return (
    <Layout>
<PageHero
        badge="Aesthetic & Wellness Division"
        title="Medical Aesthetics Division"
        subtitle="Dermal aesthetic products for licensed professionals, intravenous vitamin therapy solutions under medical supervision, and regulated nutritional supplements compliant with MOH regulations."
      />

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  className="card-premium h-full text-center group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="card-premium flex flex-col md:flex-row items-start gap-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Professional Use Only</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our aesthetic and wellness products are exclusively available to licensed healthcare professionals and medical facilities. All products are compliant with MOH regulations and require proper medical supervision for administration.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Licensed Professionals Only", "MOH Compliant", "Medical Supervision Required"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-section mb-6">Inquire About Our Products</h2>
              <p className="text-body mb-8">
                Healthcare professionals interested in our aesthetic and wellness solutions can contact us for product information and partnership opportunities.
              </p>
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Aesthetics;
