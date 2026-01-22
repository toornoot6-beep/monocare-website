import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Divisions from "./pages/Divisions";
import Products from "./pages/Products";
import Regulatory from "./pages/Regulatory";
import Quality from "./pages/Quality";
import SupplyChain from "./pages/SupplyChain";
import Partners from "./pages/Partners";
import Aesthetic from "./pages/Aesthetic";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/regulatory" element={<Regulatory />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/aesthetic" element={<Aesthetic />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
