import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import CelestiaPrimeirosPassos from "./pages/CelestiaPrimeirosPassos";
import MapaProsperidadeDesbloqueio from "./pages/MapaProsperidadeDesbloqueio";
import AnaliseCompatibilidadeAmorosa from "./pages/AnaliseCompatibilidadeAmorosa";
import RegistrosAkashicos from "./pages/RegistrosAkashicos";
import ChakrasZodiaco from "./pages/ChakrasZodiaco";
import MissaoAlmaNumerologia from "./pages/MissaoAlmaNumerologia";
import LimpezaEnergetica from "./pages/LimpezaEnergetica";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import ComoFunciona from "./pages/ComoFunciona";
import Obrigado from "./pages/Obrigado";
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/celestia-primeiros-passos" element={<CelestiaPrimeirosPassos />} />
          <Route path="/mapa-prosperidade-desbloqueio" element={<MapaProsperidadeDesbloqueio />} />
          <Route path="/analise-compatibilidade-amorosa" element={<AnaliseCompatibilidadeAmorosa />} />
          <Route path="/registros-akashicos" element={<RegistrosAkashicos />} />
          <Route path="/chakras-zodiaco" element={<ChakrasZodiaco />} />
          <Route path="/missao-alma-numerologia" element={<MissaoAlmaNumerologia />} />
          <Route path="/limpeza-energetica" element={<LimpezaEnergetica />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/obrigado" element={<Obrigado />} />
          {/* Registros Akáshicos route - Portal para Vidas Passadas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
