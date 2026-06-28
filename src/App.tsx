import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import QuiSommesNous from "./pages/QuiSommesNous";
import NotreEquipe from "./pages/NotreEquipe";
import NosEquipePole from "./pages/NosEquipePole";
import Exposants from "./pages/Exposants";
import InfosPratiques from "./pages/InfosPratiques";
import NotFound from "./pages/NotFound";
import Redirect from "./pages/Redirect";
import Brochure from "./pages/Brochure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/exposants" element={<Exposants />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/notre-equipe" element={<NotreEquipe />} />
            <Route path="/notre-equipe/:slug" element={<NosEquipePole />} />
            <Route path="/infos-pratiques" element={<InfosPratiques />} />
          </Route>
          <Route path="/redirect-linkedin" element={<Redirect />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
