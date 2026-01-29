import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const PageHero = ({ title, subtitle, badge }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background section-padding !pt-32 !pb-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="container-narrow relative">
        {badge && (
          <AnimatedSection delay={0}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {badge}
            </span>
          </AnimatedSection>
        )}
        <AnimatedSection delay={0.1}>
          <h1 className="heading-display max-w-4xl">{title}</h1>
        </AnimatedSection>
        {subtitle && (
          <AnimatedSection delay={0.2}>
            <p className="text-body max-w-2xl mt-6">{subtitle}</p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default PageHero;
