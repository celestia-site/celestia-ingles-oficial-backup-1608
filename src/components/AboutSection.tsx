import { Button } from "@/components/ui/button";
import { Users, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/ddf216ca-13e0-444e-9f7b-70773cda3386.png" 
              alt="Figura espiritual em meditação com elementos místicos"
              className="w-full rounded-2xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-cosmic border border-primary/50">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white text-sm font-medium">Nossa Missão</span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-text-primary bg-clip-text text-transparent">Despertar e</span>
                <br />
                <span className="bg-gradient-text-divine bg-clip-text text-transparent">Transformar Vidas</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-foreground/80 text-lg leading-relaxed">
              A <span className="bg-gradient-celestial bg-clip-text text-transparent font-semibold">Celestia</span> nasceu da visão de democratizar o acesso ao 
              autoconhecimento espiritual profundo. Utilizamos ferramentas 
              sagradas milenares como numerologia, astrologia, tarô e registros 
              akáshicos para revelar os códigos únicos da sua alma.
            </p>

            {/* Cards - Single card */}
            <div className="max-w-md">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 shadow-cosmic">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">Saberes Ancestrais</h3>
                </div>
                <p className="text-foreground/70 text-sm">
                  Uma fusão entre os mistérios antigos e os conhecimentos herméticos, 
                  combinando práticas espirituais elevadas, rituais de ascensão e as 
                  leis da criação consciente.
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="py-4">
              <p className="text-lg italic text-foreground/80 leading-relaxed mb-4">
                "Cada alma carrega um <span className="bg-gradient-celestial bg-clip-text text-transparent font-semibold">código único</span>, uma <span className="bg-gradient-mystic bg-clip-text text-transparent font-semibold">missão sagrada</span>. Nossa 
                função é ajudar você a decifrar esse código e despertar para sua 
                verdadeira essência."
              </p>
              <footer className="text-sm text-foreground/60">
                — Fundadora da Celestia
              </footer>
            </blockquote>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;