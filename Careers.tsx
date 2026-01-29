import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Heart, Truck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Careers = () => {
  const departments = [
    {
      icon: Briefcase,
      title: "Pharmacy",
      description: "Join our pharmaceutical team to ensure quality medication distribution",
    },
    {
      icon: Users,
      title: "Regulatory Affairs",
      description: "Navigate complex regulatory landscapes and ensure compliance",
    },
    {
      icon: TrendingUp,
      title: "Medical Sales",
      description: "Build relationships with healthcare providers and institutions",
    },
    {
      icon: Heart,
      title: "Quality Assurance",
      description: "Maintain our high standards across all product lines",
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Ensure efficient distribution across our network",
    },
  ];

  return (
    <Layout>
      <PageHero
        badge="Careers"
        title="Join Our Team"
        subtitle="Opportunities in pharmacy, regulatory affairs, medical sales, quality assurance, and logistics."
      />

      {/* Departments */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
              Opportunities
            </span>
            <h2 className="heading-section">Explore Career Areas</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <AnimatedSection key={dept.title} delay={index * 0.1}>
                <motion.div
                  className="card-premium h-full text-center"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <dept.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{dept.title}</h3>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-section mb-6">Ready to Apply?</h2>
              <p className="text-body mb-8">
                Send us your CV and cover letter. We're always looking for talented individuals passionate about healthcare.
              </p>
              <a href="/contact" className="btn-primary">
                Get in Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
