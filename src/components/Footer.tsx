import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube, Mail, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigateHome } from "@/hooks/use-navigate-home";

const Footer = () => {
  const navigateToHome = useNavigateHome();

  const services = [
    { name: "Celestia Primeiros Passos", link: "/celestia-primeiros-passos" },
    { name: "Mapa Prosperidade Desbloqueio", link: "/mapa-prosperidade-desbloqueio" },
    { name: "Análise Compatibilidade Amorosa", link: "/analise-compatibilidade-amorosa" }
  ];

  const support = [
    "Como Funciona e Reembolso",
    "Termos de Uso", 
    "Política de Privacidade"
  ];

  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <button 
              onClick={navigateToHome}
              className="flex items-center gap-2 mb-6 hover:opacity-80 transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Celestia</span>
            </button>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Despertando e transformando vidas através do autoconhecimento espiritual profundo. 
              Sua jornada de evolução da alma começa aqui.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.link} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-4">
              {support.map((item) => (
                <li key={item}>
                  {item === "Política de Privacidade" ? (
                    <Link 
                      to="/politica-privacidade" 
                      className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  ) : item === "Termos de Uso" ? (
                    <Link 
                      to="/termos-uso" 
                      className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {item}
                    </Link>
                  ) : item === "Como Funciona e Reembolso" ? (
                    <Link 
                      to="/como-funciona" 
                      className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {item}
                    </Link>
                  ) : (
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contato">
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <a 
                  href="mailto:help@celestia.guru" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  help@celestia.guru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 text-sm">São Paulo, Brasil</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Celestia. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Feito com <Sparkles className="w-4 h-4 text-amber-400" /> para despertar almas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;