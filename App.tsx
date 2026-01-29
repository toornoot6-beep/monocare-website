import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Divisions from "./pages/Divisions";
import Portfolio from "./pages/Portfolio";
import Regulatory from "./pages/Regulatory";
import QualityAssurance from "./pages/QualityAssurance";
import SupplyChain from "./pages/SupplyChain";
import Partners from "./pages/Partners";
import Aesthetics from "./pages/Aesthetics";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/regulatory" element={<Regulatory />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/aesthetics" element={<Aesthetics />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
